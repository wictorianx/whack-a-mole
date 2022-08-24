const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let CurrentTime = 60

function randomSquare(){
  squares.forEach(square =>{
    square.classList.remove('mole')})

  let randomSquare = squares[Math.floor(Math.random()*9)]
  randomSquare.classList.add("mole")
  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', ()  => {
    if (square.id === hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole(){
  let timerId = null
  timerId = setInterval(randomSquare, 500)
}

function countDown(){
  
  CurrentTime--
  timeLeft.textContent=CurrentTime
  if(CurrentTime===0){
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert("Game Over, Score: "+result)
  }
}
let countDownTimerId = setInterval(countDown,1000)



moveMole()
