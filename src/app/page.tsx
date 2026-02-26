"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const skills = [
  { id: 1, name: "OpenClaw 部署教程", desc: "从零开始，全平台部署指南", icon: "📚", price: 99 },
  { id: 2, name: "Vibe Coding 实战", desc: "自然语言编程，想法变产品", icon: "💻", price: 199 },
  { id: 6, name: "赛博老婆定制", desc: "专属 AI 人格定制服务", icon: "💕", price: 299 },
];

const stats = [
  { icon: "🦞", value: "500+", label: "用户" },
  { icon: "⭐", value: "98%", label: "好评率" },
  { icon: "⚡", value: "24h", label: "响应" },
];

const tools = [
  { icon: "🦞", name: "OpenClaw", desc: "AI Agent" },
  { icon: "🧠", name: "Claude", desc: "Anthropic" },
  { icon: "⚡", name: "GPT-4", desc: "OpenAI" },
  { icon: "▲", name: "Next.js", desc: "Framework" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      {/* 背景渐变 */}
      <div className="fixed inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />
      
      {/* Header */}
      <header className="relative z-50 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦞</span>
            <span className="font-medium">小琴琴</span>
          </div>
          <a href="https://x.com/jucigg" target="_blank" className="text-sm text-white/40 hover:text-white/80 transition">@jucigg</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-white/40 text-sm mb-4">AI Agent Builder</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            小琴琴技能商店
          </h1>
          <p className="text-lg text-white/50 mb-2">让 AI 帮你搞钱</p>
          <p className="text-white/30 text-sm">OpenClaw 资深玩家 · AI 教程 · 定制服务</p>
        </motion.div>

        {/* Stats */}
        <div className="flex justify-center gap-12 mt-12">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.1 }} className="text-center">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-xs text-white/30">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-16">
        <p className="text-white/30 text-sm mb-2">Tools</p>
        <h2 className="text-2xl font-bold mb-8">技术栈</h2>
        <div className="grid grid-cols-4 gap-3">
          {tools.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.05 }} className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">{t.icon}</div>
              <div className="text-sm font-medium">{t.name}</div>
              <div className="text-xs text-white/30">{t.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/30 text-sm">Made with 💕 by 小琴琴</p>
        </div>
      </footer>
    </div>
  );
}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-16">
        <p className="text-white/30 text-sm mb-2">Products</p>
        <h2 className="text-2xl font-bold mb-8">产品</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <motion.div key={s.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }} whileHover={{ y: -4 }} className="group">
              <Link href={`/skill-store/product/${s.id}`}>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:border-white/20 hover:bg-white/[0.05] transition-all">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-medium mb-1">{s.name}</h3>
                  <p className="text-sm text-white/40 mb-4">{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-400">¥{s.price}</span>
                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/60 transition" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
