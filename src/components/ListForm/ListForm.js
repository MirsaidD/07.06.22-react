function ListForm({ todo, toggleTask, removeTask }) {
    return (
        <div key={todo.id} >
            <div
                onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <button onClick={() => removeTask(todo.id)}>
                удалить
            </button>
        </div>
    )
}

export default ListForm;