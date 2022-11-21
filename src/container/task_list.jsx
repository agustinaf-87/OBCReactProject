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
            <div className='col-12'>
            <div className='card'>
                {/*Card Header (title)*/}
                <div className='card-header p-3'>
                    <h5>
                        Your Tasks:
                    </h5>
                </div>
                {/*Card Body (content)*/}
                <div className='card-body' data-mdb-per-scrollbar="true" style={{position: "relative", height:"400px"}}>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Priority</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*TODO: iterar sobre una lista de tareas*/}
                            <TaskComponent task={defaultTask}></TaskComponent>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
};


export default TaskListComponent;
