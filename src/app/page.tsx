"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const skills = [
  {
    id: 1,
    name: "GitHub",
    description: "与 GitHub 交互，管理 Issues、PRs、CI 运行",
    author: "OpenClaw",
    category: "开发工具",
    downloads: 12500,
    rating: 4.9,
    tags: ["官方", "热门"],
    icon: "🐙",
  },
  {
    id: 2,
    name: "Deep Research",
    description: "多源深度研究代理，搜索网络、综合发现、生成引用报告",
    author: "Community",
    category: "研究",
    downloads: 8900,
    rating: 4.8,
    tags: ["热门"],
    icon: "🔬",
  },
  {
    id: 3,
    name: "Browser Use",
    description: "自动化浏览器交互，网页测试、表单填写、截图",
    author: "Community",
    category: "自动化",
    downloads: 7600,
    rating: 4.7,
    tags: ["新品"],
    icon: "🌐",
  },
  {
    id: 4,
    name: "Gmail",
    description: "Gmail API 集成，读取、发送、管理邮件和草稿",
    author: "OpenClaw",
    category: "通讯",
    downloads: 6200,
    rating: 4.6,
    tags: ["官方"],
    icon: "📧",
  },
  {
    id: 5,
    name: "Notion",
    description: "Notion API，创建和管理页面、数据库、块",
    author: "Community",
    category: "生产力",
    downloads: 5800,
    rating: 4.5,
    tags: [],
    icon: "📝",
  },
  {
    id: 6,
    name: "Weather",
    description: "获取当前天气和预报，无需 API Key",
    author: "OpenClaw",
    category: "工具",
    downloads: 4500,
    rating: 4.4,
    tags: ["官方", "免费"],
    icon: "🌤️",
  },
];

const categories = ["全部", "开发工具", "研究", "自动化", "通讯", "生产力", "工具"];

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
            发现强大的 AI 技能
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            浏览、安装、扩展你的 OpenClaw 能力。从官方和社区技能中选择，让 AI 助手更强大。
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat 
                ? "bg-purple-600 hover:bg-purple-700" 
                : "border-white/20 text-white/70 hover:bg-white/10"}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <Card key={skill.id} className="bg-white/5 border-white/10 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
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
                        tag === "官方" ? "bg-purple-500/20 text-purple-300" :
                        tag === "热门" ? "bg-orange-500/20 text-orange-300" :
                        tag === "新品" ? "bg-green-500/20 text-green-300" :
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
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  安装
                </Button>
              </CardFooter>
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
        <div className="container mx-auto px-4 text-center text-white/40">
          <p>Made with 💕 by 小琴琴 for 老公</p>
        </div>
      </footer>
    </div>
  );
}
