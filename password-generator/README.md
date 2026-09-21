# Password Generator

A React-based password generator that creates random passwords based on user-selected options.

## Features

- Generate random passwords
- Adjust password length
- Include numbers
- Include special characters
- Copy generated password to clipboard
- Regenerate passwords instantly
- Responsive user interface

## Concepts Practiced

This project was built to practice the following React concepts:

- Components
- `useState`
- `useCallback`
- `useRef`
- `useEffect`
- Event Handling
- Controlled Inputs
- Conditional Logic
- Dynamic Rendering
- Clipboard API
- Random value generation

## Tech Stack

- React.js
- JavaScript
- Vite
- Tailwind CSS
- HTML

## What I Learned

While building this project, I practiced managing component state, handling user input, generating dynamic passwords, and working with React Hooks.

I used `useEffect` to automatically regenerate the password when the selected options change.

I used `useCallback` to memoize the password generation function and avoid unnecessary function recreation.

I used `useRef` to access the password input element directly, which helped with copying the generated password to the clipboard.

This project also helped me understand how different React Hooks can work together to build a more interactive and optimized application.

> **Note:** The password generation logic could also be implemented using `useEffect` alone. However, I used `useCallback` along with `useEffect` to better understand Hook dependencies and function memoization.

## Project Status

**Completed**

This project is part of my React learning journey. More React projects will be added as I continue learning and practicing React.js.
