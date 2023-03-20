/**
 * Returns the YPR array
 * @returns [yaw, pitch, roll]
 */

import { CF_IDENFIER } from "../id";
import YPR from "../types/angle/YPR";
import Pitch from "../types/angle/pitch";
import Roll from "../types/angle/roll";
import Yaw from "../types/angle/yaw";

//https://simple.wikipedia.org/wiki/Pitch,_yaw,_and_roll
export default class Angle {
  private CF_identifier:CF_IDENFIER.Angle = CF_IDENFIER.Angle
  //#region Private Variables
  public YPR: YPR;
  public yaw: Yaw;
  public pitch: Pitch;
  public roll: Roll;
  //#endregion
  //#region Constructor
  constructor(yaw: Yaw = 0, pitch: Pitch = 0, roll: Roll = 0) {
    this.yaw = yaw;
    this.pitch = pitch;
    this.roll = roll;
    this.YPR = [yaw, pitch, roll];
  }
  //#endregion
  //#region Setters
  SetYaw(yaw: Yaw) {
    this.yaw = yaw;
    this.YPR[0] = yaw;
  }
  SetPitch(pitch: Pitch) {
    this.pitch = pitch;
    this.YPR[1] = pitch;
  }
  SetRoll(roll: Roll) {
    this.roll = roll;
    this.YPR[2] = roll;
  }
  SetYPR(yaw: Yaw, pitch: Pitch, roll: Roll) {
    this.yaw = yaw;
    this.pitch = pitch;
    this.roll = roll;
    this.YPR = [yaw, pitch, roll];
  }
  SetYPRArray(YPR: YPR) {
    this.YPR = YPR;
  }
  GetYaw(): Yaw {
    return this.yaw;
  }
  //#endregion
  //#region Getters
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
  GetYPR(): YPR {
    return this.YPR;
  }
  //#endregion
}

