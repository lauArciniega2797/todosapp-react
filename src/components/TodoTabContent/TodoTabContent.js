import TodoCompleted from "../TodoCompleted/TodoCompleted"
import TodoDoing from "../TodoDoing/TodoDoing"
import TodoItem from "../TodoItem/TodoItem"
import TodoList from "../TodoList/TodoList"
import TodoSearch from "../TodoSearch/TodoSearch"
import TodoCounter from "../TodoCounter/TodoCounter"
import './TodoTabContent.css'
import TodoHome from "../TodoHome/TodoHome"
import TodosLoading from "../TodosLoading/TodosLoading"
import TodosError from '../TodosError/TodosError'
import TodosEmpty from '../TodosEmpty/TodosEmpty.js'
import { TodosContext } from "../../customs/TodoContext.js"
import { useContext } from "react"

export default function TodoTabContent(){
    const { currentTab, searchingtext, defaultTodos, newTask, searchTodos, loading, error } = useContext(TodosContext);
    function renderContent() {
        let render_content = null;
        
        if(loading && currentTab != 'home'){ //cuando este cargando de un inicio
            render_content = 
                <TodoList>
                    <TodosLoading/>
                    <TodosLoading/>
                    <TodosLoading/>
                    <TodosLoading/>
                    <TodosLoading/>
                    <TodosLoading/>
                    <TodosLoading/>
                </TodoList>
        }
        
        if(error && currentTab != 'home'){
            render_content = <TodosError/>
        }
    
        if(searchingtext) {
            if (searchTodos.length > 0){
                render_content = 
                    <TodoList> {/* Componente - Lista de Tareas */}
                        {/* Todo lo que este dentro de TodoList se convierte en propiedad children. entonces la prop de TodoList es children = TotoItem */}
                        { //estos corchetes le indican a JSX que el siguiente código va a ser propio de JS
                            searchTodos.map(todo => <TodoItem text={ todo.text } completed={ todo.completed } doing={ todo.doing } key={ todo.text } />) //actionItem={ onTaskAction }
                        }
                    </TodoList>
            } else {
                render_content = <p>Task not found.</p>
            }
        }

        if(!loading && !error && !searchingtext){
            console.log('nel perro');
            switch (currentTab) {
                case 'home':
                    render_content = <TodoHome />
                    break;
                case 'doing':
                    render_content = 
                        defaultTodos.filter(e => e.doing).length == 0 ? <TodosEmpty type="doing" /> :
                        <TodoDoing> {/* Componente -  Lista de Tareas | Todo lo que este dentro de TodoDoing se convierte en propiedad children. entonces la prop de TodoDoing es children = TotoItem */}
                        { //estos corchetes le indican a JSX que el siguiente código va a ser propio de JS
                            // Al hacer todo.doing && ... estoy usando un evaluador de corto circuito. Así se le llama a la condicional (si y solo si doing es true)
                            defaultTodos.map(todo => todo.doing && <TodoItem text={ todo.text } completed={ todo.completed } doing={ todo.doing } key={ todo.text } />)
                        }
                        </TodoDoing>
                    break;
                case 'completed':
                    render_content = 
                        defaultTodos.filter(e => e.completed).length == 0 ? <TodosEmpty type="completed" /> :
                        <TodoCompleted>
                            {
                                defaultTodos.map(todo => todo.completed && <TodoItem text={ todo.text } completed={ todo.completed } doing={ todo.doing } key={ todo.text } />)
                            }
                        </TodoCompleted>
                    break;
                default:
                    render_content = 
                        (defaultTodos.length == 0 && !newTask) ? <TodosEmpty type="" /> :
                        <TodoList> {/* Componente - Lista de Tareas */}
                            {/* Todo lo que este dentro de TodoList se convierte en propiedad children. entonces la prop de TodoList es children = TotoItem */}
                            { //estos corchetes le indican a JSX que el siguiente código va a ser propio de JS
                                defaultTodos.map(todo => <TodoItem text={ todo.text } completed={ todo.completed } doing={ todo.doing } key={ todo.text } />)
                            }
                            {   newTask && <TodoItem text={ "" } completed={ false } doing={ false } key={ false } /> }
                        </TodoList> 
                    break;
            }
        } else if(currentTab === 'home') {
            render_content = <TodoHome />
        }

        return render_content
    }

    return (
        // <TodosContext.Consumer>
        // {({ currentTab, searchingtext, defaultTodos, newTask, searchTodos, loading, error }) => (
        <article id="todosContent" className={ currentTab === 'home' ? 'home' : '' }>
            <h3>{ searchingtext ? 'Resultados' : currentTab === 'completed' ? 'Completed TODOs' : currentTab === 'doing' ? 'Doing TODOs' : currentTab === 'home' ? "ARCINIEGA'S TODOs" : 'ALL TODOs' }</h3>

            {
                currentTab !== 'home' && <TodoSearch />
            }

            <div>
                { !searchingtext && (currentTab === 'completed' || currentTab === 'all' || currentTab === 'new') ? <TodoCounter total={ defaultTodos.length } completed={ defaultTodos.filter(x => x.completed).length } /> : '' }
                { renderContent() }
            </div>
        </article>
        // )}
        // </TodosContext.Consumer>
    )
}