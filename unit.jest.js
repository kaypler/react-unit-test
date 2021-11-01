module.exports = {
  verbose: true, //是否输出每个测试用例的日志
  testEnvironment: "jsdom", //运行测试的环境
  setupFiles: ["./tests/setup.js"], //设置测试环境，将在每个测试文件之前执行
  testMatch: ["**/unit/**/*.(spec|test).(js|ts|jsx|tsx)"], // 匹配测试文件
  collectCoverage: true, // 是否收集测试覆盖率
  collectCoverageFrom: [
    // 指定要收集或排除那些文件的测试覆盖率
    "src/components/**/*.(js|ts|jsx|tsx)",
    "!src/components/**/*.(spec|test).(js|ts|jsx|tsx)",
  ],
};
