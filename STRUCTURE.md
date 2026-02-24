# 项目结构说明

```
aesthetic-lab/
│
├── README.md                    # 项目介绍和总览
├── GETTING_STARTED.md           # 快速开始指南（新手必读）
├── CONTRIBUTING.md              # 贡献指南（如何参与）
├── STRUCTURE.md                 # 项目结构说明（本文件）
├── .gitignore                   # Git 忽略配置
│
├── books/                       # 书籍资料库 ⭐ 新增
│   ├── README.md                # 书籍索引和推荐
│   ├── art/                     # 艺术类书籍（5本）
│   ├── architecture/            # 建筑类书籍（1本）
│   ├── philosophy/              # 哲学类书籍（2本）
│   └── history/                 # 历史类书籍（4本）
│
├── resources/                   # 在线资源分类目录
│   ├── inspiration/             # 灵感来源
│   │   ├── aesthetic-resources.md # 审美资源（Pinterest 类）
│   │   ├── saas-landing.md      # SaaS 落地页
│   │   ├── design-awards.md     # 设计奖项网站
│   │   └── experiments.md       # 创意实验
│   │
│   ├── learning/                # 学习资源
│   │   └── articles.md          # 设计文章网站
│   │
│   ├── tools/                   # 工具库
│   │   └── animation.md         # 动效库
│   │
│   └── collections/             # 精选集合
│       └── color-art.md         # 色彩与艺术
│
├── notes/                       # 学习笔记目录
│   ├── README.md                # 笔记说明和模板
│   └── [your-name]/             # 个人笔记文件夹
│       └── *.md                 # 学习笔记
│
└── showcase/                    # 作品展示目录
    ├── README.md                # 展示说明和模板
    ├── experiments/             # 实验性项目
    ├── exercises/               # 练习作品
    └── [your-name]/             # 个人作品集
        └── [project-name]/      # 具体项目
            ├── README.md        # 项目说明
            └── ...              # 项目文件
```

## 目录说明

### 📖 books/
存放书籍和学习资料（PDF、PPTX等）：
- **art/**: 艺术史、美学、摄影等
- **architecture/**: 建筑、民居等
- **philosophy/**: 哲学思想类
- **history/**: 科技史、思想史等

⚠️ **注意**: 书籍文件已在 `.gitignore` 中排除，不会上传到 GitHub

### 🌐 resources/
存放精心整理的外部资源链接，按类型分类：
- **inspiration/**: 设计灵感来源
- **learning/**: 学习资料和文章
- **tools/**: 实用工具和库
- **collections/**: 主题精选集合

### 📝 notes/
个人学习笔记，记录学习过程：
- 每个人创建自己的文件夹
- 使用 Markdown 格式
- 包含个人思考和理解

### 🎨 showcase/
作品展示和实践项目：
- 设计练习
- 代码实验
- 临摹作品
- 原创项目

## 文件命名规范

### 笔记文件
```
notes/your-name/YYYY-MM-topic-name.md
例如：notes/alice/2024-01-color-theory.md
```

### 项目文件夹
```
showcase/your-name/project-name/
例如：showcase/bob/landing-page-practice/
```

## 内容组织原则

1. **资源文件**：按主题分类，每个文件聚焦一个主题
2. **笔记文件**：按个人组织，鼓励个性化结构
3. **作品文件**：按项目组织，每个项目独立文件夹

## 如何添加新内容

### 添加资源链接
1. 找到对应的分类文件（如 `resources/tools/animation.md`）
2. 按照现有格式添加链接和描述
3. 提交 Pull Request

### 添加学习笔记
1. 在 `notes/` 下创建你的文件夹（如果还没有）
2. 创建笔记文件，参考 `notes/README.md` 的模板
3. 提交 Pull Request

### 添加作品展示
1. 在 `showcase/` 下创建你的文件夹（如果还没有）
2. 为每个项目创建独立文件夹
3. 包含 README.md 说明项目
4. 提交 Pull Request

## 维护原则

- **保持简洁**：避免过度分类
- **易于导航**：清晰的目录结构
- **鼓励贡献**：低门槛，易参与
- **持续演进**：根据需要调整结构

---

有问题或建议？欢迎在 Issues 中讨论！
