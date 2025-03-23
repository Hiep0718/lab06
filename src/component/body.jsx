import { useState } from "react"

export default function Bodyif(){
    const [input, setInput] = useState('Mặc định');
    function handleChange(e){
        setInput(e.target.value);
    }
    function handleClick(){
        setInput("Mặc định");
    }
    return(
        <>
            <input onChange={handleChange} type="text" value={input}/>
            <span>Kết quả: {input}</span><br />
            <button onClick={handleClick}>Xóa kết quả</button>
        </>
    )
}