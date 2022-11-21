import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { LEVELS } from "../../models/level.enum";

const TaskComponent = ({ task }) => {
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
            return (<i className="bi-toggle-on" style={{ color: "green" }}></i>)
        }else{
            return (<i className="bi-toggle-off" style={{ color: "grey" }}></i>)
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
                <i className="bi-trash" style={{ color: "tomato" }}></i>
            </td>
        </tr>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
