const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
})

const withPWA = require("next-pwa")({
  dest: "public"
})

module.exports = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost"
        },
        {
          protocol: "http",
          hostname: "127.0.0.1"
        },
        {
          protocol: "https",
          hostname: "**"
        }
      ]
    },
    experimental: {
      serverComponentsExternalPackages: ["sharp", "onnxruntime-node"]
    }
   // 添加环境变量
      env: {
          METADATA_BASE: 'https://gpt4.aliyu.vip', // 更换为你的应用的实际URL
          NEXT_PUBLIC_SUPABASE_URL: 'https://snphcdgpsamvpgzmztep.supabase.co', // 更换为你的Supabase项目URL
          NEXT_PUBLIC_SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucGhjZGdwc2FtdnBnem16dGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NDA2NDksImV4cCI6MjAyNTIxNjY0OX0.7YrTo7r03DIjK64cAnGukNW-jikMt9SuF0zoqB6TgTI', // 更换为你的Supabase匿名密钥
      },
  })
)
