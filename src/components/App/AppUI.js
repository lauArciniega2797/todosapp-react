
import TodoTabNavbar from "../TodoTabNavbar/TodoTabNavbar";
import TodoTabNavbarItem from "../TodoTabNavbarItem/TodoTabNavbarItem";
import TodoTabContent from "../TodoTabContent/TodoTabContent";
import { TodosContext } from "../../customs/TodoContext";
import { useContext } from "react";
import Modal from "../Modal/Modal";
import TodoButton from "../TodoButton/TodoButton";

export default function AppUI(){
    const { currentTab, showModal, setShowModal } = useContext(TodosContext)
    return (
        // Esto no es un HTML es JSX
        // JSX nos permite juntar Javascript con XML | XML no es igual a HTML

        <> {/* Hacer esto es lo mismo que poner <React.Fragment> */}
            {/* <React.Fragment> En vez de usar lo del div#App se usa React.Fragment */}
		    {/* <div className="App"> */}
            
            {/* Importamos componentes dentro de otro componente */}
            <section>
                <nav id="menu">
                    <TodoButton label="Modal" onclick={ () => setShowModal(true) }></TodoButton>
                </nav>

                <article id="content">
                    <TodoTabContent
                    />
                </article>

                {/* <TodosContext.Consumer> en vez usar esto, usamos useContext. Mas limpio
                    { //() => () es una arrow function con un return implicito
                        ({ currentTab }) => ( */}
                <TodoTabNavbar>
                    <TodoTabNavbarItem clase={ [{i:'fas fa-home', a:( currentTab === 'home' ? 'active' : '' )}] } label="Home" redirect='home' />
                    <TodoTabNavbarItem clase={ [{i:'fas fa-list', a:( currentTab === 'all' ? 'active' : '' )}] } label="All" redirect='all' />
                    <TodoTabNavbarItem clase={ [{i:'fas fa-plus', a:( currentTab === 'new' ? 'active' : '' )}] } label="New" redirect='new' />
                    <TodoTabNavbarItem clase={ [{i:'fas fa-walking', a:( currentTab === 'doing' ? 'active' : '' )}] } label="Doing" redirect='doing' />
                    <TodoTabNavbarItem clase={ [{i:'fas fa-check-square', a:( currentTab === 'completed' ? 'active' : '' )}] } label="Completed" redirect='completed' />
                </TodoTabNavbar>
                        {/* )
                    }
                </TodosContext.Consumer> */}
                {
                    /* !searching ?
                    :
                        <article id="content">
                            <h2>Resultados</h2>
                            {
                                searchTodos.length > 0 ?
                                <TodoList>
                                    {
                                        searchTodos.map(todo =><TodoItem text={ todo.text } completed={ todo.completed } doing={ todo.doing } key={ todo.text } actionItem={ handleTaskActions } />)
                                    }
                                </TodoList>
                                :
                                <span>No se encontraron TODO's</span>
                            }
                        </article> */
                    
                }

                {
                    showModal && <Modal>
                        <p style={{ 'marginBottom':'10px' }}>Este es un elemento fuera del #root, estoy en #modal en el DOM</p>
                        <TodoButton label="Cerrar Modal" onclick={ () => setShowModal(false) } clase="primary" />
                    </Modal>
                }
            </section>

            <footer>
                <p>Main Board | Arciniega's App</p>
            </footer>
            
            {/* <TodoCounter completed="16" total="25" /> Componente - Contador de tareas realizadas */}
            {/* <TodoCounter completed="1" total="5" /> Componente - Contador de tareas realizadas */}
            {/* <TodoCounter completed="20" total="35" /> Componente - Contador de tareas realizadas */}
            {/* <TodoSearch /> Componente -  Buscador de tareas */}


			{/* <CreateTodoButton/> */}
            {/* </div> */}
            {/* </React.Fragment> */}
        </> /* Hacer esto es lo mismo que poner lo de </React.Fragment> */
    );
}