# To-Do List App

A simple to-do list app built with plain HTML, CSS and JavaScript. No frameworks or libraries.

## Features

- Add tasks by clicking **Add** or pressing **Enter**
- Empty tasks are not allowed
- Click a task to mark it as done (click again to undo)
- Delete a single task, or clear all completed tasks at once
- Counter showing how many tasks are left
- Friendly message when the list is empty
- Tasks are saved in the browser with `localStorage`, so they stay after a refresh

## How to run

1. Download or clone this repository.
2. Open `index.html` in any web browser.

That's it. There's nothing to install.

## Files

- `index.html`: the page structure
- `style.css`: the styling (card layout, buttons, list)
- `script.js`: the app logic (adding, completing, deleting, saving and loading tasks)

## What I learned

- Selecting elements with `getElementById` and `querySelectorAll`
- Handling `click` and `keydown` events
- Creating and removing elements with JavaScript
- Toggling CSS classes with `classList`
- Event bubbling and `stopPropagation()`
- Saving and loading data with `localStorage`, `JSON.stringify` and `JSON.parse`
- Using Flexbox to line things up
