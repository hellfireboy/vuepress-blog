module.exports = {
    base: '/vuepress-blog/',

    // 标题
    title: '懒星人的主页',

    // 描述
    description: '欢迎访问我的主页',

    // markdown显示行号
    markdown: {
        lineNumbers: true
    },

    // 自定义favicon
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],

    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'lxr17',

        // 自定义仓库链接文字。
        repoLabel: 'GitHub',

        // 最后更新时间
        lastUpdated: '更新时间',

        // 导航栏
        nav: [
            {text: '博客', link: '/blog/'},
            {text: 'ARTS总结', link: '/arts/'},
            {text: '碎碎念', link: '/thought/'},
            {text: '关于', link: '/about'}
        ],

        // 侧边栏
        sidebar: {
            '/blog/': require('../blog/sidebar'),
            '/arts/': require('../arts/sidebar'),
            '/thought/': require('../thought/sidebar')
        }
    }
}