// Este es para crear un contexto en el proyecto y evitar el props drilling
import React, { createContext, useState } from 'react'
import useLocalStorage from "./useLocalStorage";

const TodosContext = createContext()

function TodosProvider({ children }){
    // RENDERIZAR ARRAYS
    const {
        item: defaultTodos,
        saveItem: setTodo,
        loading,
        error
    } = useLocalStorage('TODOS', []) //el mismo array principal pero con un custom hook que retorna un objeto en vez de un array. El del array es el ejemplo de abajo
    // let [defaultTodos, setTodo] = useLocalStorage('TODOS', []) //el mismo array principal pero con un custom Hook para el localstorage
    //let [defaultTodos, setTodo] = useState(localStorage.getItem('TODOS') ? JSON.parse(localStorage.getItem('TODOS')) : []) /* Este es el array principal, esta definido aquí porque todos los "componentes/elementos" lo tienen en comun */
    let [searchTodos, setSearchedTodos] = useState([]) /* Un array que ayuda para que se muestren las tareas filtradas, no puedo modificar el array principal porque es pierde la data */
    let [currentTab, setTab] = useState('all') /* Para saber cual tab se esta viendo */
    // let [searching, setSearching] = useState(false) /* Este es para mostrar la tabla de contenido o el listado de tasks filtradas */
    let [searchingtext, setSearchingText] = useState('') /* Este es para la busqueda de tareas. El TodoSearch y el TodoForm lo usan por eso esta en general, pudo haber estado solo en TodoSearch */
    let [newTask, setNewTask] = useState(false)
    let [showModal, setShowModal] = useState(false)

    // EJEMPLO PARA EL USEEFFECT
    /* console.log('Log 1');
    useEffect(() => {
        // Este esta encapsulado, se va a ejecutar despues de "Log 3"
        console.log('Log 2');
    //}, []) //este array vacio indica que solo se ejecuta una vez
    }, [defaultTodos]) //este le indica que solo cuando cambie el array de Todos este se va a ejecutar
    console.log('Log 3'); */

    function handleArray(obj) {
        if(defaultTodos.find(x => x.text === obj.text)){
            return
        }
        // setSearching(false)
        setSearchedTodos([])
        setSearchingText('')
        let elementos = defaultTodos.map(x => Object.assign({}, x))
        elementos.push(obj)
        setTodo(elementos);
        // handleLocalStroage(elementos)
        setNewTask(false);
    }
    
    function handleTaskActions(action, task, newDescr) {
        /* Función que permite hacer algo con el array principal, puede: */
        let elementos = defaultTodos.map(x => Object.assign({}, x))
        
        switch(action){
            case 'insert': /* Con este case, el componente TodoForm desaparece. */
                // Batalle con esta función. Resulta que yo estaba trabajando directamente con el array defaultTodos, pero no usaba la variable de estado.
                /* 
                    Esta función, al parecer habia olvidado como funciona, declara los elementos al inicio, para que se trabaje con ellos en cualquiera de los case del switch
                    para que al terminar de usarlos se agregue al final de esta función.
                    Si declaraba de nuevo la variable elementos y asignaba lo nuevo desde el case insert entonces si se actualizaba pero luego se iba a perder esa actualizacion
                    porque lo que se actualizaba era lo que esta aquí adentro dl case, no el elementos declarado afuera de los case... y como al final se re asignaba valor al
                    default todos por eso no se reflejaba el cambio. Vamos empezando, tu relax y aprende de las variables de estado.
                    Por eso tampoco pude llamar a la función handleArray. Aunque si puedo hacer todo lo que dije que no puedo, solo añado un return al final del case insert y listo.
                    La teoria del return funciono. Lo dejare así para reutilizar código.
                */
                if(newDescr){
                    handleArray({ completed: false, doing:false, text: newDescr })
                    // elementos.push({ completed: false, doing:false, text: newDescr })
                }
                setNewTask(false)
                setTab('all')
                return /* Este return es para que no se ejecute nada despues de esta linea de la funcion en cuestión */
                break;
            case 'del':/* Eliminar una tarea */
                let indice = elementos.findIndex(x => x.text === task)
                elementos.splice(indice, 1)
                break;
            case 'edit':/* Editar una tarea */
                elementos.find(x => x.text === task).text = newDescr
                break;
            case 'complet':/* Marcar como completada una tarea */
                elementos.find(x => x.text === task).completed = true
                elementos.find(x => x.text === task).doing = false
                break;
            case 'assing': /* Enviar la tarea a haciendo */
                elementos.find(x => x.text === task).doing = true
                elementos.find(x => x.text === task).completed = false
                break;
            default:break;
        }
    
        setTodo(elementos) /* Vuelve a instanciar el array principal */
        // handleLocalStroage(elementos)
    }
    
    function handleSearch(search) {
        /* Función que permite filtrar los arrays */
        setSearchedTodos([])/* Instancia el array de busqueda en ceros */
        setSearchingText(search)/* indica el texto a buscar */
        if(!search){
            // setSearching(false)/* Indica que ya no se esta buscando */
            return
        }
        let elementos = defaultTodos.map(x => Object.assign({}, x))/* Crea una copia del array principal */
        search = (search).toLowerCase()
        // if(elementos.filter(x => x.text.toLocaleLowerCase().includes(search)).length > 0){
        elementos = elementos.filter(x => x.text.toLocaleLowerCase().includes(search))
        setSearchedTodos(elementos)/* Intancia el array de busqueda con nuevos valores */

        console.log(searchTodos);
        // }
    
        // setSearching(true)/* Indica que se esta buscando */
    }
    
    function autoScrollTodosList(){
        let listado = document.querySelector('#todosContent ul');
        // console.log(listado.scrollHeight);
        // console.log(listado.offsetHeight);
        if(listado.scrollHeight > listado.offsetHeight) {
            // console.log('entre al autoscroll');
            setTimeout(() => {
                listado.scrollTop = listado.scrollHeight
            }, 10);
        }
    }

    return (
        <TodosContext.Provider value={{
            loading,
            error,
            searchTodos,
            searchingtext,
            defaultTodos,
            currentTab,
            handleTaskActions,
            handleSearch,
            newTask,
            setTab,
            setNewTask,
            autoScrollTodosList,
            setSearchingText,
            showModal, 
            setShowModal
        }}>
            { children }
        </TodosContext.Provider>
    )
}

export { TodosContext, TodosProvider }