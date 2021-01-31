# Dev Notes Dump

## Jan 30, 2021

**Special Characters**

In UTF-8 (like accented letter) can be used in HTML by doing `&{XXXX};` (replace `{XXXX}` with UTF-8 code). In JS, you can throw them in strings like so `\u{XXXX}`.

Emojis are newer (UTF-16) and JS doesn't recognize the extra data needed, so to get something like 🐶, you need to do a combo `\uD83D\uDC36` (called surrogate pair, which can be calculated). In ES6+ there's a much easier way: `'\u{XXXXX}'`. Nice!

[Source](https://flaviocopes.com/javascript-unicode/)
