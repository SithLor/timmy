# Explane
How to use it 

```ts
import Color from "./Color";
const color = new Color(255, 255, 255, 1);
```
```Getter
console.log(color.ReturnRGBA_Array());
console.log(color.ReturnRGB_Array());
console.log(color.ReturnRedValue());
console.log(color.ReturnGreenValue());
console.log(color.ReturnBlueValue());
console.log(color.ReturnAlphaValue());
```

Setters
```ts
color.SetRGBAValues(255, 255, 255, 1);
color.SetRGBValues(255, 255, 255);
color.SetRedValue(255);
color.SetGreenValue(255);
color.SetBlueValue(255);
color.SetAlphaValue(1);
```

# INFO
imports
```ts
import RGB from "../types/Color/RGB";
import RGBA from "../types/Color/RGBA";
import Alpha from "../types/Color/alpla";
import Blue from "../types/Color/blue";
import Green from "../types/Color/green";
import Red from "../types/Color/red";
```
Code
```ts
class Color {
  //#region Private Variables
  private rgba: RGBA 
  private rgb: RGB;
  private r: Red;
  private g: Green;
  private b: Blue;
  private a: Alpha;
  //#endregion
  //#region Constructor
  constructor(r: Red, g: Green, b: Blue, a: Alpha = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.rgb = [r, g, b];
    this.rgba = [r, g, b, a];
  }
  //#endregion
  //#region Setters
  SetRGBAValues(r: Red, g: Green, b: Blue, a: Alpha): void {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.rgb[0] = r;
    this.rgb[1] = g;
    this.rgb[2] = b;
    this.rgba[0] = r;
    this.rgba[1] = g;
    this.rgba[2] = b;
    this.rgba[3] = a;
  }
  SetRGBValues(r: Red, g: Green, b: Blue): void {
    this.r = r;
    this.g = g;
    this.b = b;
    this.rgb[0] = r;
    this.rgb[1] = g;
    this.rgb[2] = b;
  }
  SetRedValue(r: Red): void {
    this.r = r;
    this.rgb[0] = r;
  }
  SetGreenValue(g: Green): void {
    this.g = g;
    this.rgb[1] = g;
  }
  SetBlueValue(b: Blue): void {
    this.b = b;
    this.rgb[2] = b;
  }
  SetAlphaValue(a: Alpha): void {
    this.a = a;
    this.rgba[3] = a;
  }
  //#endregion
  //#region Getters
  ReturnRGBA_Array(): RGBA {
    return this.rgba;
  }
  ReturnRGB_Array(): RGB {
    return this.rgb;
  }
  ReturnRedValue(): Red {
    return this.r;
  }
  ReturnGreenValue(): Green {
    return this.g;
  }
  ReturnBlueValue(): Blue {
    return this.b;
  }
  ReturnAlphaValue(): Alpha {
    return this.a;
  }
//#endregion
}
```
exports
```ts
export default Color;
```