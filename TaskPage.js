import React, { useState } from 'react';
import './TaskPage.css';

const TaskPage = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('all');
    const [editTaskId, setEditTaskId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleAddTask = () => {
        if (!newTask) return;
        setTasks([...tasks, { id: Date.now(), desc: newTask, completed: false }]);
        setNewTask('');
    };

    const toggleCompletion = (taskId) => {
        setTasks(tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }));
    };

    const handleEdit = (taskId) => {
        const taskToEdit = tasks.find(task => task.id === taskId);
        if (taskToEdit) {
            setEditTaskId(taskId);
            setEditText(taskToEdit.desc);
        }
    };

    const saveEdit = () => {
        setTasks(tasks.map((task) => {
            if (task.id === editTaskId) {
                return { ...task, desc: editText };
            }
            return task;
        }));
        setEditTaskId(null);
        setEditText('');
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const calculateProgress = () => {
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.completed).length;
        return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    };

    const getFilteredTasks = () => {
        switch (filter) {
            case 'completed':
                return tasks.filter(task => task.completed);
            case 'inProgress':
                return tasks.filter(task => !task.completed);
            default:
                return tasks;
        }
    };

    // Function to determine the heading based on the filter
    const getHeading = () => {
        switch (filter) {
            case 'all':
                return 'All Tasks';
            case 'completed':
                return 'Completed Tasks';
            case 'inProgress':
                return 'In Progress Tasks';
            default:
                return 'Tasks';
        }
    };

    const progressPercentage = calculateProgress();
    const filteredTasks = getFilteredTasks();


    return (
        <div className="container">
            <h2>Task Page</h2>

            {/* Progress Bar */}
            <div className="progress-bar">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>

            <div className="progress-percentage">{progressPercentage.toFixed(0)}%</div>

            {/* Task Input */}
            <div className="task-input-container">
                <input
                    className="task_input"
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task"
                />
                <button className="task_button" onClick={handleAddTask}>Add Task</button>
            </div>

            {/* Task Filter */}
            <div className="task-filter">
                <select
                    className="select-dropdown"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">All Tasks</option>
                    <option value="completed">Completed</option>
                    <option value="inProgress">In Progress</option>
                </select>
            </div>

            {/* Dynamic Heading based on filter */}
            <h2>{getHeading()}</h2>

            {/* Task List */}
            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id} className="task-item">
                        {editTaskId === task.id ? (
                            <>
                                <input
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={saveEdit}>Save</button>
                            </>
                        ) : (
                            <>
                                <span className="task-desc">{task.desc}</span>
                                <button className="task-button" onClick={() => toggleCompletion(task.id)}>
                                    {task.completed ? 'Undo' : 'Complete'}
                                </button>
                                <button className="task-button" onClick={() => handleEdit(task.id)}>Edit</button>
                                <button className="task-button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TaskPage;