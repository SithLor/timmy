class Color {
  private array_data: number[];
  private r: number;
  private g: number;
  private b: number;
  private a: number;
  constructor(r: number, g: number, b: number, a: number = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.array_data = [r, g, b, a];
  }
  SetRGBAValues(r: number, g: number, b: number, a: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.array_data[0] = r;
    this.array_data[1] = g;
    this.array_data[2] = b;
    this.array_data[3] = a;
  }
  SetRGBValues(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.array_data[0] = r;
    this.array_data[1] = g;
    this.array_data[2] = b;
  }
  SetRedValue(r: number) {
    this.r = r;
    this.array_data[0] = r;
  }
  SetGreenValue(g: number) {
    this.g = g;
    this.array_data[1] = g;
  }
  SetBlueValue(b: number) {
    this.b = b;
    this.array_data[2] = b;
  }
  SetAlphaValue(a: number) {
    this.a = a;
    this.array_data[3] = a;
  }

  ReturnRGBasArray() {
    return this.array_data;
  }
  ReturnRedValue() {
    return this.r;
  }
  ReturnGreenValue() {
    return this.g;
  }
  ReturnBlueValue() {
    return this.b;
  }
}
const eyeball1color = new Color(255, 0, 0);
