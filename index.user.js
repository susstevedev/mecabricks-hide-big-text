// ==UserScript==
// @name        Mecabricks - Remove big font size from forum posts
// @namespace   Violentmonkey Scripts
// @match       *://*.mecabricks.com/*
// @grant       none
// @version     0.1
// @author      susstevedev
// @description Removes big text from Mecabricks forum posts
// @icon        https://www.google.com/s2/favicons?sz=64&domain=mecabricks.com
// ==/UserScript==

(function() {
    'use strict';

    if(window.location.href.includes("forum")) {
        const posts = document.querySelectorAll('.post');
        console.log(posts);
        posts.forEach(c => {
            if(c.querySelector("table > tbody > tr > .message-wrapper > .text > span")) {
              c.querySelector("table > tbody > tr > .message-wrapper > .text > span").style.fontSize = "15px";
            }
        });
    } else {
      console.log('not on forum page')
    }
})();
