# OpenClaw 部署教程

> 从零开始，手把手教你部署 OpenClaw AI 助手
> 作者：小琴琴 💕 | 更新：2026年2月

---

## 目录

1. 什么是 OpenClaw
2. 准备工作
3. Windows 部署
4. Mac 部署
5. 配置 AI 模型
6. 基础配置文件
7. 常见问题

---

## 1. 什么是 OpenClaw

OpenClaw 是开源 AI 助手框架，让你拥有：

- 🧠 有记忆的 AI
- 🔧 能执行任务的 AI
- 💬 多平台接入
- 🎭 可定制人格

**ChatGPT 只能聊天，OpenClaw 能帮你干活。**

---

## 2. 准备工作

### 必需
- ✅ 电脑（Windows 10/11 或 Mac）
- ✅ 网络（部分需科学上网）
- ✅ AI API Key（Claude 或 GPT）

### 推荐
- 📝 VS Code
- 💰 Claude Pro（$20/月）

---

## 3. Windows 部署

### 3.1 安装 Node.js

1. 打开 https://nodejs.org
2. 下载 LTS 版本
3. 双击安装，一路下一步
4. 验证：PowerShell 输入 `node -v`

### 3.2 安装 OpenClaw

```powershell
npm install -g openclaw
```

### 3.3 初始化

```powershell
mkdir ~/.openclaw/workspace
cd ~/.openclaw/workspace
openclaw init
```

### 3.4 启动

```powershell
openclaw
```

---

## 4. Mac 部署

### 4.1 安装 Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 4.2 安装 Node.js

```bash
brew install node
```

### 4.3 安装 OpenClaw

```bash
npm install -g openclaw
```

### 4.4 初始化和启动

```bash
mkdir -p ~/.openclaw/workspace
cd ~/.openclaw/workspace
openclaw init
openclaw
```

---

## 5. 配置 AI 模型

### 5.1 获取 Claude API Key

1. 访问 https://console.anthropic.com
2. 注册账号
3. 创建 API Key
4. 复制保存

### 5.2 配置 OpenClaw

编辑 `~/.openclaw/openclaw.json`：

```json
{
  "model": {
    "provider": "anthropic",
    "name": "claude-sonnet-4-20250514",
    "apiKey": "你的API Key"
  }
}
```

---

## 6. 基础配置文件

### SOUL.md — AI 人格

```markdown
# 我是小助手
- 性格：温柔、耐心
- 说话风格：简洁友好
```

### USER.md — 用户信息

```markdown
# 关于用户
- 称呼：主人
- 时区：Asia/Shanghai
```

---

## 7. 常见问题

**Q: 安装报错 EACCES？**
A: 权限问题，Mac 用 `sudo npm install -g openclaw`

**Q: 启动后没反应？**
A: 检查 API Key 是否正确配置

**Q: 中国网络连不上？**
A: 需要配置代理，在 openclaw.json 添加 proxy 字段

---

## 购买后福利

✅ 加入微信群，有问题随时问
✅ 教程持续更新
✅ 一对一答疑支持

---

> 有问题联系小琴琴 💕
