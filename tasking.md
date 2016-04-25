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
  - To emulate an expo's expectations for the layout of tickets, tickets should be presented in a row. The queue will begin on the left hand side of the screen and come in on the right hand side of the screen.
  - The Expo should display a partial ticket on the far end so that the user develops an expectation that there are more tickets out of the view and that to access them they can scroll horizontally.
  - In the future, I think it would be interesting to a/b test a layout where the second to last ticket becomes a "stack" of tickets when there are more tickets than the screen has space to display. When an expediter would like to view the full set of tickets, they can tap on the bottom edge of the stack of tickets and the tickets will spread out and the screen will be scrollable.
  - I am also concerned about what kind of visual cue can be set up to alert the expediter that there is a new ticket. Perhaps have new tickets glow a certain color and then fade into the main color for a span of 2 seconds.
- Cards to hold the order details.
  - Cards should have a button to mark as completed/picked up. In future iterations I would like to have a button in the nav bar or in the footer that takes you to a display of completed orders.
  - It would be user friendly to provide the pickup ETA with a timer that counts down to that time next to it. This is something I would definitely want to implement in the future.
  - Additionally, it would be clever to change the background color of tickets to red to indicate when they are overdue.
  - It would be cool to use CSS Transitions or some animation to flip the cards to reveal the contents of the order.

#### Things I Need To Learn To Do

- [x] Gulp, writing a gulpfile and properly concatenating my files together.
- [x] npm scripts to run my build.
- [x] Plugging in Babel.
- [x] Setting up Redux. My experience with Redux has been adding connect to components and accessing state to populate a UI, but i've never built the state or plugged in Redux before.
- [ ] Dummy Databases (where do i store the data for the orders? Firebase with API calls?) (JSON object full of data and on app start up initialize function to populate with data?).
- [ ] Auto generating cards every 15 seconds `setInterval(function, timeInMillisecondsInteger)`.


## Set Up The Stack

- [x] Node v5.10.1
  - [x] Hapi
- [x] React
  - [x] Babel Preset React
  - [x] Babel Preset ES2015
  - [x] Babel Plugin "transform-class-properties" (for static)
- [x] Redux
  - [x] Babel Plugin "transform-object-rest-spread" (for spread operators)
  - [x] redux-logger
- [x] Babel
  - [x] Browserify
  - [x] Babelify
- [x] Gulp
  - [x] Normalize.css
  - [x] gulp-sass
- [x] Radium
  - [x] Babel plugin "transform-decorators-legacy" (for decorators)
- [x] Mocha
  - [x] Chai
  - [x] Babel-Register (Dev Dependency)
- [x] ESLint
  - [x] eslint-plugin-babel
  - [x] babel-eslint
  - [x] eslint-plugin-react
- [x] Watchify
  - [x] Chokidar
  - [x] npm run all

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
- [x] Generate a number of tickets from a list in the Expo component.
- [x] Set up redux in the root javascript file with Providers and createStore.
- [x] Replace array data source with a redux source
- [x] Insert new data to the redux source

> Got an unexpected token error because I used a spread operator in reducers. Install `babel-plugin-transform-object-rest-spread` in order to have access to spread operators.

> I know I should have installed ESLint sooner but I put it off because I wanted to actually start working on the UI. But I'm doing it now (please don't hurt me 😬).

- [x] Install ESLint & babel plugins.
- [x] Write a script for eslint so i can just run `npm run lint`.
- [x] Turn tickets into a nested object where the keys are IDs, instead of an array of objects.
- [x] Install ESLint plugin for React & JSX. `npm install eslint-plugin-react --save-dev`

> In order to map our tickets state object in the Expo component, it needs to be inside of an array (which was how it was structured to begin with however turning tickets into a nested object means we can sort the object by it's keys.) I was advised that the `values` functions in Ramda will solve this problem

- [x] Install Ramda.
- [x] Import `values` from Ramda

> Ok, if i'm going to install all these dependencies, then i might as well learn how to set up a server that will watch for changes in the build. Watchify was recommended to me. Honestly this is the one dependency I wish I had set up from the onset. 

- [x] Install watchify, chokidar & npm run all
- [x] Set up a new set of scripts for watching builds
- [x] Create a watch task in gulp

> Moving tickets that are in the queue, into a completed list. This collection of completed tickets is a result of a computed function, filtering out tickets where completed is false. Even though memoizing would reduce the frequency of computation, the downside is becomes stale and therefore I would also have to manage the freshness with more code. Additionally if I needed a third or fourth or fifth subcollection (i.e. a list of tickets that have a key of ASAP and a value of true.) the object would be repetitively stored across many many lists. Computing the subcollections (in this case on a state change) allows me to keep the subcollections organized without having the manage the subcollections manually.

- [x] Change connector to give access to two collections: queue & completed.
- [x] Use Ramda's filter function to create the queue & completed values.
- [x] Display the completed values in a new component.

> When I passed dispatch through Expo to Tickets, got the error `Invalid prop 'dispatch' of type 'number' supplied to 'Ticket', expected 'function'. Check the render method of 'Expo'.` because i forgot the second position of the map function is the index.

- [x] Curry the renderTicket & renderTickets functions so that dispatch can be passed along to Tickets component without messing up the call for the map function.
- [x] Build the UI to mark change the state of a ticket from in the queue to completed.

> If I were to iterate through and create a more production ready application, I would create a function that moves tickets out of state if their date is older than 24 hours.

- [x] Refactor Expo to only display tickets that are in the subcollection onlyQueue, if session view is 'queue'.
- [x] Add if condition to display tickets that are in the subcollection onlyCompleted, if session view is 'completed'.
- [x] Set default session view to 'queue'.
- [x] Create an action that signals the intent to view 'completed'.
- [x] Create an action that signals the intent to view 'queue'.
- [x] Create a new reducer that listens for this intent & changes session to 'completed'.
- [x] Add to the new reducer, a case that listens for the intent to view 'queue' & changes session to 'queue'.
- [x] Write a function `toggleView` to set the button in the header and toggle it's contents based on the current view.
- [x] Write a function `onClickChangeView` to trigger the state change and toggle the button.

> Ran into a problem with the toggleView button. To figure out what's happening I need to install redux-logger.

- [x] Install redux-logger `npm i --save-dev redux-logger` in order to view state in the console.
- [x] Add some flair & finally style a layout
- [x] Flexbox the header & buttons
- [x] Set global styles in the index.scss file so that I can control the general design with a single global attribute & so that my jsx file won't be too style heavy.
- [x] Layout the ticket information.
- [x] Create a simple jagged edge on the tickets so that they have a torn receipt paper nostalgia to them.
- [x] Add white borders to the ticket info so that it is easier to visually locate the necessary information


- [ ] Modal
- [ ] Add React CSSTransitionGroup to components so that changes in state can be smooth.
- [ ] Auto Generating Tickets
- [ ] ETA Time
- [ ] Order Number concatenation
- [ ] TESTS

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
