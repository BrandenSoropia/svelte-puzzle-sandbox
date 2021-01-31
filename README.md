# Svelte Puzzle Sandbox

Building interactive puzzles with Svelte!

## Getting Started

Requires:

- Node 10.19.0, managed by [n](https://github.com/tj/n)
- [Yarn classic](https://classic.yarnpkg.com/en/)

Running Locally:

1. Install dependencies: `yarn`
1. Start local server: `npm run dev`
1. Navigate to: `http://localhost:5000/`. That's it!

The dev server has been configured to serve to requests other than localhost so mobile can be tested on device. (If you don't like that, remove the `--host 0.0.0.0` from `start` command in `package.json`).

To test on iOS device when hosting from a mac laptop:

1. Make sure laptop and device are on same wifi.
1. Find your mac's IP address by tapping the wifi icon in top bar > Open Network Preferences. Can also reach this by Settings > Network). It should show under the "status" section.
1. Open your browser and navigate to that IP's port 5000. ex: `192.168.0.102:5000`

You should have access to it now!

[For Android (and iOS/mac visuals), I hope the first answer can help you from here.](https://stackoverflow.com/questions/3132105/how-do-you-access-a-website-running-on-localhost-from-iphone-browser)

Misc:

I use VS Code, so this project includes recommended extensions!

## Goals

- Want to try something new to refresh from day to day.
- Dreaming of making a web room escape like game for fun!
