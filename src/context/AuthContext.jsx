import { createContext, useEffect, useState } from "react";

const UsersContext = createContext()

export const UserProvider = ({children}) => {
    const [people, setPeople] = useState([])

    const fetchPeople = async () => {
        const res = await fetch('https://dummyjson.com/users')
        const info = await res.json()
        console.log(info)
        setPeople(info)
    }
    useEffect(() => {
     fetchPeople()
    }, [])
    
    const contextValue = {
        people,
    }
    return <UsersContext.Provider value={contextValue}>{children}</UsersContext.Provider>
}

export default UsersContext;