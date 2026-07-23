'use client';

import { createContext, useContext, useState } from "react";

const DBContext = createContext();

export const DBProvider = ({ children }) => {

    const [ projects, setProjects ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const fetchProjects = async () => {
        try {
            const response = await fetch(`/api/projects`)
            if (!response.ok) {
                throw new Error('Failed to fetch projects');
            }
            const data = await response.json();
            if (!data.success) throw new Error( data.message || "Hubo un error al realizar la petición");
                setProjects(data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const contextValue = {
        projects,
        loading,
        fetchProjects
    }

    return (
        <DBContext.Provider value={contextValue}>{children}</DBContext.Provider>
    )

}

export const useProjects = () => useContext(DBContext);