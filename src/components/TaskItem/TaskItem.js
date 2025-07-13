import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask, resetEditStatus } from '../../features/tasks/tasksSlice';

const TaskItem = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const [isHighlighted, setIsHighlighted] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (task.isEdited) {
            setIsHighlighted(true);

            const timer = setTimeout(() => {
                setIsHighlighted(false);
                dispatch(resetEditStatus(task.id));
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [task.isEdited, task.id, dispatch]);

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    const handleUpdate = () => {
        if (editedText) {
            dispatch(updateTask({ id: task.id, newText: editedText }));
            setIsEditing(false);
        }
    };

    const taskStyle = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: isHighlighted ? 'lightgreen' : 'white',
        padding: '10px',
        margin: '10px auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '500px',
    };

    return (
        <div style={taskStyle}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        style={{ flexGrow: 1, marginRight: '10px' }}
                    />
                    <button onClick={handleUpdate}>Save</button>
                </>
            ) : (
                <>
                    <p style={{ margin: 0 }}>{task.text}</p>
                    <div>
                        <button onClick={() => setIsEditing(true)} style={{ marginRight: '5px' }}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default TaskItem;