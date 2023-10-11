/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
let lightblue = document.querySelector('.color-1')
let orange = document.querySelector('.color-2')
let lightgreen = document.querySelector('.color-3')
let yellow = document.querySelector('.color-4')
let white = document.querySelector('.color-5')
let purple = document.querySelector('.color-6')
let green = document.querySelector('.color-7')
let pink = document.querySelector('.color-8')
let blue = document.querySelector('.color-9')
let cyan = document.querySelector('.color-10')

let paintBrush = document.querySelector('#paintTool')

lightblue.addEventListener('click', ()=>{
  paintBrush.className = 'current-brush color-1'
})
orange.addEventListener('click', ()=>{
  paintBrush.className = 'current-brush color-2'
})
lightgreen.addEventListener('click', ()=>{
  paintBrush.className = 'current-brush color-3'
})
yellow.addEventListener('click', ()=>{
  paintBrush.className = 'current-brush color-4'
})
white.addEventListener('click', ()=>{
  paintBrush.className = 'current-brush color-5'
})
purple.addEventListener('click', ()=>{
  paintBrush.className = 'current-brush color-6'
})
green.addEventListener('click', ()=>{
  paintBrush.className = 'current-brush color-7'
})
pink.addEventListener('click', ()=>{
  paintBrush.className = 'current-brush color-8'
})
blue.addEventListener('click', ()=>{
  paintBrush.className = 'current-brush color-9'
})
cyan.addEventListener('click', ()=>{
  paintBrush.className = 'current-brush color-10'
})

const gridWidth = 30;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

let pixel = document.querySelectorAll('.square')

let mouseDown = false
addEventListener('mousedown', ()=>{
  mouseDown = true
})
addEventListener('mouseup', ()=>{
  mouseDown = false
})

for(let each of pixel){
  each.addEventListener('mouseover', ()=>{
    if(paintBrush.classList.contains('color-1') && mouseDown === true){
      each.className = 'square color-1'
    } else if(paintBrush.classList.contains('color-2') && mouseDown === true){
      each.className = 'square color-2'
    } else if(paintBrush.classList.contains('color-3') && mouseDown === true){
      each.className = 'square color-3'
    } else if(paintBrush.classList.contains('color-4') && mouseDown === true){
      each.className = 'square color-4'
    } else if(paintBrush.classList.contains('color-5') && mouseDown === true){
      each.className = 'square color-5'
    } else if(paintBrush.classList.contains('color-6') && mouseDown === true){
      each.className = 'square color-6'
    } else if(paintBrush.classList.contains('color-7') && mouseDown === true){
      each.className = 'square color-7'
    } else if(paintBrush.classList.contains('color-8') && mouseDown === true){
      each.className = 'square color-8'
    } else if(paintBrush.classList.contains('color-9') && mouseDown === true){
      each.className = 'square color-9'
    } else if(paintBrush.classList.contains('color-10') && mouseDown === true){
      each.className = 'square color-10'
    }
  })
}

for(let each of pixel){
  each.addEventListener('mousedown', ()=>{
    if(paintBrush.classList.contains('color-1')){
      each.className = 'square color-1'
    } else if(paintBrush.classList.contains('color-2')){
      each.className = 'square color-2'
    } else if(paintBrush.classList.contains('color-3')){
      each.className = 'square color-3'
    } else if(paintBrush.classList.contains('color-4')){
      each.className = 'square color-4'
    } else if(paintBrush.classList.contains('color-5')){
      each.className = 'square color-5'
    } else if(paintBrush.classList.contains('color-6')){
      each.className = 'square color-6'
    } else if(paintBrush.classList.contains('color-7')){
      each.className = 'square color-7'
    } else if(paintBrush.classList.contains('color-8')){
      each.className = 'square color-8'
    } else if(paintBrush.classList.contains('color-9')){
      each.className = 'square color-9'
    } else if(paintBrush.classList.contains('color-10')){
      each.className = 'square color-10'
    }
  })
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)



/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
