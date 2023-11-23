import MainController from "./controllers/MainController.js";
// TODO: 파일을 로딩할수 있도록 웹팩 로더 설정을 추가하세요 (css-loader)
import "./main.css";

document.addEventListener("DOMContentLoaded", () => {
  new MainController();
});
