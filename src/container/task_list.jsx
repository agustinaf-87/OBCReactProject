import React, {useState, useEffect}from 'react';
import PropTypes from 'prop-types';
import { Task } from '../models/task.class';
import { LEVELS } from '../models/level.enum';
import TaskComponent from '../components/pure/task';
import "../styles/task.scss"
import TaskForm from '../components/pure/forms/taskForm';


const TaskListComponent = () => {
    
    
    const defaultTask1 = new Task("Example1", "Description1", true, LEVELS.NORMAL);
    const defaultTask2 = new Task("Example2", "Description2", false, LEVELS.URGENT);
    const defaultTask3 = new Task("Example3", "Description3", false, LEVELS.BLOQUING);

    //estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
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
                            {tasks.map((task, i) => {
                                return(
                                        <TaskComponent
                                            key={i} 
                                            task={task}>
                                        </TaskComponent>
                                )
                            }
                        )}
                        </tbody>
                    </table>
                </div>
                <TaskForm></TaskForm>
            </div>
            </div>
        </div>
    );
};


export default TaskListComponent;
