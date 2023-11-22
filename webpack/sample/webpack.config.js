const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"), // node의 path모듈을 가져와서 절대경로 설정
    filename: "[name].js", // 번들링한 파일명, entry에서 설정한 키 값(main)으로 치환 (entry 여러개로 output 여러개가 생성될 수 있어서)
  },
};
