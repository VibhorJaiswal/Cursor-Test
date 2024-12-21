let div = document.getElementById("content");

let cursorTypes = [
  { cursor: "alias" },
  { cursor: "all-scroll" },
  { cursor: "auto" },
  { cursor: "cell" },
  { cursor: "col-resize" },
  { cursor: "context-menu" },
  { cursor: "copy" },
  { cursor: "crosshair" },
  { cursor: "default" },
  { cursor: "e-resize" },
  { cursor: "ew-resize" },
  { cursor: "-webkit-grab", cursor: "grab" },
  { cursor: "-webkit-grabbing", cursor: "grabbing" },
  { cursor: "help" },
  { cursor: "move" },
  { cursor: "n-resize" },
  { cursor: "ne-resize" },
  { cursor: "nesw-resize" },
  { cursor: "ns-resize" },
  { cursor: "nw-resize" },
  { cursor: "nwse-resize" },
  { cursor: "no-drop" },
  { cursor: "none" },
  { cursor: "not-allowed" },
  { cursor: "pointer" },
  { cursor: "progress" },
  { cursor: "row-resize" },
  { cursor: "s-resize" },
  { cursor: "se-resize" },
  { cursor: "sw-resize" },
  { cursor: "text" },
  { cursor: "w-resize" },
  { cursor: "wait" },
  { cursor: "zoom-in" },
  { cursor: "zoom-out" },
];

cursorTypes.forEach((item) => {
  const cursorTestDiv = document.createElement("div");
  cursorTestDiv.innerText = item.cursor;
  cursorTestDiv.style.cursor = item.cursor;
  cursorTestDiv.id = "cursorDiv";

  div.appendChild(cursorTestDiv);
});


function togglemode() {

  const themeStyle = document.getElementById("theme-style");
  const currentTheme = themeStyle.getAttribute("href");

  if (currentTheme === "light.css") {
    themeStyle.setAttribute("href", "dark.css");
  } else {
    themeStyle.setAttribute("href", "light.css");
  }
}

console.log('here...')