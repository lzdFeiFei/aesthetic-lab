import { defineConfig } from 'vitepress';

const repository = process.env.GITHUB_REPOSITORY ?? '';
const repoName = repository.split('/')[1] ?? '';
const repoUrl = repository ? `https://github.com/${repository}` : undefined;

export default defineConfig({
  title: 'Aesthetic Lab',
  description: '从零开始培养艺术细菌',
  lang: 'zh-CN',
  cleanUrls: false,
  lastUpdated: true,
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/',
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/GETTING_STARTED.html' },
      { text: '资源总览', link: '/resources/index.html' },
      { text: '最新更新', link: '/latest.html' },
      { text: '标签', link: '/tags.html' },
      { text: '贡献指南', link: '/CONTRIBUTING.html' }
    ],
    sidebar: [
      {
        text: '项目',
        items: [
          { text: '博客首页', link: '/' },
          { text: '项目总览', link: '/README.html' },
          { text: '快速开始', link: '/GETTING_STARTED.html' },
          { text: '最新更新', link: '/latest.html' },
          { text: '标签导航', link: '/tags.html' },
          { text: '贡献指南', link: '/CONTRIBUTING.html' },
          { text: '结构说明', link: '/STRUCTURE.html' }
        ]
      },
      {
        text: '书籍与内容',
        items: [
          { text: '书籍索引', link: '/books/README.html' },
          { text: '学习笔记说明', link: '/notes/README.html' },
          { text: '作品展示说明', link: '/showcase/README.html' }
        ]
      },
      {
        text: '资源库',
        items: [
          { text: '资源总览', link: '/resources/index.html' },
          { text: '审美资源', link: '/resources/inspiration/aesthetic-resources.html' },
          { text: 'SaaS 落地页', link: '/resources/inspiration/saas-landing.html' },
          { text: '设计奖项平台', link: '/resources/inspiration/design-awards.html' },
          { text: '创意实验', link: '/resources/inspiration/experiments.html' },
          { text: '设计文章', link: '/resources/learning/articles.html' },
          { text: '动效库', link: '/resources/tools/animation.html' },
          { text: '色彩与艺术', link: '/resources/collections/color-art.html' }
        ]
      }
    ],
    socialLinks: repoUrl ? [{ icon: 'github', link: repoUrl }] : []
  }
});
