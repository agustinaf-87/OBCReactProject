import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { LEVELS } from "../../models/level.enum";

const TaskComponent = ({ task, complete, remove}) => {
    useEffect(() => {
        console.log("created task");
        return () => {
            console.log(`task: ${task.name} is going to unmount`);
        };
    }, [task]);

    /**
     * function que retorna a badge dependiendo
     * en el nivel de la tarea
     */

    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className="mb-0">
                        <span className="badge bg-primary">{task.level}</span>
                    </h6>
                );
            case LEVELS.URGENT:
                return (
                    <h6 className="mb-0">
                        <span className="badge bg-warning">{task.level}</span>
                    </h6>
                );
            case LEVELS.BLOQUING:
                return (
                    <h6 className="mb-0">
                        <span className="badge bg-danger">{task.level}</span>
                    </h6>
                );
            default:
                break;
        }
    }

    /**
     * 
     * @returns icono dependiendo en si la tarea esta completa o no
     */

    function taskCompletedIcon(){
        if(task.completed){
            return (<i onClick={()=> complete(task)} className="bi-toggle-on task-action" style={{ color: "green" }}></i>)
        }else{
            return (<i onClick={()=> complete(task)} className="bi-toggle-off task-action" style={{ color: "grey" }}></i>)
        }
    }

    return (
        <tr className="fw-normal">
            <th>
                <span className="ms-2">{task.name}</span>
            </th>
            <td className="align-middle">
                <span>{task.description}</span>
            </td>
            <td className="align-middle">
            {/*ejecucion de la funcion para retornar un elemento badge */}
                {taskLevelBadge()}
            </td>
            <td className="align-middle">
            {/*ejecucion de la funcion para devolver icono */}
                {taskCompletedIcon()}
                <i className="bi-trash task-action" style={{ color: "tomato" }} onClick={()=> remove(task)}></i>
            </td>
        </tr>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    
};

export default TaskComponent;
