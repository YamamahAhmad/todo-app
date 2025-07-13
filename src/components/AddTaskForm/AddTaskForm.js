import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../features/tasks/tasksSlice';

const AddTaskForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            dispatch(addTask(text));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px', textAlign: 'center' }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a new task"
                style={{ padding: '10px', width: '300px' }}
            />
            <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>
                Add Task
            </button>
        </form>
    );
};

export default AddTaskForm;