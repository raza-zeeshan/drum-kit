//*************** detecting mouse-click ******************

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}

//************** detecting keyword press *************

document.addEventListener("keydown", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key) {

    switch (key) {

        case "a":
        case "A":
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case "s":
        case "S":
            var audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
        case "d":
        case "D":
            var audio3 = new Audio("sounds/kick-bass.mp3");
            audio3.play();
            break;
        case "g":
        case "G":
            var audio4 = new Audio("sounds/snare.mp3");
            audio4.play();
            break;
        case "j":
        case "J":
            var audio5 = new Audio("sounds/crash.mp3");
            audio5.play();
            break;
        case "k":
        case "K":
            var audio6 = new Audio("sounds/tom-3.mp3");
            audio6.play();
            break;
        case "l":
        case "L":
            var audio7 = new Audio("sounds/tom-4.mp3");
            audio7.play();
            break;
        default: console.log(key);
    }


}
// *******************btn animation*******************
function buttonAnimation(currentKey) {
    var activeBtn = document.querySelector("." + currentKey);

    activeBtn.classList.add("pressed");

    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    }, 100);
}


// var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();