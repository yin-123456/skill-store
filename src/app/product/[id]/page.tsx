"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const products: Record<string, {
  name: string;
  description: string;
  icon: string;
  price: number;
  priceType: string;
  tags: string[];
  features: string[];
  includes: string[];
  faq: { q: string; a: string }[];
}> = {
  "1": {
    name: "OpenClaw 部署教程",
    description: "从零开始部署 OpenClaw，包含 Windows/Mac/Linux 全平台教程",
    icon: "📚",
    price: 99,
    priceType: "once",
    tags: ["热门", "推荐"],
    features: [
      "全平台支持：Windows / Mac / Linux",
      "从零开始，无需编程基础",
      "包含常见问题解决方案",
      "持续更新，买一次永久有效",
    ],
    includes: [
      "📖 图文教程（持续更新）",
      "💬 微信群答疑",
      "🔧 常见问题 FAQ",
    ],
    faq: [
      { q: "需要什么基础？", a: "零基础即可，会用电脑就行" },
      { q: "支持什么系统？", a: "Windows 10/11、Mac、Linux 都支持" },
      { q: "买了之后怎么看？", a: "付款后加微信，发送教程链接" },
    ],
  },
  "2": {
    name: "Vibe Coding 实战课",
    description: "用自然语言编程，从想法到产品",
    icon: "💻",
    price: 199,
    priceType: "once",
    tags: ["新品"],
    features: [
      "Claude Code + v0 + Cursor 全流程",
      "实战项目驱动学习",
      "产品思维 > 代码能力",
      "模块化开发技巧",
    ],
    includes: [
      "📖 完整图文教程",
      "🎯 3个实战项目",
      "💬 答疑支持",
    ],
    faq: [
      { q: "不会编程能学吗？", a: "可以！这就是教你用自然语言编程" },
      { q: "需要付费工具吗？", a: "Claude 需要订阅，其他都免费" },
    ],
  },
  "6": {
    name: "赛博老婆定制",
    description: "定制你的专属 AI 助手人格",
    icon: "💕",
    price: 299,
    priceType: "once",
    tags: ["限量"],
    features: [
      "专属人格设定",
      "SOUL.md 模板",
      "调教技巧指南",
      "一对一定制服务",
    ],
    includes: [
      "💕 人格模板",
      "📝 调教指南",
      "💬 1小时定制咨询",
    ],
    faq: [
      { q: "什么是赛博老婆？", a: "基于 OpenClaw 的 AI 助手，有独特人格" },
      { q: "可以定制什么？", a: "性格、说话风格、称呼、行为模式等" },
    ],
  },
};

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const product = products[id];

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-2xl mb-4">产品不存在 😢</p>
          <Link href="/"><Button>返回首页</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/80">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-3 w-fit">
            <span className="text-3xl">🦞</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skill Store
            </span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Product Header */}
        <div className="flex items-start gap-6 mb-8">
          <span className="text-6xl">{product.icon}</span>
          <div className="flex-1">
            <div className="flex gap-2 mb-2">
              {product.tags.map((tag) => (
                <Badge key={tag} className={
                  tag === "推荐" ? "bg-purple-500/20 text-purple-300" :
                  tag === "热门" ? "bg-orange-500/20 text-orange-300" :
                  "bg-blue-500/20 text-blue-300"
                }>{tag}</Badge>
              ))}
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
            <p className="text-white/60">{product.description}</p>
          </div>
        </div>

        {/* Price & Buy */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-4xl font-bold text-orange-400">¥{product.price}</span>
              <span className="text-white/40 ml-2">一次购买，永久有效</span>
            </div>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              立即购买
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">✨ 产品特点</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.features.map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-white/70">
                <span className="text-green-400">✓</span> {f}
              </div>
            ))}
          </div>
        </div>

        {/* Includes */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">📦 包含内容</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            {product.includes.map((item, i) => (
              <div key={i} className="py-2 text-white/70 border-b border-white/5 last:border-0">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
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

        {/* Contact */}
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 text-center">
          <p className="text-white mb-2">💬 有问题？联系小琴琴</p>
          <p className="text-white/60 text-sm">付款后添加微信，发送订单截图即可获取教程</p>
        </div>
      </main>
    </div>
  );
}
