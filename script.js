let canvas = document.querySelector('#myCanvas')
canvas.style.backgroundColor = '#a6a3a2'

// a paintbrush 
let ctx = canvas.getContext('2d')


// Rect
//ctx.fillRect(x, y, width, height)
/*
ctx.fillStyle = 'red'
ctx.fillRect(50, 50, 200, 400)

ctx.fillStyle = 'blue'
ctx.fillRect(270, 50, 200, 400)
*/

//ctx.strokeRect(x, y, width, height)
// console.log(ctx)

// ctx.fillStyle = 'red'
// ctx.fillRect(50, 50, 200, 400)

// ctx.strokeStyle = 'blue'
// ctx.strokeRect(50, 50, 200, 400)


// ctx.strokeStyle = 'blue' 
// ctx.strokeRect(50, 50, 200, 400)

// ctx.clearRect(x, y, width, height)
// 2ctx.clearRect(70,50, 00, 400)


// to clear the whole canvas
//ctx.clearRect( 0, 0 , canvas.width, canvas.height)


// ctx.fillStyle = 'blue'
// ctx.fillRect(50, 50, 200, 200)

// Line
// moveTo(x,y)
/*
ctx.beginPath()
ctx.strokeStyle = 'red'
ctx.moveTo(50,50)
ctx.lineTo(150,50)
ctx.lineTo(150, 150)
ctx.lineTo(50, 50)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.strokeStyle = 'blue'
ctx.moveTo(50,250)
ctx.lineTo(150,250)
ctx.stroke()
ctx.closePath()

*/
// Circle

//ctx.arc(x, y , radius, startAngle, endAngle, anticlockwise)
/*
ctx.beginPath()
ctx.arc(100, 100, 100, 0, 2*Math.PI, true)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.arc(60, 70, 15, 0, 2*Math.PI, true)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.arc(140, 70, 15, 0, 2*Math.PI, true)
ctx.stroke()
ctx.closePath()


ctx.beginPath()
ctx.arc(100, 100, 50, 0, Math.PI)
ctx.stroke()
ctx.closePath()

*/

// Images
// create the image element with the src
let img  = document.createElement('img')
img.src = 'https://tinyurl.com/ironhack-pokemons/4.svg'

let img1  = document.createElement('img')
img1.src = 'https://tinyurl.com/ironhack-pokemons/25.svg'

img.addEventListener('load', () => {
    ctx.drawImage(img, 60, 360)
})

img1.addEventListener('load', () => {
    ctx.drawImage(img1, 260, 360)
})

//Activity

// Pokeball
ctx.fillStyle = 'white';
ctx.lineWidth = 12 
ctx.beginPath()
ctx.arc(200, 200, 100, 0, Math.PI)
ctx.lineTo(300, 200)
ctx.fill() // fills the circle with a color
ctx.stroke()
ctx.closePath()

ctx.fillStyle = 'red';
ctx.lineWidth = 12
ctx.beginPath()
ctx.arc(200, 200, 100, 0, Math.PI, true)
ctx.fill()
ctx.stroke()
ctx.closePath()

ctx.fillStyle = 'white';
ctx.lineWidth = 22
ctx.beginPath()
ctx.arc(200, 200, 20, 0, Math.PI*2, true)
ctx.stroke()
ctx.fill()
ctx.closePath()