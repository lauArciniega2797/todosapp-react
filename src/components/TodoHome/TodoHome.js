export default function TodoHome() {
    return (
        <>
            <p>Hola, esta aplicación esta creada con <b>React.js</b> en su mayoria, <b>NPM</b> y <b>CSS</b> para los estilos.</p>
            <br />
            
            <p>La base de este proyecto es del curso <b>React.js</b> de <b>Platzi</b> con el profe JuanDC, <a href="https://github.com/platzi/curso-react-intro/tree/04-css">aquí</a> puedes ver el repositorio con el cual se empezó a trabajar en el curso anteriormente mencionado.</p>
            <br />
            <p>Dentro de la clase <b>"Estilos CSS en React" (5/34)</b>, se puso el reto de darle nuestros propios estilos a la app. Este es mi intento pero ya con funcionamiento.</p>
            <br />
            <br />
            
            <h3>Descripción del proyecto</h3>
            <p>La app se termino al día en que se esta redactando este escrito, se puede agrear una nueva tarea, se pueden cambiar los status de la tareas a completed, doing y en estado inicial. Se pueden eliminar las tareas y ademas se puede filtrar.</p>
            <br />
            <p>En la parte inferior de la app hay un Navbar el cual muestra el listado que se desea ver, los listados son: todas las tareas, las tareas en proceso/haciendo, las tareas completas y el home. De inicio se muestra el listado de todas las tablas</p>
            <br />
            <p>El item new del navbar tiene la función de mostrar un elemento en el listado el cual va a servir para agregar una nueva tarea al listado.</p>
            <br />
            <p>En el listado de todas las tareas y en el listado de las tareas completas hay una barra que indica cuantas tareas se han completado.</p>
            <br />
            <p>Se usa fontawesome por medio de un CDN, no lo instale con NPM</p>
            <br /><br />
            <h3>Observaciones</h3>

            <p>Al realizar el curso, en la clase 5 se puso como reto ponerle los estilos a la app. Al terminar de leer la documentación introductoria de React en donde enseñan a hacer un Tres en raya y analizar un poco el código y ver los aportes de la comunidad me anime a darle funcionamiento al proyecto.
            Cuando estuve viendo las primeras clases del curso pude notar que la sintaxis es parecida a Vue. Y algunos atributos de los elementos se declaran como en JavaScript cuando se crean elementos con document.createElement</p>
            <br />
            <p>En vue, las variables usadas para guardar el estado de la información de la web se declaran dentro de las props del componente. 
            En React se usa un hook, asi se le llama el cual es useState, el cual hace la función de las props en vue. Solo que en React para cambiar el valor de esta propiedad se usa una funcion declarada al declarar la variable de estado.</p>

            <br />
            <code>
                <span>Se declara algo así:</span><br/>

                <span style={{ color:'red' }}>import useState from React.js</span><br/>
                <span style={{ color:'red' }}>let [variable, setVariable] = useState('valor inicial de la variabla')</span>
            </code>
            <br/>
            <br />
            <p>Fue un poco complicado para mi el comprender el funcionamiento pero no imposible.</p>
            <br/>
            <p>La manera en que se le mandan variables a los componentes es similar a Vue, por esta parte, no tuve mucha complicacion para comprenderlo.</p>
            <br/>
            <p>Otra cosa que note fue que no se usa HTML tal cual, se usa JSX y cada archivo que creamos en la carpeta src se debe declarar con JS como modulos
            Dentro de los archivos JS se exporta la funcion principal. Esto se hace para despues importar los archivos con import.</p>
            <br/>
            <p>Fue retador crear esta app por mi cuenta y debo admitir que tuve ayuda de las documentaciones oficiales y algunos foros de ayuda.</p>
            <br/>
            <p>Aquí esta el <a href="laurarciniega.top/portafolio"><b>repo</b></a> de esta app.</p>
        </>
    )
}