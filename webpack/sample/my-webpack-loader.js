// 로더는 함수 형태로 작성한다.
module.exports = function myWebpckLoader(content) {
  // 로더가 파일을 읽고 읽은 내용이 content로 들어온다.
  console.log("myWebpackLoader가 동작함");
  return content;
  // return content.replace("console.log(", "alert(");
};
