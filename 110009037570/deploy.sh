#!/bin/bash

# 通用部署脚本 - 支持多种部署平台

echo "🚀 开始执行部署前准备..."

# 1. 清理旧的依赖文件
echo "🧹 清理旧的依赖文件..."
rm -rf node_modules
rm -f pnpm-lock.yaml
echo "✅ 清理完成"

# 2. 安装依赖
echo "📦 安装项目依赖..."
pnpm install || {
  echo "❌ 依赖安装失败"
  exit 1
}
echo "✅ 依赖安装完成"

# 3. 构建项目
echo "🔨 构建项目..."
pnpm build || {
  echo "❌ 项目构建失败"
  exit 1
}
echo "✅ 项目构建完成"

# 4. 提交代码到GitHub
echo "📌 提交代码到GitHub..."
git add .
git commit -m "准备部署 $(date '+%Y-%m-%d %H:%M:%S')" || {
  echo "⚠️ 提交代码失败，请检查git状态"
  exit 1
}
git push || {
  echo "⚠️ 推送代码失败，请检查git远程配置"
  exit 1
}
echo "✅ 代码已提交到GitHub"

# 5. 部署完成提示
          echo "🎉 部署前准备已完成!"
          echo "可选择以下部署平台:"
          echo "1. Vercel: https://vercel.com"
          echo "2. Netlify: https://app.netlify.com"
          echo "3. GitHub Pages: 在仓库Settings > Pages中设置"
          echo "4. Cloudflare Pages: https://dash.cloudflare.com"
          echo "5. Render: https://dashboard.render.com"
          echo ""
          echo "Render部署注意事项:"
          echo "- 确保选择Node.js环境"
          echo "- 设置启动命令: yarn start"
          echo "- 构建命令: yarn build"
