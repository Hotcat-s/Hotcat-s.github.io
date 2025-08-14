// 移动端导航菜单切换
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 点击导航链接时关闭移动端菜单
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// 平滑滚动到指定部分
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 项目数据
const projectsData = {
    project1: {
        title: '电商购物平台',
        description: '这是一个功能完整的电商购物平台，包含用户注册登录、商品展示、购物车、订单管理等功能。',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
        features: [
            '用户认证和授权系统',
            '商品分类和搜索功能',
            '购物车和收藏夹',
            '订单管理系统',
            '支付集成',
            '管理员后台',
            '响应式设计'
        ],
        images: ['assets/images/project1-1.jpg', 'assets/images/project1-2.jpg'],
        liveUrl: 'https://example-ecommerce.com',
        githubUrl: 'https://github.com/username/ecommerce-project',
        challenges: '主要挑战包括处理高并发订单、实现实时库存更新、优化数据库查询性能等。',
        learnings: '通过这个项目，我深入学习了全栈开发的各个环节，特别是在状态管理、API设计和数据库优化方面获得了宝贵经验。'
    },
    project2: {
        title: '任务管理系统',
        description: '一个面向团队协作的任务管理和进度跟踪系统，支持多项目管理、任务分配、进度监控等功能。',
        technologies: ['Vue.js', 'Express', 'MySQL', 'Socket.io', 'Redis'],
        features: [
            '多项目管理',
            '任务分配和跟踪',
            '实时协作',
            '甘特图展示',
            '团队沟通',
            '文件共享',
            '权限管理'
        ],
        images: ['assets/images/project2-1.jpg', 'assets/images/project2-2.jpg'],
        liveUrl: 'https://example-taskmanager.com',
        githubUrl: 'https://github.com/username/task-manager',
        challenges: '实现实时协作功能和复杂的权限管理系统是最大的技术挑战。',
        learnings: '学会了如何设计可扩展的系统架构，以及实时通信技术的应用。'
    },
    project3: {
        title: '数据可视化平台',
        description: '企业级数据分析和可视化展示平台，支持多种数据源接入和丰富的图表展示。',
        technologies: ['D3.js', 'Python', 'Flask', 'PostgreSQL', 'Pandas'],
        features: [
            '多数据源集成',
            '交互式图表',
            '实时数据更新',
            '自定义仪表板',
            '数据导出',
            '权限控制',
            '移动端适配'
        ],
        images: ['assets/images/project3-1.jpg', 'assets/images/project3-2.jpg'],
        liveUrl: 'https://example-dashboard.com',
        githubUrl: 'https://github.com/username/data-visualization',
        challenges: '处理大量数据的性能优化和复杂图表的交互设计。',
        learnings: '深入理解了数据处理和可视化技术，提升了前端性能优化能力。'
    },
    project4: {
        title: '移动端应用',
        description: '跨平台移动应用开发项目，提供原生应用体验的同时保持代码的可维护性。',
        technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
        features: [
            '跨平台兼容',
            '离线功能',
            '推送通知',
            '地理位置服务',
            '相机集成',
            '社交分享',
            '应用内购买'
        ],
        images: ['assets/images/project4-1.jpg', 'assets/images/project4-2.jpg'],
        liveUrl: 'https://example-app.com',
        githubUrl: 'https://github.com/username/mobile-app',
        challenges: '确保在不同平台上的一致性体验和性能优化。',
        learnings: '掌握了移动端开发的特殊考虑和跨平台开发的最佳实践。'
    }
};

// 博客数据
const blogData = {
    blog1: {
        title: 'React Hooks 最佳实践指南',
        date: '2024-01-15',
        category: '前端开发',
        tags: ['React', 'Hooks', 'JavaScript'],
        content: `
            <h3>什么是React Hooks？</h3>
            <p>React Hooks是React 16.8引入的新特性，它让你在不编写class组件的情况下使用state和其他React特性。</p>
            
            <h3>常用Hooks介绍</h3>
            
            <h4>1. useState</h4>
            <p>useState是最基本的Hook，用于在函数组件中添加state。</p>
            <pre><code>const [count, setCount] = useState(0);</code></pre>
            
            <h4>2. useEffect</h4>
            <p>useEffect用于处理副作用，如API调用、订阅等。</p>
            <pre><code>useEffect(() => {
    document.title = \`You clicked \${count} times\`;
}, [count]);</code></pre>
            
            <h3>最佳实践</h3>
            <ul>
                <li>只在最顶层调用Hooks</li>
                <li>只在React函数中调用Hooks</li>
                <li>使用ESLint插件确保规则遵循</li>
                <li>合理使用依赖数组</li>
                <li>自定义Hooks提取逻辑</li>
            </ul>
            
            <h3>常见陷阱</h3>
            <p>在使用Hooks时，需要注意以下几个常见问题：</p>
            <ul>
                <li>无限循环的useEffect</li>
                <li>闭包陷阱</li>
                <li>依赖数组的正确使用</li>
            </ul>
        `
    },
    blog2: {
        title: 'Node.js 性能优化技巧',
        date: '2024-01-10',
        category: '后端开发',
        tags: ['Node.js', '性能优化', '后端'],
        content: `
            <h3>Node.js性能优化概述</h3>
            <p>Node.js作为服务端JavaScript运行环境，其性能优化对应用的成功至关重要。</p>
            
            <h3>内存管理优化</h3>
            <h4>1. 避免内存泄漏</h4>
            <ul>
                <li>及时清理事件监听器</li>
                <li>避免全局变量累积</li>
                <li>正确处理闭包</li>
            </ul>
            
            <h4>2. 垃圾回收优化</h4>
            <pre><code>// 使用--max-old-space-size调整堆内存
node --max-old-space-size=4096 app.js</code></pre>
            
            <h3>异步处理优化</h3>
            <h4>1. 使用流(Streams)</h4>
            <p>对于大文件处理，使用流可以显著降低内存使用：</p>
            <pre><code>const fs = require('fs');
const readStream = fs.createReadStream('large-file.txt');
readStream.pipe(response);</code></pre>
            
            <h4>2. 连接池</h4>
            <p>数据库连接池可以重用连接，提高性能：</p>
            <pre><code>const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'user',
    database: 'test'
});</code></pre>
            
            <h3>缓存策略</h3>
            <ul>
                <li>Redis缓存热点数据</li>
                <li>HTTP缓存头设置</li>
                <li>应用层缓存</li>
            </ul>
        `
    },
    blog3: {
        title: 'Git 工作流程详解',
        date: '2024-01-05',
        category: '工具教程',
        tags: ['Git', '版本控制', '团队协作'],
        content: `
            <h3>Git工作流程概述</h3>
            <p>Git是现代软件开发中不可或缺的版本控制系统，掌握正确的工作流程对团队协作至关重要。</p>
            
            <h3>基础Git工作流</h3>
            <h4>1. 基本命令</h4>
            <pre><code># 克隆仓库
git clone &lt;repository-url&gt;

# 查看状态
git status

# 添加文件到暂存区
git add .

# 提交更改
git commit -m "提交信息"

# 推送到远程仓库
git push origin main</code></pre>
            
            <h3>分支管理策略</h3>
            <h4>Git Flow</h4>
            <ul>
                <li><strong>main/master</strong>: 主分支，包含生产就绪代码</li>
                <li><strong>develop</strong>: 开发分支，集成最新开发功能</li>
                <li><strong>feature/*</strong>: 功能分支，开发新功能</li>
                <li><strong>release/*</strong>: 发布分支，准备新版本发布</li>
                <li><strong>hotfix/*</strong>: 热修复分支，修复生产环境问题</li>
            </ul>
            
            <h4>GitHub Flow</h4>
            <p>更简单的工作流程，适合持续部署：</p>
            <ol>
                <li>从main分支创建功能分支</li>
                <li>开发并提交更改</li>
                <li>创建Pull Request</li>
                <li>代码审查</li>
                <li>合并到main分支</li>
                <li>部署</li>
            </ol>
            
            <h3>最佳实践</h3>
            <ul>
                <li>写清晰的提交信息</li>
                <li>保持提交的原子性</li>
                <li>定期拉取最新代码</li>
                <li>使用.gitignore忽略不必要文件</li>
                <li>进行代码审查</li>
            </ul>
        `
    },
    blog4: {
        title: 'MongoDB 查询优化实战',
        date: '2023-12-28',
        category: '数据库',
        tags: ['MongoDB', '数据库', '性能优化'],
        content: `
            <h3>MongoDB查询优化概述</h3>
            <p>MongoDB作为NoSQL数据库，正确的查询优化对应用性能至关重要。</p>
            
            <h3>索引优化</h3>
            <h4>1. 创建合适的索引</h4>
            <pre><code>// 创建单字段索引
db.users.createIndex({ "email": 1 })

// 创建复合索引
db.users.createIndex({ "age": 1, "name": 1 })

// 创建文本索引
db.articles.createIndex({ "title": "text", "content": "text" })</code></pre>
            
            <h4>2. 索引策略</h4>
            <ul>
                <li>为经常查询的字段创建索引</li>
                <li>复合索引的字段顺序很重要</li>
                <li>避免过多索引影响写入性能</li>
                <li>定期分析索引使用情况</li>
            </ul>
            
            <h3>查询优化技巧</h3>
            <h4>1. 使用explain()分析查询</h4>
            <pre><code>db.users.find({ age: { $gte: 18 } }).explain("executionStats")</code></pre>
            
            <h4>2. 限制返回字段</h4>
            <pre><code>// 只返回需要的字段
db.users.find({ age: { $gte: 18 } }, { name: 1, email: 1 })</code></pre>
            
            <h4>3. 使用聚合管道优化</h4>
            <pre><code>db.orders.aggregate([
    { $match: { status: "completed" } },
    { $group: { _id: "$customerId", total: { $sum: "$amount" } } },
    { $sort: { total: -1 } },
    { $limit: 10 }
])</code></pre>
            
            <h3>性能监控</h3>
            <ul>
                <li>使用MongoDB Profiler</li>
                <li>监控慢查询</li>
                <li>定期检查索引效率</li>
                <li>使用MongoDB Compass分析</li>
            </ul>
        `
    }
};

// 打开项目详情模态框
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const projectDetails = document.getElementById('projectDetails');
    
    projectDetails.innerHTML = `
        <h2>${project.title}</h2>
        <p class="project-description">${project.description}</p>
        
        <div class="project-details-section">
            <h3>技术栈</h3>
            <div class="tech-tags">
                ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div class="project-details-section">
            <h3>主要功能</h3>
            <ul class="feature-list">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        
        <div class="project-details-section">
            <h3>项目挑战</h3>
            <p>${project.challenges}</p>
        </div>
        
        <div class="project-details-section">
            <h3>收获与成长</h3>
            <p>${project.learnings}</p>
        </div>
        
        <div class="project-links">
            <a href="${project.liveUrl}" target="_blank" class="btn btn-primary">
                <i class="fas fa-external-link-alt"></i> 查看演示
            </a>
            <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary">
                <i class="fab fa-github"></i> 源代码
            </a>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 打开博客详情模态框
function openBlogModal(blogId) {
    const blog = blogData[blogId];
    if (!blog) return;
    
    const modal = document.getElementById('blogModal');
    const blogDetails = document.getElementById('blogDetails');
    
    blogDetails.innerHTML = `
        <article class="blog-detail">
            <header class="blog-header">
                <h1>${blog.title}</h1>
                <div class="blog-meta">
                    <span class="blog-date">${blog.date}</span>
                    <span class="blog-category">${blog.category}</span>
                </div>
                <div class="blog-tags">
                    ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </header>
            <div class="blog-content">
                ${blog.content}
            </div>
        </article>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}


// 关闭模态框
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 点击模态框外部关闭
window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// 键盘ESC关闭模态框
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// 技能条动画
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, observerOptions);

// 观察技能部分
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', () => {
    // 添加淡入动画
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('fade-in-up');
        }, index * 100);
    });
    
    // 预加载图片
    const images = [
        'assets/images/avatar.jpg',
        'assets/images/project1.jpg',
        'assets/images/project2.jpg',
        'assets/images/project3.jpg',
        'assets/images/project4.jpg',
        'assets/images/blog1.jpg',
        'assets/images/blog2.jpg',
        'assets/images/blog3.jpg',
        'assets/images/blog4.jpg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});
