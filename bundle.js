(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1]);
