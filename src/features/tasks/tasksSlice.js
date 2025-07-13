import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: {
            reducer(state, action) {
                state.tasks.push(action.payload);
            },
            prepare(text) {
                return {
                    payload: {
                        id: nanoid(),
                        text,
                        isEdited: false,
                    },
                };
            },
        },

        deleteTask(state, action) {
            const taskId = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== taskId);
        },

        updateTask(state, action) {
            const { id, newText } = action.payload;
            const taskToUpdate = state.tasks.find(task => task.id === id);
            if (taskToUpdate) {
                taskToUpdate.text = newText;
                taskToUpdate.isEdited = true;
            }
        },

        resetEditStatus(state, action) {
            const taskId = action.payload;
            const taskToReset = state.tasks.find(task => task.id === taskId);
            if (taskToReset) {
                taskToReset.isEdited = false;
            }
        },
    },
});

export const { addTask, deleteTask, updateTask, resetEditStatus } = tasksSlice.actions;
export default tasksSlice.reducer;