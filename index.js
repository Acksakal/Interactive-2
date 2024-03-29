// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         alert("I got clicked");});
// }

// let soundFiles = ["tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3", "snare.mp3", "crash.mp3", "kick-bass.mp3"];

// document.querySelectorAll(".drum").forEach(function(element, index) {
//     element.addEventListener("click", function () {
        
//         let audio = new Audio("./sounds/" + soundFiles[index]);
//         audio.play();
      
//     });
// }) 


//Detecting Button Press

const numberOfDrumButtons = document.querySelectorAll('.drum')

for(let i = 0; i<numberOfDrumButtons.length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {

        playAudio(this.innerHTML);

        buttonAnimation(this.innerHTML)

    })
}

//Detecting Keyboard Press

document.addEventListener('keydown', function(event) {
    
    playAudio(event.key);
    buttonAnimation(event.key)

    console.log(event)
})

function playAudio(key) {

    switch(key) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play()
            break;
        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play()
            break;
        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play()
            break;
        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play()
            break;
        case 'j':
            let snare = new Audio('sounds/snare.mp3');
            snare.play()
            break;
        case 'k':
            let crash = new Audio('sounds/crash.mp3');
            crash.play()
            break;
        case 'l':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play()
            break;
        default:
            console.log(buttonInnerHTML)
    }
}


function buttonAnimation(currentKey) {

    let activeButton = document.querySelector('.' + currentKey)

    activeButton.classList.add('pressed')

    setTimeout(() => activeButton.classList.remove('pressed'), 100)
}

