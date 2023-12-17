// Todo.style.ts

import styled from "styled-components";

// Styled component for the main container of the Todo App
export const TodoContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
`;

// Styled input component for adding new todos
export const TodoInput = styled.input`
  width: 70%;
  padding: 10px;
  margin-right: 10px;
  border-radius: 16px;

  @media (max-width: 768px) {
    width: 95%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

// Styled container for each todo item in the list
export const TodoItemList = styled.div`
  background-color: #f5f5f5;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

// Styled text for displaying the todo item content
export const TodoText = styled.span<{ completed: string }>`
  flex: 1;
  margin-right: 10px;
  font-size: 18px;
  font-weight: 700;
  text-decoration: ${(props) =>
    props.completed === "true" ? "line-through; color:#f44336" : "none"};
`;

// Styled button for todo-related actions
export const TodoButton = styled.button`
  background-color: #008cba;
  color: #fff;
  border: none;
  padding: 12px 30px;
  cursor: pointer;
  border-radius: 16px;
  margin-right: 16px;

  @media (max-width: 600px) {
    display: block;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  &:hover {
    background-color: #3a7b90;
  }
`;

// Styled paragraph for messages related to todos
export const TodoParaGraph = styled.p`
  font-weight: "700";
`;

// Styled heading for the Todo App
export const TodoH1 = styled.h1`
  text-align: center;
`;

// Styled container for the list of todos
export const MoveTodoListDiv = styled.div`
  margin-top: 1.5rem;
`;

// Styled Todo Add To Button Responsive Small Screens

export const AddToButtonDiv = styled.div`
  @media (max-width: 600px) {
    text-align: center;
  }
`;
