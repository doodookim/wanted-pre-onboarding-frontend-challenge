import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { addTodo, deleteTodo } from '../../store/todoReducer';

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
    <div className='TodoList'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo();
        }}
      >
        <input
          type='text'
          placeholder='할 일을 입력하세요.'
          value={inputText}
          onChange={handleInputChange}
        />
        <button type='submit'>등록하기!</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
