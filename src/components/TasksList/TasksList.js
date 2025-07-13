import { useSelector } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem';


const TasksList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);

    return (
        <div style={{ margin: '20px' }}>
            {tasks.length > 0 ? (
                tasks.map(task => <TaskItem key={task.id} task={task} />)
            ) : (
                <p style={{ textAlign: 'center' }}>No tasks</p>
            )}
        </div>
    );
};

export default TasksList;