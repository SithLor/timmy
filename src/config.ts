import { type } from "os";

type Config = {
    core:{
        desktop:{
            root_dir:string,
            wallpaper:string
        }
    },
    app:{},
    util:{},
    extensions:{}
}

export default {
    core: {
        desktop:{
          root_dir:"desktop",
          wallpaper:"https://images4.alphacoders.com/936/936378.jpg",  
        }
    },
    app:{},
    util:{},
    extensions:{}
} as Config;