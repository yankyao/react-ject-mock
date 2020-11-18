module.exports = {
  setupFiles: ["./src/setupTests.js"],
  moduleFileExtensions: ["js", "tsx"], // 单元测试文件检测后缀名
  testPathIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/tests/__mocks__/cssMock.js",
  },
  transformIgnorePatterns: [
    // Ignore modules without es dir
    "node_modules/[^/]+?/(?!(es|node_modules)/)",
  ],
};
