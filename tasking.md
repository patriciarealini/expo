# Tasking

## ￼Ando Code Assignment
The Problem:
You are in the kitchen sitting next to Alyssa, our friendly kitchen expediter. Her role is to take packed orders and make sure they get picked up by the right delivery courier. She’s currently got 3 screens she’s using to see all the information she needs to do her job. Your job is to help make her life easier!
Using React, create a simple Node.js prototype app that serves a single page with cards representing orders. The card should have:
● The order number (like ‘0001’, ‘0002’, etc)
● The name of the customer
● The address of the customer
● The name of the courier
● The pickup ETA
The card should also have a button to mark it as “picked up”, at which point it should exit the screen in a graceful way.
Cards should be auto­generated every 15 seconds and appear on the page. Generate them however you’d like!
There should be a “Help!” button at the top of the screen that can be pressed to bring up a confirmation modal that will say, “Are you sure you want to close the kitchen?”, at which point orders will no longer appear automatically.
How you setup your project is completely up to you, though we recommend using gulp to pre­process your React JSX files to include on the page.
Specifically we are looking for:
● Easy to read code
● Good modularization of different UI elements
● Knowledge of React and (minor) knowledge of Node.js
Good luck and let us know if you have any questions!

#### Breaking Down the Problem

- A header with a Help button, that when clicked reveals a modal.
- Expo to hold the "tickets".
  - To emulate an expo's expectations for the layout of tickets, tickets should be presented in a row. The queue will begin on the left hand side of the screen and come in on the right hand side of the screen. Scrolling will be horizontal & a button to the far left should automatically scroll to the top of the queue.
  - The Expo should display a partial ticket on the far end so that the user develops an expectation that there are more tickets out of the view and that to access them they can scroll horizontally.
- Cards to hold the order details.
  - Cards should have a button to mark as completed/picked up. In future iterations I would like to have a button in the nav bar or in the footer that takes you to a display of completed orders.
  - It would be user friendly to provide the pickup ETA with a timer that counts down to that time next to it.
  - When the ETA time has been passed, tickets could change color to red to indicate that they are overdue.
  - It would be cool to use CSS Transitions to flip the cards to reveal the contents of the order.

#### Things I Need To Learn To Do

- Gulp, writing a gulpfile and properly concatenating my files together.
- npm scripts to run my build.
- Plugging in Babel.
- Setting up Redux. My experience with Redux has been adding connect to components and accessing state to populate a UI, but i've never built the state or plugged in Redux before.
- Dummy Databases (where do i store the data for the orders? Firebase with API calls?) (JSON object full of data and on app start up initialize function to populate with data?).
- Auto generating cards every 15 seconds `setInterval(function, timeInMillisecondsInteger)`.


## Set Up The Stack

- [x] Node v5.10.1
- [x] Hapi
- [x] React
- [ ] Redux (installed)
- [x] Babel
  - [x] Browserify
  - [x] Babelify
  - [x] Babel Preset React
  - [x] Babel Preset ES2015
- [x] Gulp
  - [x] Normalize.css
  - [x] gulp-sass
- [x] Radium
- [x] Mocha
  - [x] Chai
  - [x] Babel-Register (Dev Dependency)
- [ ] ESLint ?

> Because I haven't put together my own build before (but i've been learning about how to do it and excited i get to finally do it) I decided to put together a [boilerplate build](https://github.com/patriciarealini/jsboilerplate) alongside my work for this project. This way I can implement this work in this future on my other personal projects 🎉.  


## Tasks

> Any issues I run into that block me will be included in my tasks as blockquotes; just like this one.

- [x] Create raw index.html viewable in the browser.
- [x] Set up Hapi to serve `index.html` at the request of a browser.
- [x] Set up Hapi to serve `index.css` at the request of a browser.
- [x] Set up Gulp to concat the `index.css`, normalize.css and any other css files.
- [x] Make Hapi point to the Gulp output in `tmp/` instead of `ui/index.css`

> I had been encouraged to set up this project to build by sourcing CDN from the index.html, however I really wanted to learn how to get a project up and running on it's own, so at this point I undid my initial set up and opted to write my own builds.

- [x] Install browserify & babelify
- [x] Set up browserify with an npm script to build
- [x] Set up babelify with browserify

> Reached a point in my iteration where it was appropriate to start destructuring my components and using Gulp to concatenate my work for me.

- [x] Make Gulp copy over `ui/index.html` to `tmp/index.html`.
- [x] Make Hapi point to the Gulp output in temp/ instead of `ui/index.html`.
- [x] Install gulp-sass
- [x] Add sass file to `ui/` so i can make sure gulp-sass is parsing the sass into css.
- [x] Make Gulp concat sass and css files and run through gulp-sass into `tmp/index.css`. Check `tmp/index.css`.
- [x] Create react components for the UI in `ui/components/*.jsx`

> Ran into an error in my `server/index.js` file. ES2015 was throwing an error upon npm start because my node version reverted to v0.12.x. To rectify I ran n`vm install stable` & `npm rebuild`. I could then npm start without a problem.

> While introducing modules, I ran into a pair of error messages. `React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components).` & `Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined.`. [This blog post](https://codereviewvideos.com/blog/warning-react-createelement/) helped me find the solution.

> Now I'm getting a new error message (yay!). `RangeError: Maximum call stack size exceeded`. Not sure why i'm getting an infinite loop error message but the problem was solved by cleaning up the imports and exports which did not properly call modules from their respective homes. (Learned later about cyclical dependency calling).

- [x] Create a `Header` module & import the `Modal` module into the Header.
- [x] Create a `Expo` module & import the `Tickets` module into the Expo.

> Having trouble with styling. I didn't want to complicate things further and thought i could simply set classes on my jsx html tags. I think I'm going to look into wiring up Radium so i can do inline styles. iteration is 🆒.

- [x] Install Radium

> Getting `unexpected token` error for the use of a decorator with Radium. Apparently Babel 6 took out ES7 decorators. Considering [transform-decorators-legacy](https://www.npmjs.com/package/babel-plugin-transform-decorators-legacy).

- [x] Install babel-plugin-transform-decorators-legacy so i can use decorators with Radium.
- [x] Install Mocha Chai

> While working on the Ticket component, in order use `static` for PropTypes I need to install `babel-plugin-transform-class-properties`.

- [x] Provide ticket with a UI that lists the information.
- [x] Provide Ticket with props from Expo.
- [ ] Generate a number of tickets from a list in the Expo component. 
- [ ] Provide ticket with a UI that allows for a ticket to be marked as completed.
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]

## Assets I Could Use

[Momofuku Favicon](https://momofuku.com/app/themes/momofuku/favicon.ico)
[Ando Favicon](https://static.andofood.com/graphics/favicon.png)

## Snippets

```
import {Modal} from "./components/index.jsx";

var openModal() => {

  return (
    <button onClick={this.openModal()}>Help!</button>
    <Modal />
  )
};
```
