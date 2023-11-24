import { useState, useEffect } from 'react'

/* Los custom Hook siempre empiezan con "use" */
function useLocalStorage(itemName, itemValue) { //este es un custom Hook para guardar cualquier tipo de contenido en localStorage
    //traer los datos del localstorage
    // let data = localStorage.getItem(itemName), parsedItems
    // if(!data){
    //     localStorage.setItem(itemName, JSON.stringify(itemValue))
    //     parsedItems = itemValue
    // } else {
    //     parsedItems = JSON.parse(data)
    // }

    const [item, setItem] = useState(itemValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            try {
                let parsedItems = localStorage.getItem(itemName) ? JSON.parse(localStorage.getItem(itemName)) : itemValue
                setItem(parsedItems)

                setLoading(false)
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        }, 1000);
    }, [])

    const saveItem = newItem => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }

    // return [item, saveItem]; //esto retorna el useState de localStorage
    return {item, saveItem, loading, error} //cuando vamos a retornar mas de dos variables lo mejor es hacerlo con un objeto
}

export default useLocalStorage
