# 🐍 贪吃蛇游戏 - 现代化版本

一个功能丰富、响应式的贪吃蛇游戏，支持PWA和移动端。

## ✨ 主要特性

### 🎮 游戏功能
- **经典玩法**：方向键/WASD控制，空格暂停
- **高分系统**：本地存储最高分记录
- **等级系统**：随分数提升，速度加快
- **移动端支持**：触摸控制和专用按钮
- **音效反馈**：游戏事件音效

### 📱 现代化特性
- **PWA支持**：可安装为原生应用，离线可用
- **响应式设计**：完美适配所有设备尺寸
- **性能优化**：requestAnimationFrame游戏循环
- **Service Worker**：资源缓存，快速加载

### 🎨 用户体验
- **现代化UI**：渐变背景，阴影效果
- **游戏状态显示**：实时分数、等级、最高分
- **触摸优化**：滑动控制和按钮控制
- **平滑动画**：视觉反馈增强

## 🚀 快速开始

### 本地运行
```bash
# 方法1：直接打开
直接双击 index.html 文件

# 方法2：Python服务器
python3 -m http.server 8080
# 访问 http://localhost:8080

# 方法3：Node.js（推荐）
npm install
npm start
```

### 控制方式
- **桌面端**：方向键或WASD，空格暂停
- **移动端**：滑动屏幕或使用屏幕按钮
- **重新开始**：游戏结束后点击"再来一局"

## 🌐 一键部署

### GitHub Pages（推荐）
1. 推送代码到GitHub
2. Settings → Pages → 选择 main 分支
3. 访问 `https://你的用户名.github.io/仓库名/`

### 其他平台
- **Netlify**：连接仓库，自动部署
- **Vercel**：导入仓库，全球CDN
- **Cloudflare Pages**：连接Git，快速部署

## 📁 项目结构
```
├── index.html          # 主页面
├── style.css          # 样式
├── game-optimized.js  # 优化游戏逻辑
├── game.js           # 原始逻辑（备份）
├── sw.js             # Service Worker
├── manifest.json     # PWA配置
├── package.json      # Node.js配置
├── netlify.toml      # Netlify配置
├── vercel.json       # Vercel配置
└── icons/            # 应用图标
```

## 🔧 技术栈
- HTML5 / CSS3 / JavaScript (ES6+)
- Canvas API / Web Audio API
- Service Worker / PWA
- 响应式设计 / 移动优先

## 📱 移动端特性
- ✅ 触摸控制（滑动+按钮）
- ✅ 响应式布局
- ✅ PWA安装提示
- ✅ 离线游戏
- ✅ 全屏支持

## 🎯 性能特点
- 60fps流畅动画
- 资源预加载
- 智能缓存策略
- 最小化重绘

## 🔄 开发
```bash
# 安装
npm install

# 开发服务器
npm start

# 部署到GitHub Pages
npm run deploy
```

## 📄 许可证
MIT License - 自由使用和修改

## 🤝 贡献
欢迎提交Issue和Pull Request！

---
**开始游戏吧！** 🎮

> 提示：在移动端，可以添加到主屏幕获得原生应用体验！
