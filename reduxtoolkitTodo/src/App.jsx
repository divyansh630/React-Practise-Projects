import "./App.css";
import AddTodo from "./components/addTodo";
import Todos from "./components/todos";
function App() {
  return (
    <>
      <h1>Redux</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
