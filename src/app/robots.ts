import { MetadataRoute } from "next";

/**
 * 검색 엔진 크롤링 설정
 * Google, 네이버, 카카오, Bing 등 주요 검색 엔진 대응
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://about.flow-coder.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      },
      // Googlebot 특별 설정
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // 네이버 검색 봇
      {
        userAgent: "Yeti",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // 카카오 검색 봇
      {
        userAgent: "kakaotalk-scrap",
        allow: "/",
      },
      // Bing 검색 봇
      {
        userAgent: "bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
