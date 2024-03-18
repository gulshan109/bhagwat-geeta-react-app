import { createContext, useState } from "react";

export const AstroContext = createContext();

function AstroState({ children }) {
    const [data, setData] = useState([])
    const [word, setWord] = useState('')
    const [b, setB] = useState(false);

    const DictonaryApi = async (word) => {
        const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd8f761c8b8msh68738e62c82fa2ap1d3e12jsn86e07f35f5d3',
                'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setData(result.list)

        } catch (error) {
            console.error(error);
        }
    }
    const handleChange = (e) => {
        setWord(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault();
        DictonaryApi(word)
        setB(true);
        setData([])
    }
    return (
        <AstroContext.Provider value={{ b, data, handleChange, handleClick }}>
            {children}
        </AstroContext.Provider>
    )
}

export default AstroState