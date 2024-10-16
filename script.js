let moodleVisible = false;

var burger = document.getElementById("burger");
var moodle = document.getElementById("moodle");
var cross = document.getElementById("cross");

burger.addEventListener("click", () => {
    if (moodleVisible === false) {
        moodle.style.visibility = "visible";
        burger.style.visibility = "hidden";
        moodleVisible = true;
    }
});

cross.addEventListener("click", () => {
    if (moodleVisible === true) {
        moodle.style.visibility = "hidden";
        burger.style.visibility = "visible";
        moodleVisible = false;
    }
});

console.log("testing git push...");
