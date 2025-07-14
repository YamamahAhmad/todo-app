import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addTask } from '../../features/tasks/tasksSlice';

const AddTaskForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addTask(data.text));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ margin: '20px', textAlign: 'center' }}>
            <input
                type="text"
                placeholder="Enter a new task"
                {...register("text", { required: "text cannot be empty" })}
                style={{ padding: '10px', width: '300px' }}
            />
            {errors.text && <p style={{ color: 'red' }}>{errors.text.message}</p>}

            <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>
                Add Task
            </button>
        </form>
    );
};

export default AddTaskForm;