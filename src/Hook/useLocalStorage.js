import { useEffect, useState } from "react";

const prefix = '.&Code';

function useLocalStorage(key, initial){
    const combinedKey = prefix + key;

    const [value, setValue] = useState(()=>{
        const storedValue = localStorage.getItem(combinedKey);

        if(storedValue!==null){
            return JSON.parse(storedValue);
        }

        if(typeof initial === 'function'){
            return initial();
        }
        else{
            return initial;
        }
    })

    useEffect(()=>{
        localStorage.setItem(combinedKey, JSON.stringify(value));
    }, [combinedKey, value])

    return [value, setValue]
}

export default useLocalStorage;