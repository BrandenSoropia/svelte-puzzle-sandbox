# Dev Notes Dump

## Jan 30, 2021

**Special Characters**

In UTF-8 (like accented letter) can be used in HTML by doing `&{XXXX};` (replace `{XXXX}` with UTF-8 code). In JS, you can throw them in strings like so `\u{XXXX}`.

Emojis are newer (UTF-16) and JS doesn't recognize the extra data needed, so to get something like 🐶, you need to do a combo `\uD83D\uDC36` (called surrogate pair, which can be calculated). In ES6+ there's a much easier way: `'\u{XXXXX}'`. Nice!

[Source](https://flaviocopes.com/javascript-unicode/)

**Accessing Localhost from iOS Device**

Need to be on same WIFI. Find your computer's IP address, then just navigate to that from your phone's browser on exact port!

[Source](https://stackoverflow.com/questions/3132105/how-do-you-access-a-website-running-on-localhost-from-iphone-browser)
