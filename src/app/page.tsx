"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const products = [
  { id: 1, name: "OpenClaw 部署教程", desc: "从零开始，全平台部署指南", price: "¥99" },
  { id: 2, name: "Vibe Coding 实战", desc: "自然语言编程，想法变产品", price: "¥199" },
  { id: 6, name: "赛博老婆定制", desc: "专属 AI 人格定制服务", price: "¥299" },
];

const tools = [
  { icon: "🦞", name: "OpenClaw", desc: "AI Agent Platform" },
  { icon: "🧠", name: "Claude", desc: "Anthropic AI" },
  { icon: "⚡", name: "GPT-4", desc: "OpenAI" },
  { icon: "▲", name: "Next.js", desc: "Web Framework" },
  { icon: "🎬", name: "Seedance", desc: "Video Generation" },
  { icon: "💬", name: "Telegram", desc: "Bot Interface" },
];

function SectionTitle({ en, zh }: { en: string; zh: string }) {
  return (
    <div className="relative mb-10">
      <span className="absolute -top-8 -left-2 text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-800/50 to-transparent select-none pointer-events-none tracking-tight">{en}</span>
      <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase mb-2 relative z-10">{en}</p>
      <h2 className="text-2xl font-semibold text-white relative z-10">{zh}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#09090b] text-white font-sans">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />

      {/* 第一屏 - Hero */}
      <section className="relative z-10 h-screen flex flex-col">
        {/* Nav */}
        <nav className="border-b border-zinc-800/50">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-xl">🦞</span>
              <span className="text-sm font-medium text-zinc-300">小琴琴</span>
            </div>
            <a href="https://x.com/jucigg" target="_blank" className="text-xs text-zinc-500 hover:text-zinc-300 transition">@jucigg</a>
          </div>
        </nav>

        {/* Hero 内容 */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-zinc-500 text-sm tracking-wide mb-3">AI Agent Builder</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">小琴琴</h1>
            <p className="text-zinc-400 text-xl mb-2">让 AI 帮你搞钱</p>
            <p className="text-zinc-600 text-sm">OpenClaw 资深玩家 · AI 教程 · 定制服务</p>
          </motion.div>

          {/* 统计 */}
          <div className="flex gap-12 mt-12">
            <div className="text-center"><span className="text-2xl">🦞</span><p className="text-2xl font-bold text-white mt-2">500+</p><p className="text-xs text-zinc-600">用户</p></div>
            <div className="text-center"><span className="text-2xl">⭐</span><p className="text-2xl font-bold text-white mt-2">98%</p><p className="text-xs text-zinc-600">好评率</p></div>
            <div className="text-center"><span className="text-2xl">📡</span><p className="text-2xl font-bold text-white mt-2">24h</p><p className="text-xs text-zinc-600">响应</p></div>
          </div>
        </div>

        {/* 滚动提示 */}
        <motion.div 
          className="pb-8 flex flex-col items-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <p className="text-zinc-600 text-xs mb-2">向下滚动</p>
          <ChevronDown className="w-5 h-5 text-zinc-600" />
        </motion.div>
      </section>

      {/* 第二屏 - 内容 */}
      <section className="relative z-10 min-h-screen py-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Products */}
          <div className="mb-20">
            <SectionTitle en="Products" zh="产品" />
            <div className="grid md:grid-cols-3 gap-4">
              {products.map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
                  <Link href={`/skill-store/product/${p.id}`}>
                    <div className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 hover:bg-zinc-900/80 transition-all cursor-pointer">
                      <h3 className="font-medium text-white mb-1">{p.name}</h3>
                      <p className="text-sm text-zinc-500 mb-4">{p.desc}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-orange-400 font-semibold">{p.price}</span>
                        <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="mb-20">
            <SectionTitle en="Tools" zh="技术栈" />
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {tools.map((t, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4 text-center cursor-pointer hover:border-zinc-700 transition-all">
                  <span className="text-xl">{t.icon}</span>
                  <p className="text-xs font-medium text-zinc-300 mt-2">{t.name}</p>
                  <p className="text-[10px] text-zinc-600">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-zinc-800/50 py-8">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-zinc-600 text-xs">Made with 💕 by 小琴琴</p>
          </div>
        </footer>
      </section>
    </div>
  );
}
