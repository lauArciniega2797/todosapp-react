import './TodoList.css'
// Comunicación entre componentes por medio de props
export default function TodoList({ children }){
	return (
        <ul>
            { children }{/* Para que los componentes TodoItems se renderizen aquí, vamos a poner props.children */}
        </ul>
	)
}