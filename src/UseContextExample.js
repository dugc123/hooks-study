import React, { useContext, useState } from "react";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};
const ThemeContext = React.createContext({
    theme:themes.light,
    togger:()=>{}
})
export default ()=>{
    const [theme,setTheme] = useState(themes.light);
    return <ThemeContext.Provider value={{
                theme,
                togger:()=>{
                    setTheme(theme===themes.light?themes.dark:themes.light)
                }
            }}>
                <ThemedButton/>
            </ThemeContext.Provider>
}

const ThemedButton = ()=>{
    const context = useContext(ThemeContext);

    return <button
        style={{
            fontSize:32,
            color:context.theme.foreground,
            background:context.theme.background
        }}
        onClick={()=>context.togger()}
    >Click Me</button>
}