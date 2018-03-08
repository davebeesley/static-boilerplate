"use strict";

// A Standard function for a hamburger menu - enjoy
var nav = function() {
    var body = document.querySelector("body"),
        toggleMenu = document.querySelector("#toggle-menu");

    toggleMenu.addEventListener("click", function(evt) {
        var hamburger = this.querySelector(".hamburger");

        if (hamburger) {
            hamburger.classList.toggle("open");
        }

        body.classList.toggle("menu-open");
    });
};

nav();
