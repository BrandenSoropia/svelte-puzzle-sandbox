# Dev Notes Dump

## Feb 14, 2021

**CSS Selector Refresher**
Did some CSS selector refresher and realized `el1 > el2` applies styles to `e2` if they are a direct child of `e1`. I always thought `el1 el2` is how it's done, but that's not quite the same: `el1 el2` applies if `el2` has an ancestor (parent, parent of parent, etc all the way up) `el1`!

**Misc**
Now I have a small variety of locks, I hope to build a simple straight forward room where a player can start and fully "escape" a room.

## Jan 31, 2021

**Scroll events on div**

Adding `scroll` overflow rule to non-naturally scrolling elements (like a `div`) also allows `onScroll` events to be accessed.

**Is element in view after scroll?**
Seems there are a few ways of doing it:

- My initial attempt/idea: check if element is in view by getting current scroll position, knowing each item's height, calculate how many items we scrolled passed to get to current item.
- Check if element is within container https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling

Then I found Intersection Observer, a neat API that simplifies this and has seemingly good modern web/mobile browser support! (modern meaning, ignore Internet Explorer) I happened to find out about this from a lucky r/Svelte reddit post asking about this exact thing, which led me to this nice overview by MDN: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API. I decided not to use the Svelte specific packages that wraps this because it seems to be a small and easy enough API, and is at it's most flexible rather than being locked in to someone else's API on top of it.

## Jan 30, 2021

**Special Characters**

In UTF-8 (like accented letter) can be used in HTML by doing `&{XXXX};` (replace `{XXXX}` with UTF-8 code). In JS, you can throw them in strings like so `\u{XXXX}`.

Emojis are newer (UTF-16) and JS doesn't recognize the extra data needed, so to get something like 🐶, you need to do a combo `\uD83D\uDC36` (called surrogate pair, which can be calculated). In ES6+ there's a much easier way: `'\u{XXXXX}'`. Nice!

[Source](https://flaviocopes.com/javascript-unicode/)

**Accessing Localhost from iOS Device**

Need to be on same WIFI. Find your computer's IP address, then just navigate to that from your phone's browser on exact port!

[Source](https://stackoverflow.com/questions/3132105/how-do-you-access-a-website-running-on-localhost-from-iphone-browser)
