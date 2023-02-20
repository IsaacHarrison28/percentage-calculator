const obtainedValue = document.getElementById('input-number-obtained')
const maximumValue = document.getElementById('original-number')
const resultDisplay = document.querySelectorAll('.result')[0]
const calculateButton = document.getElementById('calculate')
const container = document.querySelectorAll('.container')[0]
const okBtn = document.getElementById('ok-btn')
const displayPercent = document.getElementById('percent')
const errorMessage = document.querySelectorAll('.error')[0]

//use the button to remove the result from display
okBtn.addEventListener('click', () => {
    resultDisplay.classList.remove('active')
    obtainedValue.value = ""
    maximumValue.value = ""
})

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
    let initial = obtainedValue.value
    let original = maximumValue.value

    if (initial == "" | original == ""){

        //check if input fields are empty and notify the user
        errorMessage.innerText = "please provide all information"
        return
        
    }else{
        quotient = initial/original
    }

    //calculate the percentage as a whole number
    let percentage = Math.round( quotient * 100 )

    //display the percentage to user
    resultDisplay.classList.add('active')
    displayPercent.innerText = `${percentage}%`
   
})


