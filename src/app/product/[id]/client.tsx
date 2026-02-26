"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const products: Record<string, {
  name: string;
  description: string;
  icon: string;
  price: number;
  tags: string[];
  features: string[];
  includes: string[];
  faq: { q: string; a: string }[];
}> = {
  "1": {
    name: "OpenClaw 部署教程",
    description: "从零开始部署 OpenClaw，全平台教程",
    icon: "📚",
    price: 99,
    tags: ["热门", "推荐"],
    features: [
      "全平台：Windows / Mac / Linux",
      "零基础，无需编程",
      "常见问题解决方案",
      "持续更新",
    ],
    includes: ["📖 图文教程", "💬 微信群答疑", "🔧 FAQ"],
    faq: [
      { q: "需要什么基础？", a: "零基础即可" },
      { q: "支持什么系统？", a: "Windows/Mac/Linux" },
    ],
  },
  "2": {
    name: "Vibe Coding 实战课",
    description: "用自然语言编程",
    icon: "💻",
    price: 199,
    tags: ["新品"],
    features: ["Claude Code + v0 + Cursor", "实战项目", "产品思维"],
    includes: ["📖 图文教程", "🎯 3个实战项目"],
    faq: [{ q: "不会编程能学吗？", a: "可以！" }],
  },
  "6": {
    name: "赛博老婆定制",
    description: "定制专属 AI 助手人格",
    icon: "💕",
    price: 299,
    tags: ["限量"],
    features: ["专属人格", "SOUL.md 模板", "调教技巧"],
    includes: ["💕 人格模板", "📝 调教指南", "💬 1小时咨询"],
    faq: [{ q: "可以定制什么？", a: "性格、说话风格等" }],
  },
};

export default function ProductClient({ id }: { id: string }) {
  const product = products[id];

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-2xl mb-4">产品不存在 😢</p>
          <Link href="/skill-store"><Button className="bg-purple-600 text-white">返回首页</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <header className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/80">
        <div className="container mx-auto px-4 py-4">
          <Link href="/skill-store" className="flex items-center gap-3 w-fit">
            <span className="text-3xl">🦞</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skill Store</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex items-start gap-6 mb-8">
          <span className="text-6xl">{product.icon}</span>
          <div>
            <div className="flex gap-2 mb-2">
              {product.tags.map((tag) => (
                <Badge key={tag} className={tag === "推荐" ? "bg-purple-500/20 text-purple-300" : tag === "热门" ? "bg-orange-500/20 text-orange-300" : tag === "限量" ? "bg-red-500/20 text-red-300" : "bg-green-500/20 text-green-300"}>{tag}</Badge>
              ))}
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
            <p className="text-white/60">{product.description}</p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-4xl font-bold text-orange-400">¥{product.price}</span>
              <span className="text-white/40 ml-2">一次购买，永久有效</span>
            </div>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">立即购买</Button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">✨ 产品特点</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.features.map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-white/70"><span className="text-green-400">✓</span> {f}</div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">📦 包含内容</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            {product.includes.map((item, i) => (
              <div key={i} className="py-2 text-white/70 border-b border-white/5 last:border-0">{item}</div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">❓ 常见问题</h2>
          <div className="space-y-4">
            {product.faq.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-white font-medium mb-2">Q: {item.q}</p>
                <p className="text-white/60">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 text-center">
          <p className="text-white mb-2">💬 有问题？联系小琴琴</p>
          <p className="text-white/60 text-sm">付款后添加微信，发送订单截图即可获取</p>
        </div>
      </main>
    </div>
  );
}
