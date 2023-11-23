import * as math from "./math.js";
import "./app.css";
import nyancat from "./nyancat.jpg";

console.log(math.sum(1, 2));

document.addEventListener("DOMContentLoaded", () => {
  // DOMContentLoaded: DOM이 로딩됬을 때
  document.body.innerHTML = `
        <img src="${nyancat}" />
    `;
});
