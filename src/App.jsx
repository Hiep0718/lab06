import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Bodyif from './component/body'
import FetchData from './component/FetchData';
import Menu from './component/menu';
import TodoList from './component/todoList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div className="flex flex-col items-center p-5">
        <h1 className="text-2xl font-bold mb-4">Bài tập React Hooks</h1>
        <Menu />
        <div className="border p-4 mt-4 w-full max-w-lg">
          <Routes>
            <Route path="/" element={<h2>Chọn bài toán từ menu</h2>} />
            <Route path="/useState" element={<Bodyif />} />
            <Route path="/useEffect" element={<FetchData />} />
            <Route path='/useReducer' element={<TodoList/>} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
