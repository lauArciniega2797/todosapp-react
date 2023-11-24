import React, { useContext } from 'react'
import './TodosEmpty.css'
import TodoButton from '../TodoButton/TodoButton.js'
// Estos imports son iconos de react-icons
import { GiNightSleep } from "react-icons/gi"
import { LuListTodo } from "react-icons/lu"
import { FaWalking } from "react-icons/fa"
import { TodosContext } from '../../customs/TodoContext.js'

export default function TodosEmpty({ type }) {
    const { setNewTask } = useContext(TodosContext)

    return (
        // <TodosContext.Consumer>
        // {({ setNewTask }) => (
        <div style={{ 'display':'flex', 'alignItems':'center', 'flexDirection':'column', 'gap':'1em' }}>
            {/* <span class="material-icons">hotel</span> */}
            {
                type === 'doing' ?
                <>
                    <FaWalking style={{ 'fontSize':'20vh', 'color':'#ededed' }}/>
                    <p style={{ 'color':'#bababa', 'fontWeight':'600', 'fontSize':'1.2em' }}>No tienes tareas en proceso. ¿Qué esperas?</p>
                </>
                : type === 'completed' ?
                <>
                    <LuListTodo style={{ 'fontSize':'20vh', 'color':'#ededed' }}/>
                    <p style={{ 'color':'#bababa', 'fontWeight':'600', 'fontSize':'1.2em' }}>Aún no has completado tareas. ¿Qué te detiene?</p>
                </>
                :
                <>
                    <GiNightSleep style={{ 'fontSize':'20vh', 'color':'#ededed' }}/>
                    <p style={{ 'color':'#bababa', 'fontWeight':'600', 'fontSize':'1.2em' }}>Arregla tu mente listando tus pendientes.</p>
                </>
            }
            
            { type === '' && <TodoButton label="Agrega TODO" clase='primary' onclick={ () => setNewTask(true) } />}
        </div>
        // )}
        // </TodosContext.Consumer>
    )
}