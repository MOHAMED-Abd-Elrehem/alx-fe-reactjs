import { useState } from 'react'

const AddTodoForm = ( onAddTodo ) =>{
    const [text, setTaxt] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            onAddTodo(text)
            setTaxt('')
        };
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setTaxt(e.target.value)} />
            <button type='submit'>Add Todo</button>
        </form>
    )
}
export default AddTodoForm