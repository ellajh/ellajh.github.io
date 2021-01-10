

// Function to show border lines for different elements when the corresponding buttons are clicked
let showWorkingsArea = document.getElementsByClassName("show-workings")[0];
let selectionArea = document.getElementsByClassName("selection-area")[0];

let showWorkingsButton = document.getElementById("show-workings-button");
let showFlexboxesButton = document.getElementById("flexboxes-button");
let showGridsButton = document.getElementById("grids-button");
let showInlinesButton = document.getElementById("inline-button");

let selectionShown = false;
let flexboxesShown = false;
let gridsShown = false;
let inlinesShown = false;


function showSelection() {
    if (selectionShown == false) {
      selectionArea.style.display = "flex";
      selectionShown = true;
      showWorkingsButton.textContent = "Hide";
    } else if (selectionShown == true) {
        showFlexboxes();
        showGrids();
        showInlines();
        selectionArea.style.display = "none";
        selectionShown = false;
        showWorkingsButton.textContent = "Show my workings";
    }
}

function showFlexboxes() {
    let flexboxes = document.getElementsByClassName("flex-border");
    if (flexboxesShown == false) {
        for (i = 0; i < flexboxes.length; i++) {
            flexboxes[i].style.border = "solid green 3px";
        }
        showFlexboxesButton.textContent = "Hide Flexbox Outlines";
        flexboxesShown = true;

    } else if (flexboxesShown == true) {
        for (i = 0; i < flexboxes.length; i++) {
            flexboxes[i].style.border = "none";
        }
        showFlexboxesButton.textContent = "Show Flexbox Outlines";
        flexboxesShown = false;
    }
}

function showGrids() {
    let grids = document.getElementsByClassName("grid-border");
    if (gridsShown == false) {
        for (i = 0; i < grids.length; i++) {
            grids[i].style.border = "solid red 3px";
        }
        showGridsButton.textContent = "Hide Grid Outlines";
        gridsShown = true;

    } else if (gridsShown == true) {
        for (i = 0; i < grids.length; i++) {
            grids[i].style.border = "none";
        }
        showGridsButton.textContent = "Show Grid Outlines";
        gridsShown = false;
    }
}

function showInlines() {
    let inlines = document.getElementsByClassName("inline-border");
    if (inlinesShown == false) {
        for (i = 0; i < inlines.length; i++) {
            inlines[i].style.border = "solid blue 3px";
        }
        showInlinesButton.textContent = "Hide Inline Element Outlines";
        inlinesShown = true;

    } else if (inlinesShown == true) {
        for (i = 0; i < inlines.length; i++) {
            inlines[i].style.border = "none";
        }
        showInlinesButton.textContent = "Show Inline Element Outlines";
        inlinesShown = false;
    }
}

showFlexboxesButton.addEventListener("click", showFlexboxes);
showGridsButton.addEventListener("click", showGrids);
showInlinesButton.addEventListener("click", showInlines);
showWorkingsButton.addEventListener("click", showSelection);




