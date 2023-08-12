import { useState } from "react";

const TodoForm = ()=>{
    const [text, setText] = useState("");
    const onFormSubmit = ()=>{
        console.log("submitted");
        }
        const onInputChange = (e)=>{
            setText(e.target.value);
        }
    return (
        <form className = "form" onSubmit={onFormSubmit}>
            <input 
            placeholder="Enter new Todo here" 
            className="input"
            onChange={onInputChange} />
        </form>
    );
}
export default TodoForm;