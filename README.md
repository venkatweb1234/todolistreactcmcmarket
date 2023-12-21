# Todo App

A Simple Todo App built with React, Redux, Styled Components, and incorporating best practices for design and testing.

## Table of Contents

- [Overview](#overview)
- [Components](#components)
  - [TodoApp](#todoapp)
  - [TodoList](#todolist)
  - [TodoItem](#todoitem)
- [Redux Integration](#redux-integration)
  - [TodoReducers](#todoreducers)
  - [TodoActions](#todoactions)
  - [ConfigureStore](#configurestore)
- [Solution Design](#solution-design)
- [Todo Types](#todo-types)
- [React Testing](#react-testing)
- [Styled Components](#styled-components)
- [Provider and Store (index.tsx)](#provider-and-store-indextsx)
- [App.tsx](#apptsx)
- [Usage](#usage)
- [Installation](#installation)

## Overview

This Todo App is a feature-rich solution designed to streamline task management. It leverages React and Redux for a robust user interface, while Styled Components provide a visually appealing and responsive design.

- Task 1: Build a React Component
  Create a React for a simple to-do list. The component should have the following
  features:
  Displayed a list of to-do items.
  Allow users to add new to-do items.
  Allow users to mark a to-do item as completed.
  Allow users to delete a to-do item.

- Task 2: State Management
  Implement state management for the to-do list using either React built-in state or a state
  management library like Redux. Ensure that the UI reflects the current state of the to-do list
  accurately.

- Task 3: Styling
  Style the to-do list component using CSS (or a styling library like Styled Components). Make it
  visually appealing and responsive.

- Task 4: Unit Testing
  Write unit tests for at least two critical functions or methods in your React component. Use a testing
  library like Jest or React Testing Library.

## Components

### TodoApp

The main component serving as the entry point for the Todo App. Manages the overall application structure, including input for adding new todos and displaying the TodoList.

### TodoList

A component responsible for rendering the list of todos. It maps through the todos array and renders individual TodoItem components.

### TodoItem

Represents an individual todo item. Displays the todo text, allows marking a todo as complete or undoing completion, and provides an option to delete the todo.

## Redux Integration

### TodoReducers

Contains Redux reducers for handling todo-related actions. Manages the state for adding, completing, and deleting todos.

### TodoActions

Defines action creators for todo-related actions. These actions are dispatched to update the Redux state managed by TodoReducers.

### ConfigureStore

Configures the Redux store for the application. Combines reducers and exports types for RootState and AppDispatch.

## Solution Design

The Todo App follows a modular and scalable design pattern. Components are organized for reusability, and Redux is used for centralized state management. The application is designed with best practices for maintainability and performance.

## Todo Types

Defines TypeScript interfaces for the Todo object and TodosState, ensuring type safety throughout the application.

## React Testing

Test cases are written using React Testing Library to ensure the functionality and correctness of each component, reducer, and action. The testing suite covers a comprehensive range of scenarios to guarantee a robust application.

## Styled Components

Styled Components are employed for consistent and visually appealing styling. The design is responsive, adapting to various screen sizes, and adheres to modern design principles.

## Provider and Store (index.tsx)

The `index.tsx` file sets up the Redux Provider and integrates the Redux store with the React application, ensuring global state management.

## App.tsx

The main application file where the Todo App component is rendered. This file serves as the entry point for the React application.

## Usage

To use the Todo App, follow these steps:

1. Clone the repository: `git clone https://github.com/venkatweb1234/todolistreactcmcmarket.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Start the test use this command: `npm test`

## Installation

If you want to integrate this Todo App into your existing project, install the required components:

```bash
npm install @reduxjs/toolkit react-redux styled-components
```

## Out Put Images

** Component Architecture**

- ![Reference Screenshot](src\output\compoentStructure.png)

** TodListItemsAddedforDesktop**

- ![Reference Screenshot](src\output\TodListItemsAddedforDesktop.png)

** TododListMobile**

- ![Reference Screenshot](src\output\TododListMobile.png)

** TododListMobileTodoListItems**

- ![Reference Screenshot](src\output\TododListMobileTodoListItems.png)

** TododListResponsiveVisually**

- ![Reference Screenshot](src\output\TododListResponsiveVisually.png)

** TodoListCompleteTodoItems**

- ![Reference Screenshot](src\output\TodoListCompleteTodoItems.png)

** TodoListIntialDesktopScreen**

- ![Reference Screenshot](src\output\TodoListIntialDesktopScreen.png)
