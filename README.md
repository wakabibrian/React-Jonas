# Section 1: Introduction

React Component - Is a piece of the user interface.
A component in React is just a function
Components/the functions return JSX.
In a react, we update a state with useState
useState is a function in react which returns an Array.

### Creating a New React App

Use: npx create-react-app project_name
To Start: npm start

# Section 2: JS Review

Learnt;

-   Destructuring - Getting data out of an object or out of an array
-   Rest operator - Creating an array with other items not destructured
-   Spread operator - Selects all items in the arrays/objects and adds a new one at the end
-   Template Literals - Create strings that contain JavaScript variables/any Javascript expression
-   Ternary Operator Instead of if/else Statements
-   Arrow Functions - New way of writing functions
-   Short-Circuiting And Logical Operators: &&, ||, ??
    -   || (or) operator - short-circuits when the first value is true (immediately returns that first value)
    -   && (and) operator - short-circuits when the first value is false (immediately returns that first value)
    -   ?? (nullish coalescing operator) operator - It works very similarly as the || operator (only for null or undefined) but does not for 0 or ""
-   Optional Chaining (?.) - ignore the undefined values (ignore the next variables incase what comes before is undefined or not available )
-   Functional Array Methods: map, filter and reduce: return a new array based on the original one
    -   The Array map Method: Loops over an array and return a new array with some operation applied to each elements of the original array
    -   The Array filter Method: Filtering out some elements of the array based on a condition
    -   The Array reduce Method: The goal is to reduce the array to one value
-   The Array sort Method: Used to sort an array
-   Working With Immutable Arrays: Arrays which are not changed or manipulated
-   Asynchronous JavaScript: Promises; fetching/loading data from an external web api
-   Asynchronous JavaScript: Async/Await; fetching/loading data from an external web api

# Section 3: Working With Components, Props and JSX

I learn't;

## 1. Rendering the Root Component and Strict Mode

## 2. Debugging

-   Always make sure the application is running
    -   To start: _npm start_
    -   To stop: _ctr + c_
-   Always keep the terminal open and console in the dev tools (browser) to help track errors
-   Always work with ESLint (Warnings indicated during development e.g declaration of variables but never used)

## 3. Components as Building Blocks

-   Details in the Pdf

## 4. Creating And Reusing a Component

-   We write new components using function
-   The function needs to start with uppercase letter
-   The function needs to return a markup in the form of JSX
-   Call/nest/include the created function (component) inside App component
-   Each component can return exactly one element
-   You can reuse components by using it several times

## 5. What is JSX?

-   Details in the Pdf

## 5.JavaScript Logic in Components

-   Use {} to include JavaScript

## 6. Separation of Concerns

-   Why React built on components: Why we have html, css and JS coupled together.
-   Details in the Pdf
-   React's separation of concerns is per component, not per technology e.g html, js and cs.
-   Each component has its own data, logic and appearance (html, css and js mixed up in one component)

## 7. Styling React Applications

In React you can use;

-   Inline styling,
-   External css files,
-   Css modules,
-   Tailwind css
-   css saas etc

To style with inline;

-   use style attribute, enter js mode with {}, and then inside {}, use an object for the required style {color: "red"}
-   Always use cammelCase notation
-   e.g style={{ color: "red", fontSize: "32px" }}
-   But always include an external css file

To style with external css;

-   Use className, not class!

## 8. Passing and Receiving Props

-   Prop stand for property
-   Props is how we pass data between components from parent components to child components
-   It is a communication channel between a parent and a child component

Steps;

1.  We pass props into the component

    -   Pass them as attributes

2.  We receive the props in the component that we pass them into
    -   Accept a props parameter. Props is an object with all the props that were passed
    -   Remove the props from their objects

## 9. Props, Immutability, and One-Way Data Flow

-   Details in the Pdf

## 10. The Rules of JSX

-   Details in the Pdf

## 11. Rendering Lists

-   Rendering a list is when you have an array and you want to create one component of the array.
-   Rendering them dynamically
-   Use the map method
-   With map method, always pass in the key... with something unique

## 12. Conditional Rendering With &&

-   Conditional rendering is rendering some piece of the UI based on a certain condition
-   && short circuiting - if the condition (first) is falsy, then the second part wont be executed

## 13. Conditional Rendering With Ternaries

-   Ternary operator has 3 parts; condition, true, and false parts
-   The advantage of using a ternary operator is we can display some alternative
-   We can not simply use an if else statement because of the rules of JSX. Inside JS mode we can not write simply javascript. We can write something which produces a value

## 14. Conditional Rendering With Multiple Returns

-   JSX can have multiple returns based on a condition.
-   You can use any JavaScript like the if else since we are outside JSX
-   Useful when rendering the entire component conditionally but not pieces of JSX

## 15. Extracting JSX Into a New Component

## 16. Destructuring Props

-   Avoiding writing props. ....
-   Helps to know which props the component will receive

## 17. React Fragments

-   A React Fragment basically lets us group some elements without leaving any trace in the html tree/ in the Dom
-   use <></>
-   It allows us have more than one element inside a piece of JSX
-   When we are rendering a list, we need a key, so we use <React.Fragment key={key}></React.Fragment>

## 18. Setting Classes and Text Conditionally

-   For Text; Already know the element, but not the content/Text
-   For Classes; use template literal but in javascript mode

# Section 4: STATE, EVENTS, AND FORMS: INTERACTIVE COMPONENTS

## 1. Build a Steps Component

## 2. Handling Events the React Way

-   This replaces the vanilla JS addEventListener method (Imperative way of building UIs)
-   We listen for events right on the element where they will happen; We specify an event listener function directly on the element.
-   Some react event handlers; onClick, onMouseEnter
-   Then we specify a function value. Do not call a function
-   We create the event handler function in the component, and pass it in the event handler
-   For event handlers, always create a function handle... e.g handlePrevious, handleNext

## 3. What is State in React?

Details in pdf

## 4. Creating a State Variable With useState

To use state in the component, we follow these 3 steps;

-   We add a new state variable (we use the useState() function from react)
-   Then we use it in the code; in JSX
-   Then we update the piece of state in some event handler

-   useState() function takes in the default value of the state variable as an argument
-   The function returns an array with a default value of the state and a function we can use to update the state variable
-   useState() function is a hook because it starts with use. We can only call hooks on the top level of the function. Not inside an if statement, or inside another function or any other loop
-   We should update the state using the setter function, not manually

## 5. Don't Set State Manually!

-   The setter function updates the state automatically without mutating the function

## 6. The Mechanics of State

-   React reacts to state changes by re-rendering the UI
-   Details in the pdf

## 7. Adding Another Piece of State

-   State is like memory... it remembers its state even if we re-render again and again

## 8. React Developer Tools

-   The react team built dev tools specific for react.
-   Install the react dev tools extension.
-   Components tab... for showing component tree
-   You can use the components tab to test different values for state

## 9. Updating State Based on Current State

-   We should not update the state based on the current state just like before
-   Always pass in the call back function (in the useState()), not just a value.
-   The call back function will receive as an augment the current value of the state
-   When we are not updating state based on the current state, e.g in objects, we can just pass in the new state value.

## 10. More Thoughts About State + State Guidelines

-   Each component manages its own state.
-   Details in the pdf.

## 12. A Vanilla JavaScript Implementation

-   With vanilla JS we have imperative code, that tells step by step what to do. (Imperative DOM manipulation)

## 13. Building a Form and Handling Submissions

-   Forms are fundamental in web applications.
-   We use the html <form> element.
-   In Single Page Application, we can submit a form without the page reloading. Therefore we need to disable the default html behavior of reloading with e.preventDefault; where e is event passed in the handler function.
