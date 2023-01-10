import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/level.enum';
import TaskComponent from '../pure/task';
import "../../styles/task.scss"
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {


    const defaultTask1 = new Task("Example1", "Description1", true, LEVELS.NORMAL);
    const defaultTask2 = new Task("Example2", "Description2", false, LEVELS.URGENT);
    const defaultTask3 = new Task("Example3", "Description3", false, LEVELS.BLOQUING);

    //estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //control del ciclo de vida

    useEffect(() => {
        console.log("task state has been modified");
        setTimeout(()=>{
            setLoading(false);
        }, 2000);
        return () => {
            console.log("task list component is going to unmount")
        };
    }, [tasks]);

    function completeTask(task) {
        console.log("complete this task:", task)
        const i = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[i].completed = !tempTasks[i].completed;
        //we update state od the component and it will update the 
        //iteration of the tasks in order to show the task updated
        setTasks(tempTasks);
    }

    function deleteTask(task) {
        console.log("delete this task:", task)
        const i = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(i, 1);
        setTasks(tempTasks);
    }

    function addTask(task) {
        console.log("delete this task:", task)
        const i = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return (
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
                        return (
                            <TaskComponent
                                key={i}
                                task={task}
                                complete={completeTask}
                                remove={deleteTask}>
                            </TaskComponent>
                        )
                    }
                    )}
                </tbody>
            </table>
        )
    }

    let tasksTable = <Table></Table>

    if(tasks.length >0){
        tasksTable = <Table></Table>
    }else{
        tasksTable = (
        <div>
            <h3>There are no tasks to show</h3>
            <h4>Please, create one new task</h4>
        </div>
        )
    }

    const loadingStyle ={
        color: "grey",
        fontSize: "30px", 
        fontWeight: "bold"
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
                    <div className='card-body' data-mdb-per-scrollbar="true" style={{ position: "relative", height: "400px" }}>
                    {/* TOdo: add loading spinner */}
                        {loading ? (<p style={loadingStyle}>Loading tasks...</p>) : tasksTable}
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
        </div>
    );
};


export default TaskListComponent;
