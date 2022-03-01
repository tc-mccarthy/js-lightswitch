/**
 * SILENCE IS GOLDEN
 */

const body = document.querySelector("body");
const lightswitches = document.querySelectorAll(".switch");

lightswitches.forEach(function (lightswitch) {
  lightswitch.addEventListener("click", function (e) {
    e.preventDefault(); // prevent the default behavior on the click
    body.classList.toggle("light-off");
  });
});
