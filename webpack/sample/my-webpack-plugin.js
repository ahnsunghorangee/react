class MyWebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("My Plugin", (stats) => {
      console.log("MyPlugin: done");
    });

    // compiler.plugin() 함수로 후처리한다
    compiler.plugin("emit", (compilation, callback) => {
      const source = compilation.assets["main.js"].source(); // 번들링된 (output에 있는) 결과물에 접근할 수 있다.(main.js를 가져온다.)
      console.log(source);

      compilation.assets["main.js"].source = () => {
        const banner = [
          "/**",
          " * 처리결과",
          " * Build Date: 2023-11-27",
          "*/",
        ].join("\n");
        return banner + "\n\n" + source;
      };

      callback();
    });
  }
}

module.exports = MyWebpackPlugin;
