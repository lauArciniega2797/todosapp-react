import { useContext } from 'react'
import { TodosContext } from '../../customs/TodoContext'
import './TodoSearch.css'
export default function TodoSearch(){
	// Aqui usaremos el hook usecontext en vez de TodosContext.Consumer
	const { searchingtext, handleSearch } = useContext(TodosContext)
	//usando useContext es mas "limpio" que usar el TodoscContext.Consumer

	return (
		// <TodosContext.Consumer>
			//{/* {({ searchingtext, handleSearch }) => ( */}
				<div id="search">
					<i className="fas fa-search"></i>
					<input value={ searchingtext } type="text" placeholder="Search For Task" onInput={ e => handleSearch(e.target.value) }></input>
				</div>
			// )}
		// </TodosContext.Consumer>
	)
}