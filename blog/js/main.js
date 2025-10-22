// 移动端导航菜单切换
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 点击导航链接时关闭移动端菜单
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

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
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// 动画效果
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', () => {
    // 为所有博客项添加渐入动画
    const blogItems = document.querySelectorAll('.blog-item');
    blogItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        setTimeout(() => {
            fadeInObserver.observe(item);
        }, index * 50);
    });

    // 文章内容链接在新标签页打开
    const articleContent = document.querySelector('.article-content');
    if (articleContent) {
        const links = articleContent.querySelectorAll('a[href^="http"]');
        links.forEach(link => {
            if (!link.hostname.includes(window.location.hostname)) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    // 代码块复制功能
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(codeBlock => {
        const pre = codeBlock.parentElement;
        const button = document.createElement('button');
        button.className = 'copy-code-btn';
        button.textContent = '复制';
        button.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            padding: 4px 12px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.85rem;
            opacity: 0;
            transition: opacity 0.3s;
        `;
        
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        pre.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
        });
        
        pre.addEventListener('mouseleave', () => {
            button.style.opacity = '0';
        });
        
        button.addEventListener('click', () => {
            const code = codeBlock.textContent;
            navigator.clipboard.writeText(code).then(() => {
                button.textContent = '已复制!';
                setTimeout(() => {
                    button.textContent = '复制';
                }, 2000);
            });
        });
    });

    // 图片懒加载
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));

    // 回到顶部按钮
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        box-shadow: var(--shadow-lg);
        z-index: 999;
        font-size: 1.2rem;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    backToTopBtn.addEventListener('mouseenter', () => {
        backToTopBtn.style.transform = 'translateY(-5px)';
    });
    
    backToTopBtn.addEventListener('mouseleave', () => {
        backToTopBtn.style.transform = 'translateY(0)';
    });
});

// 博客/项目搜索功能
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('blog-search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    const searchResultsCount = document.getElementById('search-results-count');
    
    // 同时支持博客文章和项目
    const blogItems = document.querySelectorAll('.blog-item');
    const projectItems = document.querySelectorAll('.project-item');
    const allItems = [...blogItems, ...projectItems];
    
    if (!searchInput || allItems.length === 0) return;
    
    // 判断是博客还是项目页面
    const isProjectPage = projectItems.length > 0;
    const itemType = isProjectPage ? '项目' : '文章';
    
    // 搜索函数
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let visibleCount = 0;
        
        if (searchTerm === '') {
            // 如果搜索框为空，显示所有内容
            allItems.forEach(item => {
                item.style.display = '';
            });
            searchResultsCount.style.display = 'none';
            clearSearchBtn.style.display = 'none';
            return;
        }
        
        // 遍历所有项
        allItems.forEach(item => {
            let title = '';
            let content = '';
            
            if (item.classList.contains('blog-item')) {
                // 博客文章
                title = item.querySelector('h2 a')?.textContent.toLowerCase() || '';
                content = item.querySelector('.blog-excerpt')?.textContent.toLowerCase() || '';
            } else if (item.classList.contains('project-item')) {
                // 项目
                title = item.querySelector('h2')?.textContent.toLowerCase() || '';
                content = item.querySelector('.project-description')?.textContent.toLowerCase() || '';
            }
            
            const searchContent = title + ' ' + content;
            
            if (searchContent.includes(searchTerm)) {
                item.style.display = '';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });
        
        // 显示搜索结果数量
        if (visibleCount > 0) {
            searchResultsCount.textContent = `找到 ${visibleCount} 篇相关${itemType}`;
            searchResultsCount.style.color = '#2563eb';
        } else {
            searchResultsCount.textContent = `未找到相关${itemType}`;
            searchResultsCount.style.color = '#ef4444';
        }
        searchResultsCount.style.display = 'block';
        clearSearchBtn.style.display = 'block';
    }
    
    // 输入事件监听（实时搜索）
    searchInput.addEventListener('input', performSearch);
    
    // 清除搜索
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            performSearch();
            searchInput.focus();
        });
    }
    
    // 按 Escape 键清除搜索
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            performSearch();
        }
    });
});

// 文章目录（TOC）功能 - 支持层级折叠
document.addEventListener('DOMContentLoaded', () => {
    const articleContent = document.querySelector('.article-content');
    const tocContent = document.getElementById('toc-content');
    const tocContainer = document.getElementById('article-toc');
    
    if (!articleContent || !tocContent || !tocContainer) return;
    
    // 获取文章中的所有标题（h2, h3, h4）
    const headings = articleContent.querySelectorAll('h2, h3, h4');
    
    if (headings.length === 0) {
        // 如果没有标题，隐藏目录
        tocContainer.style.display = 'none';
        return;
    }
    
    // 为每个标题添加 ID
    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }
    });
    
    // 构建层级结构
    function buildTocTree() {
        const tree = [];
        const stack = [{ level: 1, children: tree }];
        
        headings.forEach((heading) => {
            const level = parseInt(heading.tagName.substring(1));
            const item = {
                level: level,
                text: heading.textContent,
                id: heading.id,
                element: heading,
                children: []
            };
            
            // 找到合适的父节点
            while (stack.length > 1 && stack[stack.length - 1].level >= level) {
                stack.pop();
            }
            
            stack[stack.length - 1].children.push(item);
            stack.push(item);
        });
        
        return tree;
    }
    
    // 生成目录 HTML
    function generateTocHTML(items, level = 0) {
        let html = '';
        
        items.forEach((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const toggleIcon = hasChildren ? '<i class="fas fa-chevron-right toc-toggle"></i>' : '<i class="toc-toggle"></i>';
            
            html += `
                <div class="toc-item" data-id="${item.id}">
                    <a href="#${item.id}" class="toc-link ${!hasChildren ? 'no-children' : ''}" data-level="${item.level}">
                        ${toggleIcon}
                        <span>${item.text}</span>
                    </a>
            `;
            
            if (hasChildren) {
                html += `<div class="toc-children">`;
                html += generateTocHTML(item.children, level + 1);
                html += `</div>`;
            }
            
            html += `</div>`;
        });
        
        return html;
    }
    
    const tocTree = buildTocTree();
    tocContent.innerHTML = generateTocHTML(tocTree);
    
    // 获取所有目录链接和切换按钮
    const tocItems = tocContent.querySelectorAll('.toc-item');
    const tocLinks = tocContent.querySelectorAll('.toc-link');
    
    // 处理展开/折叠
    tocLinks.forEach(link => {
        const toggle = link.querySelector('.toc-toggle');
        const parentItem = link.closest('.toc-item');
        const childrenContainer = parentItem.querySelector('.toc-children');
        
        if (childrenContainer) {
            // 点击箭头或链接文本都可以展开/折叠
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // 如果点击的是箭头或者是有子项的链接，切换展开状态
                if (e.target.closest('.toc-toggle') || childrenContainer) {
                    toggle.classList.toggle('expanded');
                    childrenContainer.classList.toggle('expanded');
                }
                
                // 同时也进行跳转
                const targetId = link.getAttribute('href').substring(1);
                const targetHeading = document.getElementById(targetId);
                
                if (targetHeading) {
                    const navHeight = document.querySelector('.navbar')?.offsetHeight || 70;
                    const targetPosition = targetHeading.offsetTop - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        } else {
            // 没有子项的链接，直接跳转
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetHeading = document.getElementById(targetId);
                
                if (targetHeading) {
                    const navHeight = document.querySelector('.navbar')?.offsetHeight || 70;
                    const targetPosition = targetHeading.offsetTop - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
    
    // 滚动时高亮当前目录项并自动展开/收起
    function highlightTocOnScroll() {
        const navHeight = document.querySelector('.navbar')?.offsetHeight || 70;
        const scrollPos = window.scrollY + navHeight + 100;
        
        let currentHeading = null;
        
        // 找到当前可见的标题
        headings.forEach(heading => {
            if (heading.offsetTop <= scrollPos) {
                currentHeading = heading;
            }
        });
        
        // 首先收起所有非必要的子目录
        const allChildrenContainers = tocContent.querySelectorAll('.toc-children');
        const allToggles = tocContent.querySelectorAll('.toc-toggle');
        
        allChildrenContainers.forEach(container => {
            container.classList.remove('expanded');
        });
        allToggles.forEach(toggle => {
            toggle.classList.remove('expanded');
        });
        
        // 更新目录高亮
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (currentHeading && link.getAttribute('href') === `#${currentHeading.id}`) {
                link.classList.add('active');
                
                // 收集当前项的所有父级
                const parentsToExpand = [];
                let parentItem = link.closest('.toc-item').parentElement.closest('.toc-item');
                while (parentItem) {
                    parentsToExpand.push(parentItem);
                    parentItem = parentItem.parentElement.closest('.toc-item');
                }
                
                // 只展开当前项的父级目录
                parentsToExpand.forEach(parent => {
                    const parentLink = parent.querySelector(':scope > .toc-link');
                    const parentToggle = parentLink?.querySelector('.toc-toggle');
                    const parentChildren = parent.querySelector(':scope > .toc-children');
                    
                    if (parentToggle && parentChildren) {
                        parentToggle.classList.add('expanded');
                        parentChildren.classList.add('expanded');
                    }
                });
                
                // 如果当前项本身有子项，也展开它
                const currentItem = link.closest('.toc-item');
                const currentToggle = link.querySelector('.toc-toggle');
                const currentChildren = currentItem.querySelector(':scope > .toc-children');
                
                if (currentToggle && currentChildren && currentChildren.children.length > 0) {
                    currentToggle.classList.add('expanded');
                    currentChildren.classList.add('expanded');
                }
                
                // 滚动目录到当前项
                const tocContentEl = link.closest('.toc-content');
                if (tocContentEl) {
                    const linkTop = link.offsetTop;
                    const linkHeight = link.offsetHeight;
                    const tocHeight = tocContentEl.clientHeight;
                    const tocScroll = tocContentEl.scrollTop;
                    
                    if (linkTop < tocScroll || linkTop + linkHeight > tocScroll + tocHeight) {
                        link.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                    }
                }
            }
        });
    }
    
    // 监听滚动事件
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                highlightTocOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // 初始化时高亮一次
    highlightTocOnScroll();
});

