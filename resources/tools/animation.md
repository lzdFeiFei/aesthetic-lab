# 动效库与工具

> 让设计动起来的工具箱

## JavaScript 动画库

### 综合动画引擎

- [GSAP](https://gsap.com/) - 专业级动画库，性能强大
  - 适合：复杂时间轴动画、SVG 动画
  - 学习曲线：中等

- [Anime.js](https://animejs.com) - 轻量级动画库
  - 适合：简单到中等复杂度的动画
  - 学习曲线：较低

### React 生态

- [React Spring](https://react-spring.dev/) - 基于物理的动画
  - 特点：自然的弹性动画

- [Framer Motion](https://motion.dev/) - React 动画库
  - 特点：声明式 API，易用

- [React Bits](https://www.reactbits.dev/) - React 组件和动效集合

### 特殊效果

- [Lottie](https://lottie.airbnb.tech/#/) - After Effects 动画播放
  - 适合：设计师导出的复杂动画

- [Lenis](https://lenis.darkroom.engineering) - 平滑滚动库
  - 适合：提升页面滚动体验

## 选择建议

| 场景 | 推荐工具 | 理由 |
|------|---------|------|
| 简单淡入淡出 | CSS Transitions | 性能最好 |
| 复杂时间轴 | GSAP | 功能最强 |
| React 项目 | Framer Motion | 生态集成好 |
| 设计师协作 | Lottie | 设计还原度高 |

## 学习路径

1. **基础**：先掌握 CSS 动画和 Transitions
2. **进阶**：学习一个 JS 动画库（推荐 GSAP 或 Framer Motion）
3. **实践**：临摹 Awwwards 上的动效案例
4. **原理**：理解缓动函数（easing）和时间轴概念

## 性能注意事项

- 优先使用 `transform` 和 `opacity`
- 避免动画 `width`、`height`、`top`、`left`
- 使用 `will-change` 提示浏览器优化
- 移动端注意性能开销

---

💡 **实验区**：在 `showcase/` 目录下分享你的动效实验代码。
