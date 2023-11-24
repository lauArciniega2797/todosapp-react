// import React from 'react'; cuando en vez de usar React.Fragment uso las etiquetas vacias o el div#App puedo evitar importar el React
import "./App.css";
import AppUI from "./AppUI";
import { TodosProvider } from "../../customs/TodoContext";

function App() { // esto es un componente. El que este escrito el nommbre de la función con mayuscula lo hace un componente de React.js
    

    return (
        <TodosProvider>
            <AppUI />
        </TodosProvider>
    )
}

// En esta sección se exportan nuestros componentes
export default App;

