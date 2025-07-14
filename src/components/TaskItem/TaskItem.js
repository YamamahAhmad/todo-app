import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask, resetEditStatus } from '../../features/tasks/tasksSlice';
import styles from './TaskItem.module.css';

const TaskItem = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const [isHighlighted, setIsHighlighted] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (task.isEdited) {
            setIsHighlighted(true);
            dispatch(resetEditStatus(task.id));
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

    return (
        <div className={`${styles.taskItem} ${isHighlighted ? styles.highlight : ''}`}>
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