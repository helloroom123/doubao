# 歌姬宣传站（Flask 本地预览 + GitHub 部署）

该项目是一个受 `https://kasaneteto.jp/` 页面结构启发的宣传站首版，保留了：

- 大视觉 KV（人物图 + 文案）
- `News on X` 和 `Check!` 入口模块
- 音源/产品入口与规约区块
- 深色霓虹风格的单页布局

## 本地预览（Flask）

1. 安装依赖

```bash
pip install -r requirements.txt
```

2. 启动服务

```bash
python app.py
```

3. 浏览器打开

`http://127.0.0.1:5000`

## GitHub Pages 自动部署

仓库已包含工作流：`.github/workflows/pages.yml`  
推送到 `main` 后会自动触发部署。

首次使用请在 GitHub 仓库设置中开启：

`Settings -> Pages -> Build and deployment -> Source: GitHub Actions`

## 文件结构

- `index.html`：页面结构
- `assets/css/style.css`：样式
- `assets/js/main.js`：页面交互
- `app.py`：Flask 本地预览入口
- `.github/workflows/pages.yml`：GitHub Pages 自动部署
