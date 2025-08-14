# 部署指南

本文档详细说明如何将个人博客项目部署到各种平台。

## 🚀 部署选项

### 1. GitHub Pages (推荐)

**优点**: 免费、简单、与GitHub集成
**适用场景**: 个人项目、开源项目

#### 步骤：
1. 将代码推送到GitHub仓库
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/personal-blog.git
git push -u origin main
```

2. 启用GitHub Pages
   - 进入仓库设置 (Settings)
   - 滚动到 "Pages" 部分
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main" 和 "/ (root)"
   - 点击 "Save"

3. 访问你的网站
   - URL: `https://yourusername.github.io/personal-blog`

### 2. Netlify

**优点**: 自动部署、CDN、表单处理
**适用场景**: 需要额外功能的项目

#### 方法一：拖拽部署
1. 访问 [netlify.com](https://netlify.com)
2. 将整个项目文件夹拖拽到部署区域
3. 获得随机域名，可自定义

#### 方法二：Git集成
1. 连接GitHub仓库
2. 构建设置：
   - Build command: (留空)
   - Publish directory: (留空或 ".")
3. 自动部署

### 3. Vercel

**优点**: 快速、现代化、边缘网络
**适用场景**: 现代静态网站

#### 步骤：
1. 访问 [vercel.com](https://vercel.com)
2. 导入GitHub仓库
3. 项目设置：
   - Framework Preset: Other
   - Build Command: (留空)
   - Output Directory: (留空)
4. 部署

### 4. 传统Web主机

**适用场景**: 已有主机服务

#### 步骤：
1. 将所有文件上传到主机的web目录
2. 确保 `index.html` 在根目录
3. 通过域名访问

## 📝 部署前检查清单

### 必需文件检查
- [ ] `index.html` - 主页面
- [ ] `styles/main.css` - 样式文件
- [ ] `js/main.js` - JavaScript文件
- [ ] `assets/images/avatar.jpg` - 个人头像
- [ ] `assets/resume/resume.pdf` - PDF简历

### 内容自定义检查
- [ ] 修改个人信息 (姓名、介绍等)
- [ ] 更新联系方式
- [ ] 替换项目信息
- [ ] 更新博客内容
- [ ] 添加真实的项目截图
- [ ] 上传真实的个人简历

### 技术检查
- [ ] 所有链接正常工作
- [ ] 图片正确加载
- [ ] PDF简历可以查看
- [ ] 移动端适配正常
- [ ] 模态框功能正常

## 🔧 自定义域名

### GitHub Pages
1. 在仓库根目录创建 `CNAME` 文件
2. 文件内容为你的域名: `yourdomain.com`
3. 在域名DNS设置中添加CNAME记录指向 `yourusername.github.io`

### Netlify
1. 在Netlify控制面板中点击 "Domain settings"
2. 点击 "Add custom domain"
3. 输入域名并验证
4. 更新DNS设置

### Vercel
1. 在项目设置中找到 "Domains"
2. 添加自定义域名
3. 按照提示配置DNS

## 🔒 HTTPS配置

所有推荐的平台都自动提供HTTPS：
- GitHub Pages: 自动启用
- Netlify: 自动启用
- Vercel: 自动启用

## 📊 性能优化建议

### 图片优化
```bash
# 使用工具压缩图片
npm install -g imagemin-cli
imagemin assets/images/*.jpg --out-dir=assets/images/optimized
```

### 文件压缩
大多数平台自动启用Gzip压缩，无需手动配置。

## 🔄 持续部署

### 自动部署流程
1. 本地修改代码
2. 提交到Git: `git add . && git commit -m "更新内容"`
3. 推送到远程: `git push`
4. 平台自动检测变更并重新部署

### 部署状态监控
- GitHub Pages: 在Actions标签页查看部署状态
- Netlify: 在Deploys页面查看构建日志
- Vercel: 在Deployments页面查看部署历史

## 🐛 常见问题

### 问题1: 图片不显示
**解决方案**: 检查图片路径和文件名是否正确，确保大小写匹配

### 问题2: PDF无法查看
**解决方案**: 确保PDF文件存在且命名为 `resume.pdf`

### 问题3: 移动端样式问题
**解决方案**: 检查CSS媒体查询和视口设置

### 问题4: JavaScript功能异常
**解决方案**: 打开浏览器开发者工具查看控制台错误

## 📈 SEO优化

### meta标签优化
在 `index.html` 中添加：
```html
<meta name="description" content="个人博客描述">
<meta name="keywords" content="关键词1,关键词2">
<meta property="og:title" content="网站标题">
<meta property="og:description" content="网站描述">
```

### sitemap.xml (可选)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 📞 获取帮助

如果遇到部署问题：
1. 检查平台的官方文档
2. 查看部署日志和错误信息
3. 在GitHub Issues中寻求帮助
4. 联系平台客服支持

---

祝你部署成功！🎉
