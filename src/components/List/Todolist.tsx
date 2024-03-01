import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputText }]);
      setInputText('');
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
        <button type='submit'>등록하기</button>
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
