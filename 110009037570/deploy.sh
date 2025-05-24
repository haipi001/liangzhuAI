#!/bin/bash

# 部署脚本 - 用于Vercel部署前的准备工作

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

# 3. 提交代码到GitHub
echo "📌 提交代码到GitHub..."
git add .
git commit -m "准备Vercel部署 $(date '+%Y-%m-%d %H:%M:%S')" || {
  echo "⚠️ 提交代码失败，请检查git状态"
  exit 1
}
git push || {
  echo "⚠️ 推送代码失败，请检查git远程配置"
  exit 1
}
echo "✅ 代码已提交到GitHub"

# 4. 部署完成提示
echo "🎉 部署前准备已完成!"
echo "请前往Vercel控制台完成部署操作"
echo "或使用Vercel CLI执行: vercel --prod"
