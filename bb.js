//creating global
let color 

//what should happen once u click somewhere
let click = false

//continuing
document.addEventListener('DOMContentLoaded', () => {
     let show2 = document.getElementById('show2')
    document.querySelector('body').addEventListener('click', (e) => {
        if(e.target.tagName != 'BUTTON') {
            click= !click
            if(click) {
      show2.innerText =' draw allowed'
            } else {
                show2.innerText =' draw stopped'
            }
        } 
        
    })


//popup prompt
    const popup = document.getElementById('popup')
    popup.addEventListener('click', () => {
        let size2 = createSize()
        createBoard(size2)

    })
})

//what will happen once user chooses the size
function createBoard(size) {
    let board = document.querySelector('.board')
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let NumDiv = size*size

    for(let i = 0; i<NumDiv; i++) {
        const div = document.createElement('div')
        div.addEventListener('mouseover', colorDiv)
        board.append(div)
    }
}


//creating size through prompt
function createSize() {
    let input = prompt('')
    const show = document.getElementById('show')

    if(input =='') {
        show.innerText ='please provide the number'
    }  
   else if(input<0 || input>100) {
        show.innerText ='please provide the number which is between 0-100'
    }

    else {
        show.innerText ='now you can play, click on the button then click somewhere to start drawing'
        return input
    }
}


//scenarios

function colorDiv() {
    if(click) {
        if(color == 'random') {
            this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
        } 
        else {
            this.style.backgroundColor = `black`
        }
        }
    }



//global connect
function setColor(colorChoice) {
color = colorChoice
}


//resetting everything
function reset() {
    let DivS = document.querySelectorAll('div')
   
    DivS.forEach((item) => {
        item.style.backgroundColor ='white'
    })
}