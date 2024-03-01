import styled from 'styled-components';

export const TodoListContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

export const TodoForm = styled.form`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  gap: 20px;
`;

export const TodoInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const TodoButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const TodoItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
  }
`;
