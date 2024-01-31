const ring = document.querySelector('.ring')

const btnDeposit = document.querySelector('.deposit')
let balance = document.querySelector('.money')
let tmpBalance = Number(balance.innerHTML)

const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
let choose = -1

const oneBtn = document.querySelector('.one')
const twoBtn = document.querySelector('.two')
const threeBtn = document.querySelector('.three')
let bet = 0

const btnBet = document.querySelector('.placeBet')


btnDeposit.onclick = () => {
  if (tmpBalance < 1000) {
    tmpBalance = 10000
    balance.innerHTML = tmpBalance
    
  }
}


///////////////////
let tmp = -1

red.onclick = () => {
  choose = 0
  tmp = 0
  if (tmp == 0) {
    red.style.border = '2px solid black'
    blue.style.border = 'none'
  } else if (tmp == 1) {
    blue.style.border = '2px solid black'
    red.style.border = 'none'
  }

}

blue.onclick = () => {
  choose = 1
  tmp = 1
  if (tmp == 0) {
    red.style.border = '2px solid black'
    blue.style.border = 'none'
  } else if (tmp == 1) {
    blue.style.border = '2px solid black'
    red.style.border = 'none'
  }
}

///////////////////

oneBtn.onclick = () => {
  bet = 500
  prinConsoleLog(bet)
}

twoBtn.onclick = () => {
  bet = 2000
  prinConsoleLog(bet)
}

threeBtn.onclick = () => {
  bet = 5000
  prinConsoleLog(bet)
}

///////////////////

btnBet.onclick = () => {
  if(tmpBalance >= bet) {
    tmpBalance -= bet
    balance.innerHTML = tmpBalance
    goGame()

    console.log('INFO ABOUT BET')
    console.log(tmpBalance)
    console.log(choose)
    console.log(bet)
  }
}

function prinConsoleLog(prm) {
  console.log(prm)
}

function goGame() {
  let compRandom = Math.floor(Math.random() * 2);
  if (compRandom == 0) {
    ring.style.backgroundColor = 'red'
  } else {
    ring.style.backgroundColor = 'blue'
  }

  if (compRandom == choose) {
    bet *= 2
    balance.innerHTML = tmpBalance + bet
    tmpBalance = Number(balance.innerHTML)
  }
}

