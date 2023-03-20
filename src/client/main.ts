import {
  CF_IDENFIER,
  Red,
  Green,
  Blue,
  Alpha,
  XYZ_Array,
  XYZ_Object,
  X,
  Y,
  Z,
  YPR_array,
  YPR_object,
  Yaw,
  Pitch,
  Roll,
  RGBA_Array,
  RGBA_Object,
  RGB_Object,
  RGB_Array,
} from "./type";
//#region Color
interface IColor {
  CF_id: CF_IDENFIER.Color;
  rgba_arrary: RGBA_Array;
  rgba_object: RGBA_Object;
  rgb_array: RGB_Array;
  rgb_object: RGB_Object;
  r: Red;
  g: Green;
  b: Blue;
  a: Alpha;
  SetRGBAValues(r: Red, g: Green, b: Blue, a: Alpha): void;
  SetRGBValues(r: Red, g: Green, b: Blue): void;
  SetRedValue(r: Red): void;
  SetGreenValue(g: Green): void;
  SetBlueValue(b: Blue): void;
  SetAlphaValue(a: Alpha): void;
  ReturnRGBA_Array(): RGBA_Array;
  ReturnRGB_Array(): RGB_Array;
  ReturnRGBA_Object(): RGBA_Object;
  ReturnRGB_Object(): RGB_Object;
  ReturnRedValue(): Red;
  ReturnGreenValue(): Green;
  ReturnBlueValue(): Blue;
  ReturnAlphaValue(): Alpha;
}
class Color implements IColor {
  //#region Private Variables

  //<summary> The color identifier </summary>
  public CF_id: CF_IDENFIER.Color = CF_IDENFIER.Color;
  private rgba_arrary: RGBA_Array;
  private rgba_object: RGBA_Object;
  private rgb_array: RGB_Array;
  private rgb_object: RGB_Object;
  /**
   * The red value
   */
  private r: Red;
  /**
   * The green value
   * */
  private g: Green;
  /**
   * The blue value
   * */
  private b: Blue;
  /**
   * The alpha value
   * */
  private a: Alpha;
  //#endregion
  //#region Constructor
  constructor(r: Red, g: Green, b: Blue, a: Alpha = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.rgb_array = [r, g, b];
    this.rgba_arrary = [r, g, b, a];

    this.rgb_object = { r: r, g: g, b: b };
    this.rgba_object = { r: r, g: g, b: b, a: a };
  }
  //#endregion
  //#region Setters

  SetRGBAValues(r: Red, g: Green, b: Blue, a: Alpha): void {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.rgb_array = [r, g, b];
    this.rgba_arrary = [r, g, b, a];
    this.rgb_object = { r: r, g: g, b: b };
    this.rgba_object = { r: r, g: g, b: b, a: a };
  }
  SetRGBValues(r: Red, g: Green, b: Blue): void {
    this.r = r;
    this.g = g;
    this.b = b;
    this.rgb_array = [r, g, b];
    this.rgb_object = { r: r, g: g, b: b };
    this.rgba_arrary = [r, g, b, this.a];
    this.rgba_object = { r: r, g: g, b: b, a: this.a };
  }
  SetRedValue(r: Red): void {
    this.r = r;
    this.rgb_array[0] = r;
    this.rgba_arrary[0] = r;
    this.rgb_object.r = r;
    this.rgba_object.r = r;
  }
  SetGreenValue(g: Green): void {
    this.g = g;
    this.rgb_array = [this.r, g, this.b];
    this.rgba_arrary = [this.r, g, this.b, this.a];
    this.rgb_object.g = g;
    this.rgba_object.g = g;
  }
  SetBlueValue(b: Blue): void {
    this.b = b;
    this.rgb_array = [this.r, this.g, b];
    this.rgba_arrary = [this.r, this.g, b, this.a];
    this.rgb_object.b = b;
    this.rgba_object.b = b;
  }
  SetAlphaValue(a: Alpha): void {
    this.a = a;
    this.rgba_arrary = [this.r, this.g, this.b, a];
  }
  //#endregion
  //#region Getters
  ReturnRGBA_Array(): RGBA_Array {
    return this.rgba_arrary;
  }
  ReturnRGB_Array(): RGB_Array {
    return this.rgb_array;
  }
  ReturnRGBA_Object(): RGBA_Object {
    return this.rgba_object;
  }
  ReturnRGB_Object(): RGB_Object {
    return this.rgb_object;
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
//#endregion

//#region Position
interface IPostion {
  CF_identifier: CF_IDENFIER.Postion;
  XYZ_Array: XYZ_Array;
  XYZ_Object: XYZ_Object;
  x: X;
  y: Y;
  z: Z;
  SetXYZ(x: X, y: Y, z: Z): void;
  SetX(x: X): void;
  SetY(y: Y): void;
  SetZ(z: Z): void;
  SetXYZ_Array(XYZ: XYZ_Array): void;
  SetXYZ_Object(XYZ: XYZ_Object): void;
  GetX(): X;
  GetY(): Y;
  GetZ(): Z;
  GetXYZ_Array(): XYZ_Array;
  GetXYZ_Object(): XYZ_Object;
}
class Postion implements IPostion {
  //#region Private Variables
  public CF_identifier: CF_IDENFIER.Postion = CF_IDENFIER.Postion;
  public XYZ_Array: XYZ_Array;
  public XYZ_Object: XYZ_Object;
  public x: X;
  public y: Y;
  public z: Z;
  //#endregion
  //#region Constructor
  constructor(x: X = 0, y: Y = 0, z: Z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.XYZ_Array = [x, y, z];
    this.XYZ_Object = { x: x, y: y, z: z };
  }
  //#endregion
  //#region Setters
  SetXYZ(x: X, y: Y, z: Z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.XYZ_Array = [x, y, z];
    this.XYZ_Object = { x: x, y: y, z: z };
  }
  SetXYZ_Array(XYZ: XYZ_Array) {
    this.x = XYZ[0]
    this.y = XYZ[1]
    this.z = XYZ[2]

    this.XYZ_Array = XYZ;
    this.XYZ_Object = { x: XYZ[0], y: XYZ[1], z: XYZ[2] };
  }
  SetXYZ_Object(XYZ: XYZ_Object) {
    this.x = XYZ.x
    this.y = XYZ.y
    this.z = XYZ.z
    this.XYZ_Array = [XYZ.x, XYZ.y, XYZ.z];
    this.XYZ_Object = XYZ;
  }

  SetX_Array(x: XYZ_Array): void {
    this.x = x[0];
    this.XYZ_Array[0] = x[0];
    this.XYZ_Object.x = x[0];
  }
  SetX_Object(x: XYZ_Object): void {
    this.x = x.x;
    this.XYZ_Array[0] = x.x;
    this.XYZ_Object.x = x.x;
  }
  SetX(x: X) {
    this.x = x;
    this.XYZ_Array[0] = x;
    this.XYZ_Object.x = x;
  }
  SetY_Array(y: XYZ_Array): void {
    this.y = y[1];
    this.XYZ_Array[1] = y[1];
    this.XYZ_Object.y = y[1];
  }
  SetY_Object(y: XYZ_Object): void {  
    this.y = y.y;
    this.XYZ_Array[1] = y.y;
    this.XYZ_Object.y = y.y;
  }
  SetY(y: Y) {
    this.y = y;
    this.XYZ_Array[1] = y;
    this.XYZ_Object.y = y;
  }
  SetZ_Array(z: XYZ_Array): void {
    this.z = z[2];
    this.XYZ_Array[2] = z[2];
    this.XYZ_Object.z = z[2];
  }
  SetZ_Object(z: XYZ_Object): void {
    this.z = z.z;
    this.XYZ_Array[2] = z.z;
    this.XYZ_Object.z = z.z;
  }
  SetZ(z: Z) {
    this.z = z;
    this.XYZ_Array[2] = z;
    this.XYZ_Object.z = z;
  }
  //#endregion
  //#region Getters
  GetX(): X {
    return this.x;
  }
  GetY(): Y {
    return this.y;
  }
  GetZ(): Z {
    return this.z;
  }
  GetXYZ_Array(): XYZ_Array {
    return this.XYZ_Array;
  }
  GetXYZ_Object(): XYZ_Object {
    return this.XYZ_Object;
  }
  //#endregion
}
//#endregion

//#region Angle
interface IAngle {
  YPR_array: YPR_array;
  YPR_object: YPR_object;
  yaw: Yaw;
  pitch: Pitch;
  roll: Roll;
  SetYaw(yaw: Yaw): void;
  SetPitch(pitch: Pitch): void;
  SetRoll(roll: Roll): void;
  SetYPR(yaw: Yaw, pitch: Pitch, roll: Roll): void;
  SetYPR_Array(YPR: YPR_array): void;
  SetYPR_Object(YPR: YPR_object): void;
  GetYaw(): Yaw;
  GetPitch(): Pitch;
  GetRoll(): Roll;
  GetYPR_Array(): YPR_array;
  GetYPR_Object(): YPR_object;
}
class Angle implements IAngle {
  //#region Private Variables
  private CF_identifier: CF_IDENFIER.Angle = CF_IDENFIER.Angle;
  public YPR_array: YPR_array;
  public YPR_object: YPR_object;
  public yaw: Yaw;
  public pitch: Pitch;
  public roll: Roll;
  //#endregion
  //#region Constructor
  constructor(yaw: Yaw = 0, pitch: Pitch = 0, roll: Roll = 0) {
    this.yaw = yaw;
    this.pitch = pitch;
    this.roll = roll;
    this.YPR_array = [yaw, pitch, roll];
    this.YPR_object = { yaw: yaw, pitch: pitch, roll: roll };
  }

  //#endregion
  //#region Setters
  SetYaw(yaw: Yaw) {
    this.yaw = yaw;
    this.YPR_array[0] = yaw;
    this.YPR_object.yaw = yaw;
  }
  SetPitch(pitch: Pitch) {
    this.pitch = pitch;
    this.YPR_array[1] = pitch;
    this.YPR_object.pitch = pitch;
  }
  SetRoll(roll: Roll) {
    this.roll = roll;
    this.YPR_array[2] = roll;
    this.YPR_object.roll = roll;
  }
  SetYPR(yaw: Yaw, pitch: Pitch, roll: Roll) {
    this.yaw = yaw;
    this.pitch = pitch;
    this.roll = roll;
    this.YPR_array = [yaw, pitch, roll];
    this.YPR_object = { yaw: yaw, pitch: pitch, roll: roll };
  }
  SetYPR_Array(YPR: YPR_array) {
    this.YPR_array = YPR;
  }
  SetYPR_Object(YPR: YPR_object) {
    this.YPR_object = YPR;
  }
  //#endregion
  //#region Getters
  GetYaw(): Yaw {
    return this.yaw;
  }
  GetPitch(): Pitch {
    return this.pitch;
  }
  /**
   *
   * @returns roll
   */
  GetRoll(): Roll {
    return this.roll;
  }
  /**
   * Returns the YPR array
   * @returns [yaw, pitch, roll]
   */
  GetYPR_Array(): YPR_array {
    return this.YPR_array;
  }
  GetYPR_Object(): YPR_object {
    return this.YPR_object;
  }

  //#endregion
}
//#endregion
