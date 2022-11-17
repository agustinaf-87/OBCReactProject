import React, {useState, useEffect}from 'react';
import PropTypes from 'prop-types';
import { Task } from '../models/task.class';
import { LEVELS } from '../models/level.enum';
import TaskComponent from '../components/pure/task';
import "../styles/task.scss"


const TaskListComponent = () => {
    
    
    const defaultTask = new Task("Example", "Default Description", false, LEVELS.NORMAL);

    //estado del componente
    const [tasks, setTasks] = useState();
    const [loading, setLoading] = useState(true);
    
    //control del ciclo de vida

    useEffect(() => {
        console.log("task state has been modified")
        setLoading(false);
        return () => {
            console.log("task list component is going to unmount")
        };
    }, [tasks]);
    
    const changeCompleted =(id)=>{
        console.log("TODO: cambiar estado de una tarea")
    }
    return (
        <div>
            <div>
                <h1>
                Your Tasks:
                </h1> 
            </div>
            {/* TODO: aplicar map para renderizar tareas */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
