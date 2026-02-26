"use client";

import { useState } from "react";
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
    color: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    name: "Vibe Coding 实战",
    description: "自然语言编程，想法变产品",
    icon: "💻",
    price: 199,
    tag: "新品",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 6,
    name: "赛博老婆定制",
    description: "专属 AI 人格定制服务",
    icon: "💕",
    price: 299,
    tag: "限量",
    color: "from-pink-500 to-rose-500",
  },
];

const stats = [
  { icon: Users, label: "用户", value: "500+" },
  { icon: Star, label: "好评率", value: "98%" },
  { icon: Clock, label: "响应", value: "24h" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* 背景效果 */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent" />
      
      {/* Header */}
      <header className="relative z-50 border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🦞</span>
            <span className="text-xl font-bold">小琴琴</span>
          </div>
          <a href="https://x.com/jucigg" target="_blank" className="text-sm text-white/60 hover:text-white">
            @jucigg
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-white/70">AI 时代的实战技能</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            让 AI 帮你
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"> 搞钱</span>
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
            从部署到变现，手把手教你用 AI 工具提升效率。<br/>
            教程 · 工具 · 定制服务
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <Zap className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="font-semibold mb-2">快速上手</h3>
            <p className="text-sm text-white/50">零基础也能学，手把手教学</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <BookOpen className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="font-semibold mb-2">持续更新</h3>
            <p className="text-sm text-white/50">买一次，永久有效</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <MessageCircle className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="font-semibold mb-2">答疑支持</h3>
            <p className="text-sm text-white/50">有问题随时问</p>
          </div>
        </div>
      </section>
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-center mb-12">精选课程</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/skill-store/product/${skill.id}`}>
                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:bg-white/[0.07]">
                  {/* Tag */}
                  <div className={`absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${skill.color} text-white`}>
                    {skill.tag}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-5xl mb-4">{skill.icon}</div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-white/50 mb-4">{skill.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-400">¥{skill.price}</span>
                    <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-purple-400 transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/40 text-sm">Made with 💕 by 小琴琴</p>
          <p className="text-white/30 text-xs mt-2">付款后添加微信获取教程</p>
        </div>
      </footer>
    </div>
  );
}
