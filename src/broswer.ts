export const userAgent = navigator.userAgent;
export const __FIREFOX__: boolean = userAgent.indexOf("Firefox") >= 0;
export const __WEBKIT__: boolean = userAgent.indexOf("AppleWebKit") >= 0;
export const __CHROME__: boolean = userAgent.indexOf("Chrome") >= 0;
export const __SAFARI__: boolean =
  !__CHROME__ && userAgent.indexOf("Safari") >= 0;
export const __WEBKITWEBVIEW__: boolean =
  !__CHROME__ && !__SAFARI__ && __WEBKIT__;
export const __ELECTRON__: boolean = userAgent.indexOf("Electron/") >= 0;
//@ts-ignore
export const __DENO__ = typeof Deno !== "undefined";
//@ts-ignore
export const __NODEJS__ = typeof process !== "undefined" && !__DENO__;
//@ts-ignore
export const __BUN__ = typeof bun !== "undefined";



