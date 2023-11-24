import { useContext } from "react";
import { TodosContext } from "../../customs/TodoContext";

export default function TodoTabNavbarItem({ clase, redirect, label }){
    const { setTab, autoScrollTodosList, setNewTask, setSearchingText, newTask } = useContext(TodosContext)
    function newTaskFn() {
        setNewTask(true); 
        setSearchingText("");
        setTimeout(() => { autoScrollTodosList() }, 100)

        return
    }

    return (
        // <TodosContext.Consumer>
        // {({ setTab, autoScrollTodosList, setNewTask, setSearchingText, newTask }) => (
        <li>
            <a id={ ((clase[0].i).split(' ')[1]).split('fa-')[1] } className={ 'tab-item ' + clase[0].a } href={ redirect } onClick={ (e) => {
                e.preventDefault(); 
                redirect === 'new' && newTaskFn();
                (newTask && redirect != 'new') && setNewTask(false);
                setTab(redirect);
            }}>
                <i className={ clase[0].i }></i>
                <span>{ label }</span>
            </a>
        </li>
        // )}
        // </TodosContext.Consumer>
    )
}