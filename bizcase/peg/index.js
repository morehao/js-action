const peggy = require("peggy");

// 定义各个语法规则
const grammarRules = {
  // 起始规则
  start: `start = _ expr:or_expr _ { return expr; }`,
  
  // OR 表达式规则 (最低优先级)
  orExpr: `or_expr = left:and_expr rest:(_ "OR" _ and_expr)* {
    if (rest.length === 0) {
      return left;
    }
    return {
      op: "OR",
      exprs: [left, ...rest.map(item => item[3])]
    };
  }`,
  
  // AND 表达式规则 (中等优先级)
  andExpr: `and_expr = left:not_expr rest:(_ "AND" _ not_expr)* {
    if (rest.length === 0) {
      return left;
    }
    return {
      op: "AND",
      exprs: [left, ...rest.map(item => item[3])]
    };
  }`,
  
  // NOT 表达式规则 (最高优先级)
  notExpr: `not_expr = "NOT" _ expr:primary {
    return {
      op: "NOT",
      exprs: [expr]
    };
  } / primary`,
  
  // 基本表达式规则 (处理括号和项)
  primary: `primary = "(" _ expr:or_expr _ ")" {
    return expr;
  } / term`,
  
  // 项规则 (匹配字母数字组合)
  term: `term = chars:[a-zA-Z0-9_]+ {
    return {
      op: "multi_match",
      value: [chars.join("")]
    };
  }`,
  
  // 空白字符规则
  whitespace: `_ = [ \\t\\n\\r]*`
};

// 构建完整的语法规则
const grammar = [
  grammarRules.start,
  '',
  grammarRules.orExpr,
  '',
  grammarRules.andExpr,
  '',
  grammarRules.notExpr,
  '',
  grammarRules.primary,
  '',
  grammarRules.term,
  '',
  grammarRules.whitespace
].join('\n');

// 可选：打印完整的语法规则用于调试
console.log("完整语法规则:");
// console.log(grammar);
console.log("\n" + "=".repeat(50) + "\n");

// 生成解析器
const parser = peggy.generate(grammar);

// 测试表达式
const expression = "1 OR 2 AND 3 AND NOT 4";

try {
  const result = parser.parse(expression);
  console.log("输入表达式:", expression);
  console.log("解析结果:");
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error("解析错误:", error.message);
}

// // 测试其他表达式
// const testExpressions = [
//   "1 OR 2",
//   "1 AND 2",
//   "NOT 1",
//   "1 AND NOT 2",
//   "1 OR 2 AND 3",
//   "(1 OR 2) AND 3"
// ];

// console.log("\n其他测试表达式:");
// testExpressions.forEach(expr => {
//   try {
//     const result = parser.parse(expr);
//     console.log(`${expr} =>`, JSON.stringify(result, null, 2));
//   } catch (error) {
//     console.log(`${expr} => 解析错误: ${error.message}`);
//   }
// });