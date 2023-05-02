const exit_code = { 1: 1, 0: 0 };

function CreateScriptTag(code: string): string {
  return Bun.escapeHTML("<script>" + Minfiy(code) + "</script>");
}
function Minfiy(code: string) {
  const Transpiler = new Bun.Transpiler({
    inline: true,
    allowBunRuntime: false,
    minifyWhitespace: true,
    platform: "browser",
    jsxOptimizationInline: true,
  });
  const Transpiled = Transpiler.transformSync(code);
  return Transpiled;
}
function Create_HTML_XSS_FILE(code: string) {
  Bun.write("index.html", CreateScriptTag(code));
}
Create_HTML_XSS_FILE('promat("Hello World!");');
console.log(CreateScriptTag('console.log("Hello World!");'));
