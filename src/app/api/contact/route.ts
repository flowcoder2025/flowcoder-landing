import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  category?: string;
  categoryTitle?: string;
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  budget?: string;
  referenceUrl?: string;
  message?: string;
  submittedAt?: string;
}

const DISCORD_COLOR = 0xccff00;

function safe(value: string | undefined, fallback = "(미입력)") {
  if (!value) return fallback;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : fallback;
}

function truncate(value: string, max: number) {
  if (value.length <= max) return value;
  return value.slice(0, max - 1) + "…";
}

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.DISCORD_CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("DISCORD_CONTACT_WEBHOOK_URL is not configured");
    return NextResponse.json(
      { error: "Webhook is not configured" },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.name || !body.phone || !body.category) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const fields = [
    { name: "분류", value: safe(body.categoryTitle ?? body.category), inline: true },
    { name: "담당자", value: safe(body.name), inline: true },
    { name: "회사", value: safe(body.company), inline: true },
    { name: "연락처", value: safe(body.phone), inline: true },
    { name: "이메일", value: safe(body.email), inline: true },
    { name: "예산", value: safe(body.budget), inline: true },
    { name: "참고 링크", value: safe(body.referenceUrl), inline: false },
    {
      name: "문의 내용",
      value: truncate(safe(body.message), 1024),
      inline: false,
    },
  ];

  const discordPayload = {
    username: "FlowCoder 문의",
    embeds: [
      {
        title: "신규 문의 도착",
        color: DISCORD_COLOR,
        fields,
        timestamp: body.submittedAt ?? new Date().toISOString(),
        footer: { text: "about.flow-coder.com" },
      },
    ],
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Discord webhook failed:", res.status, text);
      return NextResponse.json(
        { error: "Discord webhook failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Discord webhook error:", error);
    return NextResponse.json(
      { error: "Network error" },
      { status: 502 }
    );
  }
}
