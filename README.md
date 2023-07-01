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
