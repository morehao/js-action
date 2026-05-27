# html-to-docx 最小示例

将 HTML 内容转换为 DOCX 文件。

## 环境

- Node.js
- npm 已安装 `html-to-docx`（依赖已安装在项目根目录）

## 文件说明

| 文件 | 说明 |
|------|------|
| `index.js` | 示例脚本：读取 HTML 文件，调用 `HTMLtoDOCX()` 生成 DOCX |
| `quotes_toscrape.html` | 输入 HTML 源文件 |
| `quotes_toscrape.docx` | 生成的 DOCX 输出文件 |

## 验证步骤

```bash
# 1. 确保依赖已安装（在项目根目录执行）
npm install html-to-docx

# 2. 运行示例脚本
node bizcase/html2docx/index.js

# 3. 打开生成的 DOCX 文件
open bizcase/html2docx/quotes_toscrape.docx
```

执行成功后控制台输出 `DOCX 文件生成成功`，生成的 `.docx` 文件可用 Word、WPS、LibreOffice 等软件打开查看。
