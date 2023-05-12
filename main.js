const phoneInput = document.querySelector('#phoneInput')
const phoneCheck = document.querySelector('#phoneCheck')
const phoneResult = document.querySelector('.phoneResult')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/
// тестируем на значение инпута
phoneCheck.onclick = () => {
  if (regExp.test(phoneInput.value)){
    phoneResult.innerHTML = 'OK'
    phoneResult.style.color = 'green'
  } else {
    phoneResult.innerHTML = 'NOT OK'
    phoneResult.style.color = 'red'
  }
}


const emailInput = document.querySelector('#emailInput')
const emailCheck = document.querySelector('#emailCheck')
const emailResult = document.querySelector('.emailResult')

const regExp2 = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/

emailCheck.onclick = () => {
  if (regExp2.test(emailInput.value)){
    emailResult.innerHTML = 'OK'
    emailResult.style.color = 'green'
  } else {
    emailResult.innerHTML = 'NOT OK'
    emailResult.style.color = 'red'
  }
}