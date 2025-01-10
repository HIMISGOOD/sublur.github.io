// 浏览器检测和商店跳转功能
function getBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    // 检测Edge浏览器
    if (userAgent.indexOf("edg") !== -1) {
        return "edge";
    }
    // 检测Chrome浏览器
    else if (userAgent.indexOf("chrome") !== -1) {
        return "chrome";
    }
    // 其他浏览器
    return "other";
}

function redirectToStore(event, forceBrowser) {
    event.preventDefault();
    
    // 使用强制指定的浏览器类型或自动检测
    const browser = forceBrowser || getBrowser();
    let storeUrl = '';
    
    switch(browser) {
        case "chrome":
            storeUrl = 'https://chrome.google.com/webstore/detail/ialajinbcabkjompgcbedlbbaknbfjki';
            break;
        case "edge":
            storeUrl = 'https://microsoftedge.microsoft.com/addons/detail/moflmmdclnleknmoalejnfpdiicoefjl';
            break;
        default:
            alert('请使用 Chrome 或 Edge 浏览器访问');
            return;
    }
    
    window.open(storeUrl, '_blank');
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检测浏览器并更新导航栏按钮文本
    const browser = getBrowser();
    const button = document.querySelector('.nav-links .cta-button');
    
    if (button) {
        button.textContent = "获取插件";
    }

    // 添加视频加载错误处理
    const video = document.querySelector('.demo-video video');
    if (video) {
        video.addEventListener('error', function() {
            console.error('视频加载失败');
            // 可以在这里添加视频加载失败的处理逻辑
        });
    }

    // 添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 添加页面性能监控
window.addEventListener('load', function() {
    // 记录页面加载时间
    const loadTime = performance.now();
    console.log(`页面加载时间: ${loadTime}ms`);

    // 检查关键资源是否加载成功
    const resources = performance.getEntriesByType('resource');
    resources.forEach(resource => {
        if (resource.duration > 1000) { // 加载时间超过1秒的资源
            console.warn(`资源加载较慢: ${resource.name}, 耗时: ${resource.duration}ms`);
        }
    });
});

// 添加错误监控
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('错误信息:', {
        message: msg,
        url: url,
        lineNumber: lineNo,
        columnNumber: columnNo,
        error: error
    });
    return false;
}; 