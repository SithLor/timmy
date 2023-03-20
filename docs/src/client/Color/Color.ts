//#region Imports
import { CF_IDENFIER } from "../id";
import RGB from "../types/Color/RGB";
import RGBA from "../types/Color/RGBA";
import Alpha from "../types/Color/alpha";
import Blue from "../types/Color/blue";
import Green from "../types/Color/green";
import Red from "../types/Color/red";
//#endregion


export default class Color {
  //#region Private Variables

  //<summary> The color identifier </summary>
  private CF_id:CF_IDENFIER.color = CF_IDENFIER.color;

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
}

