import { CF_IDENFIER } from "../id";
import X from "../types/Postion/X";
import XYZ from "../types/Postion/XYZ";
import Y from "../types/Postion/Y";
import Z from "../types/Postion/Z";

export default class Postion {
    public CF_identifier:CF_IDENFIER.Postion = CF_IDENFIER.Postion
    //#region Private Variables
    public XYZ: XYZ;
    public x: X;
    public y: Y;
    public z: Z;
    //#endregion
    //#region Constructor
    constructor(x: X = 0, y: Y = 0, z: Z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.XYZ = [x, y, z];
    }
    //#endregion
    //#region Setters
    SetXYZ(x: X, y: Y, z: Z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.XYZ = [x, y, z];
    }
    SetX(x: X) {
        this.x = x;
        this.XYZ[0] = x;
    }
    SetY(y: Y) {
        this.y = y;
        this.XYZ[1] = y;
    }
    SetZ(z: Z) {
        this.z = z;
        this.XYZ[2] = z;
    }
    SetXYZArray(XYZ: XYZ) {
        this.XYZ = XYZ;
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
    GetXYZ(): XYZ {
        return this.XYZ;
    }
    //#endregion
}