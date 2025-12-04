import { MetadataRoute } from "next";

/**
 * 동적 사이트맵 생성
 * Google Search Console, 네이버 웹마스터, 카카오에 제출용
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://about.flow-coder.com";
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // 추후 페이지 추가 시 확장
    // {
    //   url: `${baseUrl}/services`,
    //   lastModified: currentDate,
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/portfolio`,
    //   lastModified: currentDate,
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/contact`,
    //   lastModified: currentDate,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
  ];
}
