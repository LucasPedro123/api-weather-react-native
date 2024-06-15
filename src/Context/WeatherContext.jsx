import { createContext, useState } from "react";


export const WeatherContext = createContext();

export function WeatherContextProvider ({children}){
    const [WeatherSearch, setWeatherSearch] = useState();

    return(
        <WeatherContext.Provider value={{WeatherSearch, setWeatherSearch}}>
            {children}
        </WeatherContext.Provider>

    )
}