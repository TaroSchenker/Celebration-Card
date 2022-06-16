function cardCreate(message, greeting, event1){
//create variables to represent the three html element to fill with text
    const h1element = document.querySelector('#h1card')
    const h2element = document.querySelector('#h2card')
    const pelement = document.querySelector('#pcard')

// fill variables with data passed from form
    h1element.textContent= greeting
    h2element.textContent= event1
    pelement.textContent= message

 //show card visibility
    const celebrateCard = document.querySelector('#celebrationCard')
    celebrateCard.style.visibility = 'visible'

}

function handleSubmit(e) {
    e.preventDefault();
// get values from form
    const formTarget = e.target
    const message = formTarget.message.value
    const greeting = formTarget.greetingText.value

    const event1 = formTarget.eventSelect.value

//hide form
    const formContainer = document.querySelector('#form-container')
    formContainer.style.visibility = 'hidden'
//create card
    cardCreate(message, greeting, event1)


}

function init(){
//listen for submit
    const form  = document.querySelector('#greeting-cardForm')
    form.addEventListener('submit', handleSubmit)
 }
 
 init()
