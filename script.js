let div = document.getElementById("content");

/*let cursorTypes = [
    {
        type: 'hand',
        cursor: 'hand'
    },
    {
        type: 'copy',
        cursor: 'pointer'
    },
    {
        type: 'crosshair',
        cursor: 'crosshair'
    },
{
    type: 'auto',
  cursor: 'auto'
},

{
    type: 'none',
  cursor: 'none'
},

{
    type: 'pointer',
  cursor: 'pointer'
},

{
    type: 'hand',
  cursor: 'hand'
},

{
    type: 'crosshair',
  cursor: 'crosshair'
},

{
    type: 'move',
  cursor: 'move'
},

{
    type: 'wait',
  cursor: 'wait'
},

{
    type: 'help',
  cursor: 'help'
},

{
    type: 'text',
  cursor: 'text'
},

{
    type: '',
  cursor: 'e-resize'
},

{
    type: '',
  cursor: 'ne-resize'
},

{
    type: '',
  cursor: 'nw-resize'
},

{
    type: '',
  cursor: 'se-resize'
},

{
    type: '',
  cursor: 'sw-resize'
},

{
    type: '',
  cursor: 's-resize'
},

{
    type: '',
  cursor: 'w-resize'
},
{
    type: '',
  cursor: 'default'
},

// #url
// {
//     type: '',
//   cursor: auto; // Fallback should be specified separately for 'IE'
//   cursor: url(http://www.hscripts.com/images/next.gif) 2 2, auto; // See: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor/url for more info
// },

{
    type: '',
  cursor: 'copy'
},

{
    type: '',
  cursor: 'alias'
},

{
    type: '',
  cursor: 'context-menu'
},

{
    type: '',
  cursor: 'cell'
},

// {
//     type: '',
//   cursor: -moz-'grab'
//   cursor: -webkit-grab;
//   cursor: grab;
// },

// {
//     type: '',
//   cursor: -moz-'grabbing'
//   cursor: -webkit-grabbing;
//   cursor: grabbing;
// },

{
    type: '',
  cursor: 'spinning'
},

{
    type: '',
  cursor: 'count-up'
},

{
    type: '',
  cursor: 'count-down'
},

{
    type: '',
  cursor: 'count-up-down'
},


{
    type: '',
  cursor: 'progress'
},

{
    type: '',
  cursor: 'vertical-text'
},

{
    type: '',
  cursor: 'no-drop'
},

{
    type: '',
  cursor: 'not-allowed'
},

{
    type: '',
  cursor: 'ew-resize'
},

{
    type: '',
  cursor: 'ns-resize'
},

{
    type: '',
  cursor: 'nesw-resize'
},

{
    type: '',
  cursor: 'nwse-resize'
},

{
    type: '',
  cursor: 'col-resize'
},

{
    type: '',
  cursor: 'row-resize'
},

{
    type: '',
  cursor: 'all-scroll'
},

// {
//     type: '',
//   cursor: -moz-zoom-'in'
//   cursor: -webkit-zoom-in;
//   cursor: zoom-in;
// },

// #zoom-out
// {
//     type: '',
//   cursor: -moz-zoom-'out'
//   cursor: -webkit-zoom-out;
//   cursor: zoom-out;
// }
]*/

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
  // {cursor: 'url(myBall.cur),auto'},
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
