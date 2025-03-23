import { useState, useReducer, useRef } from "react";

export default function TodoList() {
    const inputRef = useRef(null);
    const initialState = { task : []};
    
    function reducer(state, action) {
        switch (action.type) {
          case "them":
            return { task: [...state.task, action.payload]};
          case "xoa":
            return { task: state.task.filter((_, index) => index !== action.index) };
          default:
            return state;
        }
      }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
        {/* Input & Button */}
        <div className="flex items-center gap-2 my-4">
                <input
                    type="text"
                    className="h-10 rounded-lg border-2 border-amber-300 px-2"
                    ref={inputRef}
                    placeholder="Nhập công việc"
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => {
                        var input = inputRef.current.value.trim();
                        if (input.trim()) {
                            dispatch({ type: "them", payload: input });
                            inputRef.current.value = "";// Xóa input sau khi thêm
                        }
                    }}
                >
                    Thêm
                </button>
            </div>

            {/* Table */}
            <div className="flex justify-center mt-6">
                <table className="w-2/3 border-collapse border border-gray-300 shadow-lg">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="border border-gray-300 px-4 py-2">STT</th>
                            <th className="border border-gray-300 px-4 py-2">Công việc</th>
                            <th className="border border-gray-300 px-4 py-2">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.task.map((task, index) => (
                            <tr key={index} className="bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2 text-center text-black">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">{task}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button
                                        className="bg-red-500 text-black px-2 py-1 rounded-lg"
                                        onClick={() => dispatch({ type: "xoa", index })}
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
        
    );
}
