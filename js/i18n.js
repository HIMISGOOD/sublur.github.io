const translations = {
    'zh': {
        'nav_install': '立即安装',
        'hero_tagline': '真正的沉浸，是听懂，而非看懂',
        'hero_title': '还在纠结要不要关掉字幕？<br class="hidden md:block">现在有更好的选择！',
        'hero_desc': '如果说中文配音是"熟肉"，双语是"七分熟"，单语是"五分熟"，<br>那么「三分熟字幕」为您提供了一种"三分熟"的全新体验——保留足够的挑战让听力持续提升，又在关键时刻给予恰到好处的支持。',
        'install_chrome': '在 Chrome 中安装',
        'install_edge': '在 Edge 中安装',
        'hero_supported': '支持 YouTube · Bilibili (Beta) · Chrome / Edge',
        'section_demo': '<span class="theme-color">🎬</span> 产品演示',
        'section_features': '<span class="theme-color">🎯</span> 独特优势',
        'feature_1_title': '智能模糊',
        'feature_1_desc': '通过模糊处理让你在需要时才能看清，把注意力还给听力。',
        'feature_2_title': 'AI语境翻译',
        'feature_2_desc': '点击单词精准翻译，轻松解析俚语、专业术语等特殊用法。',
        'feature_3_title': '双语字幕',
        'feature_3_desc': '可选择仅模糊译文，在你需要时才看得清，鱼和熊掌兼得。',
        'feature_4_title': '个性化学习',
        'feature_4_desc': '自动高亮你标记的生词，打造专属于你的学习曲线。',
        'feature_5_title': 'CEFR 词汇分级',
        'feature_5_desc': '自动标注超出当前水平的词汇（B2–C2 级），聚焦真正值得学的词。',
        'feature_6_title': '保持沉浸',
        'feature_6_desc': '不再频繁暂停查词，让你从始至终专注于视频内容。',
        'feature_7_title': '字幕遮罩',
        'feature_7_desc': '视频内嵌了字幕不想看？用毛玻璃效果优雅地遮住它。',
        'feature_8_title': '双字幕模式',
        'feature_8_desc': '显示上一条字幕，即使错过也无需回首寻找那个单词。',
        'feature_9_title': '自主掌控',
        'feature_9_desc': '手动标记或取消标记单词，完全由你决定何时需要提示。',
        'section_why': '<span class="theme-color">💡</span> 为什么选择三分熟字幕？',
        'why_traditional': '传统方式的困境',
        'why_sub_on': '<strong class="text-gray-800">开字幕</strong><br>不知不觉变成了阅读练习，忽略了听力本身。',
        'why_sub_off': '<strong class="text-gray-800">关字幕</strong><br>遇到生词反复暂停查阅，严重打断观看体验。',
        'why_breakthrough': '模糊字幕的突破',
        'why_focus': '<strong class="text-white">专注听力</strong><br>模糊显示避免依赖阅读，强制用耳朵捕捉信息。',
        'why_active': '<strong class="text-white">主动学习</strong><br>灵活标记难词，掌握后取消，逐步摆脱字幕依赖。',
        'section_scenarios': '<span class="theme-color">✨</span> 使用场景',
        'scenario_1_title': '追最新剧集',
        'scenario_1_desc': '自然地理解对白，只在不熟悉的俚语或关键词处获得即时提示，学习娱乐两不误。',
        'scenario_2_title': '看油管 / B站视频',
        'scenario_2_desc': '无论是知识科普还是生活Vlog，难词自动显现，其他内容放心交给你的耳朵来理解。',
        'scenario_3_title': '重温经典影片',
        'scenario_3_desc': '曾经标记的单词清晰可见，其他已掌握的内容则重点锻炼听力，检验学习成果。',
        'section_updates': '<span class="theme-color">｜</span> 更新日志 <span class="theme-color">｜</span>',
        'update_latest': '最新',
        'update_more': '查看更早的更新...',
        'update_1_6_7_1': '新增 CEFR 等级自动标记功能',
        'update_1_6_7_2': '修复多个已知问题 :）',
        'update_1_6_6_1_fix': '修复了多个已知问题 :)',
        'update_1_6_6_i18n': '新增了多语言的支持',
        'update_1_6_6_fix': '修复了已知的问题',
        'update_1_6_5_ui': '重新设计了整体的 UI 风格！',
        'update_1_6_5_export': '新增字幕导出功能',
        'update_1_6_5_audio': '新增单词读音',
        'update_1_6_5_fix': '修复了多个已知的问题！:D',
        'update_1_6_3': '新增单词表导入功能',
        'update_1_6_1': '新增新用户指引',
        'update_1_6_0_1': '新增毛玻璃遮罩功能，如果视频内嵌了字幕，而你又不想看到它，遮住它！',
        'update_1_6_0_2': '新增双语字幕功能，非常抱歉到现在才有这个功能',
        'update_1_6_0_3': '新增多模式模糊状态，现在你可以选择是否模糊，在双语模式下，你还可以选择仅模糊中译文',
        'update_1_6_0_4': '新增悬浮暂停模式，鼠标移到字幕上就可以自动暂停',
        'update_1_6_0_5': '优化了翻译弹窗的 UI，也改成毛玻璃了 :）这次的牙膏真的挤爆了 orz',
        'update_1_5_3_2': '修复时间轴错位问题 :）',
        'update_1_5_3_1': '修复了因 YouTube 更新导致的无法显示字幕的问题',
        'update_1_5_3': '优化了单词表的 UI 设计，加了单词删除的功能 :D',
        'update_1_5_2': '新增字幕列表的双语模式，优化了列表的 UI 设计',
        'update_1_5_1': '新增黑夜模式，以及优化了 AI 语境翻译功能',
        'update_1_5_0_1': '新增 AI 语境翻译模式，根据语境提供单词在文中的含义，再也不会因为翻译不准看不懂句子啦 :D',
        'update_1_5_0_2': '整体优化了翻译弹窗的 UI 设计，优雅～',
        'update_1_4_7_1': '双字幕模式可以关闭了！我把选项放在了字幕设置菜单里 :D',
        'update_1_4_7': '新增了显示上一条字幕的副字幕，再也不用倒回去找那个你不懂的单词了！',
        'update_1_4_6': '新增字幕大小调节功能',
        'update_1_4_5_1': '修复了非英语系统自动生成字幕的时间轴问题',
        'update_1_4_5': '修复了进入新视频不自动刷新字幕的问题',
        'update_1_4_4': '优化了字幕文本切割的准确性以及部分操作逻辑，更换了字幕字体',
        'update_1_4_3': '优化了字幕文本切割的准确性以及部分操作逻辑',
        'section_start': '<span class="theme-color">🚀</span> 立即开始',
        'start_desc': '立即安装「三分熟字幕」，让每一次观看视频都成为提升语言能力的绝佳机会！',
        'start_btn': '体验更智能高效的学习方式',
        'start_note_1': '支持 YouTube · Bilibili (Beta)',
        'start_note_2': '｜激活程序需在视频界面手动刷新一下页面｜',
        'section_contact': '<span class="theme-color">✉️</span> 联系我们',
        'contact_email_title': '邮件',
        'contact_wechat_title': '微信',
        'contact_x_title': 'X / Twitter',
        'footer_copy': '&copy; 2025 三分熟字幕. All Rights Reserved.',
        'footer_tagline': '真正的沉浸，是听懂，而非看懂',
        'meta_title': '三分熟字幕 - 沉浸式英语输入｜托福｜雅思｜四六级',
        'meta_desc': '在YouTube和Bilibili中提供被模糊的字幕，AI语境翻译，CEFR词汇分级，基于可理解输入理论，为你提供三分熟的视频体验。'
    },
    'en': {
        'nav_install': 'Install Now',
        'hero_tagline': 'True immersion is hearing, not just reading',
        'hero_title': 'Still struggling with whether to turn off subtitles?<br class="hidden md:block"> Now there\'s a better choice!',
        'hero_desc': 'If native subtitles are "well-done", bilingual are "medium-well", and monolingual are "medium",<br>then "Medium Rare Subtitle" offers a "medium-rare" experience—maintaining enough challenge to improve listening while providing timely support.',
        'install_chrome': 'Install for Chrome',
        'install_edge': 'Install for Edge',
        'hero_supported': 'YouTube · Bilibili (Beta) · Chrome / Edge',
        'section_demo': '<span class="theme-color">🎬</span> Product Demo',
        'section_features': '<span class="theme-color">🎯</span> Unique Features',
        'feature_1_title': 'Smart Blur',
        'feature_1_desc': 'Blur subtitles so you only see them when needed, returning your focus to listening.',
        'feature_2_title': 'AI Contextual Translation',
        'feature_2_desc': 'Click words for precise translation based on context, parsing slang and jargon easily.',
        'feature_3_title': 'Bilingual Subtitles',
        'feature_3_desc': 'Choose to blur only the translation. See it only when needed—the best of both worlds.',
        'feature_4_title': 'Personalized Learning',
        'feature_4_desc': 'Auto-highlight your marked words to build your own learning curve.',
        'feature_5_title': 'CEFR Vocabulary Grading',
        'feature_5_desc': 'Automatically highlights vocabulary above your level (B2–C2), so you focus on words worth learning.',
        'feature_6_title': 'Stay Immersed',
        'feature_6_desc': 'No more frequent pauses to look up words; stay focused on the video from start to finish.',
        'feature_7_title': 'Subtitle Mask',
        'feature_7_desc': 'Don\'t want to see hardcoded subtitles? Cover them elegantly with a glass effect.',
        'feature_8_title': 'Dual Subtitle Mode',
        'feature_8_desc': 'Displays the previous subtitle, so no need to rewind if you miss a word.',
        'feature_9_title': 'Full Control',
        'feature_9_desc': 'Manually mark or unmark words. You decide when you need a hint.',
        'section_why': '<span class="theme-color">💡</span> Why Medium Rare Subtitle?',
        'why_traditional': 'The Dilemma of Traditional Methods',
        'why_sub_on': '<strong class="text-gray-800">Subtitles On</strong><br>Unknowingly becomes a reading exercise, ignoring the listening itself.',
        'why_sub_off': '<strong class="text-gray-800">Subtitles Off</strong><br>Repeatedly pausing to check new words severely disrupts the viewing experience.',
        'why_breakthrough': 'The Breakthrough of Blurred Subtitles',
        'why_focus': '<strong class="text-white">Focus on Listening</strong><br>Blurred display avoids reliance on reading, forcing you to catch information with your ears.',
        'why_active': '<strong class="text-white">Active Learning</strong><br>Flexibly mark hard words and unmark them when mastered, gradually breaking subtitle reliance.',
        'section_scenarios': '<span class="theme-color">✨</span> Use Cases',
        'scenario_1_title': 'Binge Latest Shows',
        'scenario_1_desc': 'Naturally understand dialogue, getting instant hints only for unfamiliar slang or keywords. Learn while entertaining.',
        'scenario_2_title': 'Watch YouTube / Bilibili',
        'scenario_2_desc': 'For both educational content and daily Vlogs, hard words auto-appear while your ears understand the rest.',
        'scenario_3_title': 'Rewatch Classics',
        'scenario_3_desc': 'Previously marked words remain clear, while mastered content focuses on listening practice, testing your learning.',
        'section_updates': '<span class="theme-color">｜</span> Changelog <span class="theme-color">｜</span>',
        'update_latest': 'Latest',
        'update_more': 'View older updates...',
        'update_1_6_7_1': 'Added CEFR automatic vocabulary level marking',
        'update_1_6_7_2': 'Fixed multiple known issues :)',
        'update_1_6_6_1_fix': 'Fixed multiple known issues :)',
        'update_1_6_6_i18n': 'Added multilingual UI support',
        'update_1_6_6_fix': 'Fixed known issues',
        'update_1_6_5_ui': 'Completely redesigned the UI!',
        'update_1_6_5_export': 'Added subtitle export',
        'update_1_6_5_audio': 'Added word pronunciation',
        'update_1_6_5_fix': 'Fixed multiple known issues! :D',
        'update_1_6_3': 'Added vocabulary list import',
        'update_1_6_1': 'Added new user guide',
        'update_1_6_0_1': 'Added glass mask — if a video has hardcoded subtitles you don\'t want to see, cover them!',
        'update_1_6_0_2': 'Added bilingual subtitles — sorry it took this long!',
        'update_1_6_0_3': 'Added multi-mode blur states: choose whether to blur, or in bilingual mode, blur only the translation',
        'update_1_6_0_4': 'Added hover-to-pause: mouse over subtitles to auto-pause',
        'update_1_6_0_5': 'Redesigned the translation popup with glass effect :) This update was a big one orz',
        'update_1_5_3_2': 'Fixed timeline misalignment :)',
        'update_1_5_3_1': 'Fixed subtitles not showing after a YouTube update',
        'update_1_5_3': 'Redesigned vocabulary list UI, added word deletion :D',
        'update_1_5_2': 'Added bilingual mode to subtitle list, improved list UI',
        'update_1_5_1': 'Added dark mode and improved AI contextual translation',
        'update_1_5_0_1': 'Added AI contextual translation — get the meaning of a word in context, no more confusing literal translations :D',
        'update_1_5_0_2': 'Redesigned the translation popup, much more elegant~',
        'update_1_4_7_1': 'Dual subtitle mode can now be toggled off — option is in the subtitle settings menu :D',
        'update_1_4_7': 'Added previous-subtitle display — no more rewinding to find that word you missed!',
        'update_1_4_6': 'Added subtitle size adjustment',
        'update_1_4_5_1': 'Fixed subtitle timeline for non-English system auto-generated captions',
        'update_1_4_5': 'Fixed subtitles not refreshing when navigating to a new video',
        'update_1_4_4': 'Improved subtitle text segmentation accuracy, updated subtitle font',
        'update_1_4_3': 'Improved subtitle text segmentation accuracy and some interaction logic',
        'section_start': '<span class="theme-color">🚀</span> Get Started',
        'start_desc': 'Install Medium Rare Subtitle now and turn every video into an excellent opportunity to improve your language skills!',
        'start_btn': 'Experience a smarter, more efficient way to learn',
        'start_note_1': 'YouTube · Bilibili (Beta)',
        'start_note_2': '｜To activate, please manually refresh the video page｜',
        'section_contact': '<span class="theme-color">✉️</span> Contact',
        'contact_email_title': 'Email',
        'contact_wechat_title': 'WeChat',
        'contact_x_title': 'X / Twitter',
        'footer_copy': '&copy; 2025 Medium Rare Subtitle. All Rights Reserved.',
        'footer_tagline': 'True immersion is hearing, not just reading',
        'meta_title': 'Medium Rare Subtitle - Immersive Language Learning | YouTube | Bilibili',
        'meta_desc': 'Blur subtitles on YouTube and Bilibili, click words for AI contextual translation, and auto-highlight vocabulary above your CEFR level. Learn languages the natural way.'
    }
};

function changeLanguage(lang) {
    localStorage.setItem('sublur_lang', lang);
    document.documentElement.lang = lang;

    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update title and meta tags if they exist in translations
    if (translations[lang]['meta_title']) {
        document.title = translations[lang]['meta_title'];
    }
    if (translations[lang]['meta_desc']) {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', translations[lang]['meta_desc']);
        }
    }

    // Update language switcher active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('font-bold', 'theme-color');
            btn.classList.remove('text-gray-600');
        } else {
            btn.classList.remove('font-bold', 'theme-color');
            btn.classList.add('text-gray-600');
        }
    });
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
    let savedLang = localStorage.getItem('sublur_lang');
    if (!savedLang) {
        const browserLang = navigator.language || navigator.userLanguage;
        savedLang = browserLang.startsWith('zh') ? 'zh' : 'en';
    }
    changeLanguage(savedLang);
});
