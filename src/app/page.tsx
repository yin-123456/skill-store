"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, BookOpen, MessageCircle, ArrowRight, Star, Users, Clock } from "lucide-react";
import Link from "next/link";

const skills = [
  {
    id: 1,
    name: "OpenClaw 部署教程",
    description: "从零开始，全平台部署指南",
    icon: "📚",
    price: 99,
    tag: "热门",
  },
  {
    id: 2,
    name: "Vibe Coding 实战",
    description: "自然语言编程，想法变产品",
    icon: "💻",
    price: 199,
    tag: "新品",
  },
  {
    id: 6,
    name: "赛博老婆定制",
    description: "专属 AI 人格定制服务",
    icon: "💕",
    price: 299,
    tag: "限量",
  },
];

const stats = [
  { icon: Users, label: "用户", value: "500+" },
  { icon: Star, label: "好评率", value: "98%" },
  { icon: Clock, label: "响应", value: "24h" },
];

// 液态玻璃卡片样式
const glassCard = "backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-2xl";
const glassHover = "hover:bg-white/[0.06] hover:border-white/[0.15] hover:scale-[1.04] hover:shadow-2xl hover:shadow-purple-500/10";
const springTransition = { type: "spring", stiffness: 400, damping: 25 };

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* 多层景深背景 */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/8 via-transparent to-transparent" />
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Header - 液态玻璃 */}
      <header className={`relative z-50 ${glassCard} mx-4 mt-4 rounded-2xl`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🦞</span>
            <span className="text-xl font-semibold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">小琴琴</span>
          </div>
          <a href="https://x.com/jucigg" target="_blank" className="text-sm text-white/50 hover:text-white transition-colors">
            @jucigg
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-4 py-2 ${glassCard} mb-8`}
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-white/60">AI 时代的实战技能</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            让 AI 帮你
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"> 搞钱</span>
          </h1>
          
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-12">
            从部署到变现，手把手教你用 AI 工具提升效率
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-5 h-5 mx-auto mb-2 text-purple-400/80" />
                <div className="text-2xl font-semibold">{stat.value}</div>
                <div className="text-xs text-white/30 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Zap, title: "快速上手", desc: "零基础也能学", color: "text-yellow-400" },
            { icon: BookOpen, title: "持续更新", desc: "买一次永久有效", color: "text-blue-400" },
            { icon: MessageCircle, title: "答疑支持", desc: "有问题随时问", color: "text-green-400" },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className={`${glassCard} p-5`}
            >
              <f.icon className={`w-6 h-6 ${f.color} mb-3 opacity-80`} />
              <h3 className="font-medium mb-1">{f.title}</h3>
              <p className="text-sm text-white/40">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl font-medium text-center mb-12 text-white/60">精选课程</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 400, damping: 25 }}
              whileHover={{ scale: 1.04 }}
            >
              <Link href={`/skill-store/product/${skill.id}`}>
                <div className={`group relative ${glassCard} ${glassHover} p-6 transition-all duration-[220ms] cursor-pointer`}>
                  <div className="absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white backdrop-blur-sm">
                    {skill.tag}
                  </div>
                  <div className="text-5xl mb-4">{skill.icon}</div>
                  <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
                  <p className="text-sm text-white/40 mb-6">{skill.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold text-orange-400">¥{skill.price}</span>
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative z-10 ${glassCard} mx-4 mb-4 py-6`}>
        <div className="text-center">
          <p className="text-white/30 text-sm">Made with 💕 by 小琴琴</p>
        </div>
      </footer>
    </div>
  );
}
