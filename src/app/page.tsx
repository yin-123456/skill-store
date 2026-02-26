"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Star, Users, Clock, Zap, BookOpen, MessageCircle } from "lucide-react";
import Link from "next/link";

const skills = [
  { id: 1, name: "OpenClaw 部署教程", description: "从零开始，全平台部署指南", icon: "📚", price: 99, tag: "热门" },
  { id: 2, name: "Vibe Coding 实战", description: "自然语言编程，想法变产品", icon: "💻", price: 199, tag: "新品" },
  { id: 6, name: "赛博老婆定制", description: "专属 AI 人格定制服务", icon: "💕", price: 299, tag: "限量" },
];

const stats = [
  { icon: Users, label: "用户", value: "500+" },
  { icon: Star, label: "好评率", value: "98%" },
  { icon: Clock, label: "响应", value: "24h" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* 背景光效 */}
      <div className="fixed inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🦞</span>
            <span className="text-xl font-bold">小琴琴</span>
          </div>
          <a href="https://x.com/jucigg" target="_blank" className="text-sm text-white/60 hover:text-white transition">@jucigg</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-white/70">AI 时代的实战技能</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            让 AI 帮你
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"> 搞钱</span>
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
            从部署到变现，手把手教你用 AI 工具提升效率
          </p>

          <div className="flex justify-center gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "快速上手", desc: "零基础也能学", color: "text-yellow-400" },
            { icon: BookOpen, title: "持续更新", desc: "买一次永久有效", color: "text-blue-400" },
            { icon: MessageCircle, title: "答疑支持", desc: "有问题随时问", color: "text-green-400" },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <f.icon className={`w-8 h-8 ${f.color} mb-4`} />
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-white/50">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-center mb-12">精选课程</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <Link href={`/skill-store/product/${skill.id}`}>
                <div className="relative bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                  <div className="absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500">{skill.tag}</div>
                  <div className="text-5xl mb-4">{skill.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-white/50 mb-4">{skill.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-400">¥{skill.price}</span>
                    <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="text-center">
          <p className="text-white/40 text-sm">Made with 💕 by 小琴琴</p>
        </div>
      </footer>
    </div>
  );
}
