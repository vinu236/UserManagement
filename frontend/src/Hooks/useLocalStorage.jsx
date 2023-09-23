import { useEffect, useState } from "react"

const useLocalStorage = (key) => {
    const [value, setValue] = useState(storage());

  
    function storage(){
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    }

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}


export default useLocalStorage