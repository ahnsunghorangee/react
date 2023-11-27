const path = require("path");
const MyWebpackPlugin = require("./my-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"), // node의 path모듈을 가져와서 절대경로 설정
    filename: "[name].js", // 번들링한 파일명, entry에서 설정한 키 값(main)으로 치환 (entry 여러개로 output 여러개가 생성될 수 있어서)
  },
  module: {
    rules: [
      {
        test: /\.js$/, // js 확장자를 가진 모든 파일은 이 로더로 돌리겠다.
        use: [
          path.resolve("./my-webpack-loader.js"), // 사용할 로더 명시
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // 뒤부터 loader가 실행된다.
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist", // file-loader가 처리하는 파일을 모듈로 사용할 때, 그 경로 앞에 추가되는 문자 (index.html 입장에서 이미지 파일은 src 폴더에 있는거여서 경로 표기가 필요)
          name: "[name].[ext]?[hash]", // file-loader가 파일을 아웃풋에 복사할 때 사용하는 파일 이름
          limit: 20000, // = 20KB, 파일 용량 설정 가능 (20KB미만인 파일은 url-loader로 base64로 변환하는 의미(= 문자열로), 20KB 이상인 경우 file-loader가 실행(= 파일로))
        },
      },
    ],
  },
  plugins: [new MyWebpackPlugin()],
};
