const fs = require('fs');
const path = require('path');
const HTMLtoDOCX = require('html-to-docx');

const inputFile = path.join(__dirname, 'quotes_toscrape.html');
const outputFile = path.join(__dirname, 'quotes_toscrape.docx');

(async () => {
  try {
    const html = fs.readFileSync(inputFile, 'utf-8');
    const buffer = await HTMLtoDOCX(html, null, {
      title: 'Quotes to Scrape',
      creator: 'html-to-docx 示例',
      font: 'Arial',
      fontSize: 22,
    });

    fs.writeFileSync(outputFile, buffer);
    console.log('DOCX 文件生成成功:', outputFile);
  } catch (err) {
    console.error('生成失败:', err.message);
  }
})();
