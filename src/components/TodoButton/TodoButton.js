import './TodoButton.css'

export default function TodoButton({ label, onclick, clase }) {
    clase = Array.isArray(clase) ? clase.join(' ') : clase

    if(Array.isArray(label) && label[0] === 'i'){
        return <button className={ clase } onClick={ onclick }>
                <i className={ label[1] }></i>
                </button>
    }
    else {
        return (
            <button className={ clase } onClick={ onclick }>{ label }</button>
        )
    }
    
}