import './TodoTabNavbar.css'
export default function TodoTabNavbar({ children }){
    return(
        <article id="tabnavbar">
            <ul>
                { children }
            </ul>
        </article>
    )
}