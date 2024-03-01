import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { addTodo, deleteTodo } from '../../store/todoReducer';
import * as St from '../List/todolistStyle';

const TodoList: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.toDos.todos);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      dispatch(addTodo(inputText));
      setInputText('');
    }
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <St.TodoListContainer>
      <St.TodoForm
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo();
        }}
      >
        <St.TodoInput
          type='text'
          placeholder='할 일을 입력하세요.'
          value={inputText}
          onChange={handleInputChange}
        />
        <St.TodoButton type='submit'>등록하기</St.TodoButton>
      </St.TodoForm>
      <ul>
        {todos.map((todo) => (
          <St.TodoItem key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
          </St.TodoItem>
        ))}
      </ul>
    </St.TodoListContainer>
  );
};

export default TodoList;
