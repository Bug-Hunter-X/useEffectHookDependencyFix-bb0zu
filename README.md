# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: an infinite loop caused by an incorrect dependency array.

## Problem

The `MyComponent` component uses `useEffect` to log a message when the `count` state variable exceeds 5.  However, the `count` state is always changing because the `useEffect` re-renders the component. This causes the `useEffect` to run continuously, creating an infinite loop and crashing the application. 

## Solution

The solution involves correctly specifying the dependencies in the `useEffect` hook's dependency array.  Only include state variables that directly affect the logic inside the `useEffect`. 

To avoid this bug:

1. Ensure that the dependency array includes all state variables and props used within the `useEffect`. 
2. Utilize the optional `return` function to handle cleanup.

By correctly identifying the state variables that impact the useEffect logic, you prevent unnecessary re-renders and avoid this type of error.