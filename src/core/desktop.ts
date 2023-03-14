import config from "@config";
export default class Desktop {

  private asset_wallpaper: readonly [
    "https://images4.alphacoders.com/936/936378.jpg"
  ] = ["https://images4.alphacoders.com/936/936378.jpg"] as const;
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      this.SetWallPaper();
    });
  }
  SetWallPaper() {
    // Load the desktop
    //set the wallpaper to go back layer of the desktop
    document.body.style.backgroundImage = `url(${this.asset_wallpaper[0]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
  }
  //make function detect if device dark mode is on
  GetSystemColorMode() {
    
  }
  //q:how do applications get added to the desktop with like move and resize and bound
  private OpenApplications =  [];
  Add_ApplicationsWindow() {

  }
}
//check if the desktop is loaded
//if it is loaded then set the wallpaper
//if it is not loaded then wait for it to load

const t = new Desktop()
t.SetWallPaper()