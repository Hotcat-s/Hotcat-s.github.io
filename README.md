# 个人博客项目

一个现代化的个人博客静态网站，采用蓝色主题设计，包含个人介绍、项目展示、技术分享等功能。

## 🌟 项目特色

- ✨ 现代化设计，采用蓝色主题
- 📱 完全响应式，支持移动端
- 🚀 纯静态网站，无需后端
- 🎯 专为简历展示优化
- 📄 支持PDF简历在线查看
- 🖼️ 丰富的项目展示功能
- 📝 技术博客分享平台

## 📋 功能模块

### 1. 个人介绍 (关于我)
- 个人基本信息展示
- 技能专长可视化展示
- 兴趣爱好标签
- PDF简历在线查看和下载
- 工作经验展示

### 2. 项目展示
- 项目卡片展示
- 项目详情模态框
- 技术栈标签
- 在线演示和源码链接
- 项目挑战和收获描述

### 3. 技术分享
- 博客文章列表
- 文章分类和标签
- 文章详情模态框
- 发布日期和阅读功能

### 4. 联系方式
- 多种联系方式展示
- 社交媒体链接
- 个人位置信息

## 🛠️ 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **样式**: CSS Grid, Flexbox, CSS Variables
- **图标**: Font Awesome 6
- **字体**: Google Fonts (Inter)
- **响应式**: Media Queries
- **交互**: 原生JavaScript

## 📁 项目结构

```
个人博客/
├── index.html              # 主页面
├── styles/
│   └── main.css            # 主样式文件
├── js/
│   └── main.js            # 主JavaScript文件
├── assets/
│   ├── images/            # 图片资源
│   │   ├── avatar.jpg     # 个人头像
│   │   ├── project*.jpg   # 项目截图
│   │   ├── blog*.jpg      # 博客配图
│   │   └── README.md      # 图片说明
│   └── resume/            # 简历文件
│       ├── resume.pdf     # PDF简历
│       └── README.md      # 简历说明
└── README.md              # 项目说明
```

## 🚀 快速开始

### 1. 下载项目
```bash
git clone <repository-url>
cd 个人博客
```

### 2. 准备资源文件
- 将个人头像命名为 `avatar.jpg` 放入 `assets/images/` 文件夹
- 将项目截图按照命名规范放入 `assets/images/` 文件夹
- 将PDF简历命名为 `resume.pdf` 放入 `assets/resume/` 文件夹

### 3. 自定义内容
编辑 `index.html` 文件，修改以下内容：
- 个人姓名和介绍
- 技能专长
- 项目信息
- 联系方式
- 博客文章

编辑 `js/main.js` 文件，更新：
- 项目数据 (`projectsData`)
- 博客数据 (`blogData`)

### 4. 运行项目
使用任意Web服务器打开 `index.html` 文件，例如：
```bash
# 使用Python
python -m http.server 8000

# 使用Node.js (http-server)
npx http-server

# 或直接在浏览器中打开 index.html
```

## 🎨 自定义主题

### 修改颜色主题
在 `styles/main.css` 文件中修改CSS变量：

```css
:root {
    --primary-color: #2563eb;      /* 主色调 */
    --primary-light: #3b82f6;      /* 浅主色 */
    --primary-dark: #1d4ed8;       /* 深主色 */
    --secondary-color: #1e40af;    /* 辅助色 */
    --accent-color: #06b6d4;       /* 强调色 */
}
```

### 修改字体
更改Google Fonts链接和CSS变量：
```css
--font-family: 'Inter', sans-serif;
```

## 📱 响应式设计

网站完全支持响应式设计，在以下设备上都有良好表现：
- 📱 移动设备 (320px+)
- 📱 平板设备 (768px+)
- 💻 桌面设备 (1024px+)
- 🖥️ 大屏设备 (1200px+)

## 🔧 功能说明

### 导航菜单
- 桌面端：水平导航栏
- 移动端：汉堡菜单
- 平滑滚动到对应部分

### 模态框功能
- 项目详情展示
- 博客文章阅读
- PDF简历查看
- 支持键盘ESC关闭

### 动画效果
- 页面加载淡入动画
- 技能条进度动画
- 悬停交互效果
- 平滑过渡动画

## 📈 SEO优化

- 语义化HTML标签
- 合适的meta标签
- 图片alt属性
- 结构化数据准备

## 🌐 部署建议

### GitHub Pages
1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为源

### Netlify
1. 将项目文件夹拖拽到Netlify部署页面
2. 或连接GitHub仓库自动部署

### Vercel
1. 导入GitHub仓库
2. 自动检测为静态网站并部署

## 📝 自定义指南

### 添加新项目
在 `js/main.js` 的 `projectsData` 对象中添加新项目：

```javascript
projectX: {
    title: '项目名称',
    description: '项目描述',
    technologies: ['技术1', '技术2'],
    features: ['功能1', '功能2'],
    // ... 其他属性
}
```

### 添加新博客文章
在 `js/main.js` 的 `blogData` 对象中添加新文章：

```javascript
blogX: {
    title: '文章标题',
    date: '2024-01-01',
    category: '分类',
    tags: ['标签1', '标签2'],
    content: '文章HTML内容'
}
```

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 📄 许可证

MIT License - 详见LICENSE文件

## 📞 联系方式

如有问题或建议，请通过以下方式联系：
- 邮箱: qiuqiuyina@gmail.com


---

⭐ 如果这个项目对你有帮助，请给个Star支持一下！
