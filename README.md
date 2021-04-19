CLIENT FOR TECH TEST

git clone https://github.com/davidmihalovits/shapr-techtest-frontend.git

npm install

npm start

/// Summary ///

Please wait for the Heroku server to "wake up", takes a few secs. It sleeps every 30 mins of inactivity.
Please check my backend repo of this project for the server code.

1. This project was very exciting to build because it represents a real-world app and it's full of tiny details to pay attention to.
2. Used npx create-react-app TypeScript boilerplate to kick off.
3. The only npm library I installed was node-sass. I specifically didn't use other libraries because I wanted to code all the cool stuff by myself such as the progress bar and animations.
4. I like working with Sass because the code is cleaner and can use global variables across the whole project. I keep global styles in the App.sass.
5. TypeScript is great for spotting common errors (before running into them), reading and debugging. It's like a self-documentation.
6. Broke up the app into multiple components otherwise one big file would be too hard to read and edit.
7. For a bigger app I would have used Redux for global state management (easier to work with) but here I just kept the state in the main App.tsx file. There is not too much state to manage or pass down.
8. I rendered the components in the main App.tsx file based on user interaction. See comments please.
9. Progress bar was created by putting a default value of "0%" in the progress state then passing this value to the width property of the div. Once the function runs, the progress state increases this value so that the progress bar (width) starts growing. There is a delay (setTimeout) function that must run too otherwise the progress bar would finish immediately in this project. Nothing complicated happens on the server. Users should see that nice little animation.
10. I used Sass for animations, didn't want to use a library for simple animations like the ones in this project. Usually 3rd party libraries decreases the performance, are hard to customize exactly the way we want and most of the time we don't need them. It was very simple to implement these animations with the help of React conditionals.
