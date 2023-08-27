import AddTodo from "./AddTodo/AddTodo"
import TodoList from "./components/todoList/TodoList"


function App() {
  const [list,setList] = useState([
    { id: 1, todoData: 'todo 1' },
    { id: 2, todoData: 'todo 2' }
]);

  return (
    <>
      <AddTodo updateList={setList}/>
      <TodoList list={list}/> 
    </>
  )
}

export default App
