
// WEBSITE TIMELAPSE CODE

let timelapseClass = document.getElementsByClassName("timelapse-pics");
let timelapseImages = timelapseClass[0].children;
let timelapseStartButton = document.getElementById("timelapse-button-start");
let timelapseStopButton = document.getElementById("timelapse-button-stop");
let inProgress = false;
let myVar = 0;
let k = 0;

function stopButton() {
    if (inProgress == true) {
        inProgress = false;
    }
    clearInterval(myVar);
}

function playTimeLapse() {
    if (inProgress == true) {
        if (k == 0) {
            k++;
        } else {
            let previous = k - 1;
            timelapseImages[previous].style.display = "none";
            timelapseImages[k].style.display = "block";

            if (k < timelapseImages.length - 1) {
                k++;
            } else {
                inProgress = false;
                timelapseImages[k].style.display = "none";
                timelapseImages[0].style.display = "block"
                clearInterval(myVar);
                k = 0;
            }
        }   
    }
}

function timeLapse() {
    if (inProgress == false) {
        inProgress = true;
        let k = 0;
        myVar = setInterval(playTimeLapse, 500);
    }
}

timelapseStartButton.addEventListener("click", timeLapse);
timelapseStopButton.addEventListener("click", stopButton);

