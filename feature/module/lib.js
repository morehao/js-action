const fs = require('fs');
const path = require('path');

function loadDirFiles (fileDir) {
  const excludeFiles = [ 'index.js', 'lib.js' ];
  const includeSuffix = [ '.js', '.json' ];
  const files = fs.readdirSync(fileDir);
  const result = [];
  files.forEach(filename => {
    if (excludeFiles.includes(filename)) return;
    if (!includeSuffix.includes(path.extname(filename))) return;
    const basename = path.basename(filename);
    if (basename.length < 1) return;
    result.push(`${fileDir}/${filename}`);
  })
  return result;
}

function stringStyleCase (isPascal) {
  return str => {
    if (isPascal) {
      str = str.replace(/( |^)[a-z]/g, L => L.toUpperCase());
    }
    const camelUpper = camels => {
      return camels
        .map((s, i) => { return i === 0 ? s : s.replace(s[0], s[0].toLocaleUpperCase()); })
        .join('');
    };

    [ '_', '-', '.' ].forEach(sign => {
      const camels = str.split(sign);
      if (camels.length === 1) {
        str = camels[0];
      } else {
        str = camelUpper(camels);
      }
    });
    return str;
  };
};

function camelCase (filePath) {
  const fileName = path.basename(filePath);
  return stringStyleCase(false)(path.basename(fileName, path.extname(fileName)));
}

function exportsFun (fileDir) {
  const exportObj = {};
  loadDirFiles(fileDir).forEach(filePath => {
    exportObj[camelCase(filePath)] = require(filePath);
  })
  return exportObj;
}

module.exports = exportsFun;