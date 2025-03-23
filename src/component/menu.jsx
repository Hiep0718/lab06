import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="flex gap-4">
      <Link to="/useState" className="bg-blue-500 text-white px-3 py-1 rounded">Bài 1: useState</Link>
      <Link to="/useEffect" className="bg-green-500 text-white px-3 py-1 rounded">Bài 2: useEffect</Link>
      <Link to="/useReducer" className="bg-amber-100 text-white px-3 py-1 rounded">Bài 3: useReducer</Link>
    </nav>
  );
}
