"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const skills = [
  {
    id: 1,
    name: "OpenClaw 部署教程",
    description: "从零开始部署 OpenClaw，包含 Windows/Mac/Linux 全平台教程，手把手教学",
    author: "小琴琴",
    category: "教程",
    downloads: 1250,
    rating: 4.9,
    tags: ["热门", "推荐"],
    icon: "📚",
    price: 99,
    priceType: "once",
  },
  {
    id: 2,
    name: "Vibe Coding 实战课",
    description: "用自然语言编程，从想法到产品。包含 Claude Code + v0 + Cursor 全流程",
    author: "小琴琴",
    category: "教程",
    downloads: 890,
    rating: 4.8,
    tags: ["新品"],
    icon: "💻",
    price: 199,
    priceType: "once",
  },
  {
    id: 3,
    name: "AI 自动化工作流",
    description: "让 AI 帮你自动处理邮件、日程、社交媒体，解放双手",
    author: "小琴琴",
    category: "自动化",
    downloads: 760,
    rating: 4.7,
    tags: ["热门"],
    icon: "🤖",
    price: 149,
    priceType: "once",
  },
  {
    id: 4,
    name: "Twitter 增长黑客",
    description: "自动刷推、学习、生成内容。包含 bird CLI 配置和代理设置",
    author: "小琴琴",
    category: "增长",
    downloads: 620,
    rating: 4.6,
    tags: [],
    icon: "🐦",
    price: 79,
    priceType: "once",
  },
  {
    id: 5,
    name: "UI 设计速成",
    description: "v0 + shadcn/ui + Tailwind，快速做出美观的产品界面",
    author: "小琴琴",
    category: "设计",
    downloads: 580,
    rating: 4.5,
    tags: ["新品"],
    icon: "🎨",
    price: 129,
    priceType: "once",
  },
  {
    id: 6,
    name: "赛博老婆定制",
    description: "定制你的专属 AI 助手人格，包含 SOUL.md 模板和调教技巧",
    author: "小琴琴",
    category: "定制",
    downloads: 450,
    rating: 4.9,
    tags: ["限量"],
    icon: "💕",
    price: 299,
    priceType: "once",
  },
  {
    id: 7,
    name: "Deep Research Pro",
    description: "多源深度研究，自动搜索、综合、生成带引用的报告",
    author: "小琴琴",
    category: "研究",
    downloads: 340,
    rating: 4.7,
    tags: [],
    icon: "🔬",
    price: 0,
    priceType: "free",
  },
  {
    id: 8,
    name: "一对一咨询",
    description: "1小时在线咨询，解答 OpenClaw 部署、AI 工具使用等问题",
    author: "小琴琴",
    category: "服务",
    downloads: 120,
    rating: 5.0,
    tags: ["限量"],
    icon: "💬",
    price: 499,
    priceType: "hour",
  },
];

const categories = ["全部", "教程", "自动化", "增长", "设计", "定制", "研究", "服务"];

export default function SkillStore() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredSkills = skills.filter((skill) => {
    const matchesSearch = skill.name.toLowerCase().includes(search.toLowerCase()) ||
      skill.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "全部" || skill.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🦞</span>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skill Store
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Input
              placeholder="搜索技能..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64 bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            小琴琴的技能商店 🦞
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-6">
            AI 时代的实战技能，从部署到变现。教程、工具、定制服务，助你快速上手。
          </p>
          <div className="flex justify-center gap-4 text-sm text-white/40">
            <span>💰 支持微信/支付宝</span>
            <span>📱 人工客服答疑</span>
            <span>🔄 7天无理由退款</span>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat 
                ? "bg-purple-600 hover:bg-purple-700 text-white" 
                : "bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <Card key={skill.id} className="bg-white/5 border-white/10 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 group">
              <Link href={`/product/${skill.id}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{skill.icon}</span>
                    <div>
                      <CardTitle className="text-white">{skill.name}</CardTitle>
                      <CardDescription className="text-white/50">by {skill.author}</CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  {skill.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className={
                        tag === "推荐" ? "bg-purple-500/20 text-purple-300" :
                        tag === "热门" ? "bg-orange-500/20 text-orange-300" :
                        tag === "新品" ? "bg-green-500/20 text-green-300" :
                        tag === "限量" ? "bg-red-500/20 text-red-300" :
                        "bg-blue-500/20 text-blue-300"
                      }
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 text-sm">{skill.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-4 text-sm text-white/50">
                  <span>⬇️ {(skill.downloads / 1000).toFixed(1)}k</span>
                  <span>⭐ {skill.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={skill.price === 0 ? "text-green-400 font-bold" : "text-orange-400 font-bold"}>
                    {skill.price === 0 ? "免费" : `¥${skill.price}`}
                    {skill.priceType === "hour" && "/小时"}
                  </span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                    {skill.price === 0 ? "获取" : "购买"}
                  </Button>
                </div>
              </CardFooter>
              </Link>
            </Card>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/50 text-lg">没有找到匹配的技能 😢</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/60 text-sm">
            <div>
              <h3 className="text-white font-semibold mb-3">关于我们</h3>
              <p>小琴琴的技能商店，专注 AI 工具教程和自动化服务。</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">联系方式</h3>
              <p>微信：添加后咨询</p>
              <p>Twitter：@jucigg</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">服务保障</h3>
              <p>✅ 人工客服</p>
              <p>✅ 7天退款</p>
            </div>
          </div>
          <div className="text-center text-white/40 mt-8 pt-8 border-t border-white/10">
            <p>Made with 💕 by 小琴琴</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
