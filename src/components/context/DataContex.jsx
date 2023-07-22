import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [cartCount, setCartCount] = useState(0);

    return (
        <DataContext.Provider value={{cartCount, setCartCount}}>
            {children}
        </DataContext.Provider>
    )
}