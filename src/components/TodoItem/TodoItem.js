import { useContext, useState } from "react";
import TodoButton from "../TodoButton/TodoButton";
import './TodoItem.css';
import { TodosContext } from "../../customs/TodoContext";

// Hay que exportar también este componente
export default function TodoItem({ text, completed, doing }) { // empieza en mayuscula, es un componente de React
    const { handleTaskActions, newTask, setNewTask } = useContext(TodosContext) //este en vez de TodosContext.Consumer
    let [editing, setEditing] = useState(false)
    let [newText, setNewText] = useState(text)

    function handleDblTap () {
        let lastTap = 0;
        let timeout;
        return function detectDoubleTap(event) {
            const curTime = new Date().getTime();
            const tapLen = curTime - lastTap;
            
            if (tapLen < 500 && tapLen > 0) {
                event.preventDefault();
            } else {
                clearTimeout(timeout);
            }
            lastTap = curTime;
        };
    }

    function helperNewText() {
        if (editing) {
            if(!newText) {
                setNewText(text)
                setEditing(false)
                return
            }
            handleTaskActions('edit', text, newText); 
            setEditing(false)
        }
        if(newTask) {
            handleTaskActions('insert', '', newText)
            setNewTask(false)
        }
    }

    return (
        // <TodosContext.Consumer>
        // {({ handleTaskActions, newTask, setNewTask }) => ( //en vez de esto usamos useContext
        <li>
            {/* Esto es un elemento de React, no componente */}
            <div className={ (newTask ? 'nuevaTarea' : '') + ' todo-item' }>
                <span className={ completed ? ' completed ' : doing ? ' doing ' : '' }>{ completed ? 'Completed!' : doing ? 'Doing!' : 'TODO' }</span>
                <div>
                    <TodoButton clase="phantom" label={ ['i', 'fas fa-check-circle' + (completed ? ' completed ' : '') ] } onclick={ () => handleTaskActions('complet', text) } />
                    {/* <span className={ completed ? 'active' : '' } onClick={ () => handleTaskActions('complet', text) }><i className="fas fa-check-circle"></i></span> */}
                    {
                        editing || text === "" ?
                            // <textarea value={ text } onChange={ e => {text = e.target.value; handleTaskActions('edit', text, e.target.value); setEditing(editing = false)} }></textarea> 
                            <textarea onBlur={ () => setEditing(false) } placeholder={ newTask ? 'Agrega una nueva tarea' : '' } autoFocus={ true } value={ newText ? newText : '' } onInput={ (e) => setNewText(e.target.value) } onKeyDown={ e => { e.key === 'Enter' && helperNewText() } }></textarea>
                        :
                            <p onDoubleClick={ () => setEditing(true) } onTouchEnd={ () => handleDblTap() }>{ newText }</p>
                    }
                </div>
                <div>
                    {
                        newTask && text === "" ?
                            <>
                                <TodoButton label="Agregar tarea" clase="primary" onclick={ () => helperNewText()  } />
                                <TodoButton label="Cancelar" clase="secondary" onclick={ () => { setNewTask(false); handleTaskActions('insert') } } />
                            </>
                        :
                            <>
                                <TodoButton label="Eliminar" clase="secondary" onclick={ () => handleTaskActions('del', text) } />
                                <TodoButton label="Hacer" clase="secondary" onclick={ () => handleTaskActions('assing', text)  } />{/* label={ ['i', "fas fa-user-check"] } */}
                            </>
                    }
                </div>
            </div>
        </li>
        // )}
        // </TodosContext.Consumer>
    );
}