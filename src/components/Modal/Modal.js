import { useContext } from 'react'
import { createPortal } from 'react-dom'
import { TodosContext } from '../../customs/TodoContext'
import styles from './Modal.module.css'

export default function Modal({ children }) {
    const { defaultTodos } = useContext(TodosContext)
    return (
        createPortal(
            <div className={ styles.modal }>
                { children }
                <small>Total todos: { defaultTodos.length }</small>
            </div>,
            document.getElementById('modal')
        )
    )
}