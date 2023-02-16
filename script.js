const obtainedValue = document.getElementById('input-number-obtained')
const maximumValue = document.getElementById('original-number')
const resultDisplay = document.querySelectorAll('.result')[0]
const calculateButton = document.getElementById('calculate')
const container = document.querySelectorAll('.container')[0]
const okBtn = document.getElementById('ok-btn')
const displayPercent = document.getElementById('percent')
const errorMessage = document.querySelectorAll('.error')[0]

//clear message error if displaying
obtainedValue.addEventListener('click', () => {
    if(errorMessage.innerText = "please provide all information"){
        errorMessage.innerText = ""
    } 
    return
})

maximumValue.addEventListener('click', () => {
    if(errorMessage.innerText = "please provide all information"){
        errorMessage.innerText = ""
    } 
    return
})

calculateButton.addEventListener('click', () => {
    //receive values of the user provided in the input fields
    let initial = obtainedValue.value
    let original = maximumValue.value

    //calculate quotient of the obtained value against the maximum value 
    initial === "" || original === "" ? errorMessage.innerText = "please provide all information" : quotient = initial/original
    
    //then find the percentage as a whole number
    let percentage = Math.round( quotient * 100 )

    //clear the input field after calculating 
    obtainedValue.value = null
    maximumValue.value = null

    //display the percentage to user
    container.style.top = '80%'
    resultDisplay.classList.add('active')
    displayPercent.innerText = `${percentage}%`

    //remove the calculate button
    calculateButton.style.display = 'none'
})

//use the button to remove the result from display
okBtn.addEventListener('click', () => {
    resultDisplay.classList.remove('active')
    container.style.top = '60%'
})