import './styles.css';

import { Todo, TodoList } from './classes'

// import { Todo } from './classes/todo.class';

// import { TodoList } from './classes/todo.class';


const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');

todoList.nuevoTodo(tarea);

console.log(todoList)







