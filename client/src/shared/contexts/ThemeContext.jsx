import React, { createContext, useState } from 'react';

export const themes = { 
    
    light: {
        backgroundColor: '#757FC3',
        color: '#010848'
    },
    dark: {
        backgroundColor: '#040737',
         color: '#FFFFFF'
    }
}

export const ThemeContext = createContext(themes.light);

const ThemeContextProvider = (props) => {

    const [ currentTheme, setCurrentTheme ] = useState(themes.light);

    const toggleTheme = () => {
        currentTheme === themes.light ? 
        setCurrentTheme(themes.dark):
        setCurrentTheme(themes.light)
    }

    return (
        <ThemeContext.Provider value={{currentTheme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider