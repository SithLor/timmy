function TEST_PULET_WINDOW_OBEJECT(TIME) {
  function simpleStringify(object) {
    // stringify an object, avoiding circular structures
    // https://stackoverflow.com/a/31557814
    var simpleObject = {};
    for (var prop in object) {
      if (!object.hasOwnProperty(prop)) {
        continue;
      }
      if (typeof object[prop] == "object") {
        continue;
      }
      if (typeof object[prop] == "function") {
        continue;
      }
      simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
  }
  const ABC = [
    //letters
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    //Numbers
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    //white space
    " ",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    //"(",
    //")",
    //"[",
    //"]",
    //"{",
    //"}",
    "|",
    ":",
    ";",
    "?",
    //"/",
    ///",",
    //".",
    "<",
    ">",
  ];
  function random_Item_from_Array(arr, length) {
    let data = [];
    for (let i = 0; i < length; i++) {
      data.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    return data.join("");
  }
  for (i = 0; i < TIME; i++) {
    window[random_Item_from_Array(ABC, 100)] = random_Item_from_Array(ABC, 100);
    console.log(window.length);
  }
  console.log(window);
  document.body.innerHTML = simpleStringify(window);
}

TEST_PULET_WINDOW_OBEJECT(100);
