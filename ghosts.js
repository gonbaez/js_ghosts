/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

// GET BY ID
document.getElementById("first_ghost").style.fill = "orange";

// GET BY CLASSNAME
Array.from(document.getElementsByClassName("second_wave")).forEach((ghost) => {
  ghost.style.fill = "blue";
});

// GET AREA, DRILL DOWN using GET BY TAG NAME
Array.from(
  document.getElementById("area-51").getElementsByTagName("svg")
).forEach((ghost) => {
  ghost.style.fill = "green";
});

// querySelector nth-child
//  Reference: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes
const refGhost = document.querySelector("#area-51 svg:nth-last-of-type(2)");

refGhost.style.stroke = "red";
refGhost.style["stroke-width"] = "15";

// from the last child, select the div immediately above the ghost and make its border '5px dashed'
refGhost.parentNode.style.border = "5px dashed";

// querySelectorAll
Array.from(document.querySelectorAll("#area-50 svg")).forEach((ghost) => {
  ghost.style.fill = "red";
});
