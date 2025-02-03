import {Results} from "./Results/Results.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {SearchBarProps} from "../../utils/types.ts";



export function SearchBar({handleAdding,handleSearch,booksData}:SearchBarProps){
    const [inputValue, setInputValue] = useState<string>('');
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        if (inputValue.length > 2) {
            handleSearch(inputValue);
        }
    }, [inputValue]);

    return (
        <>
            <Title>Recommendation Engine</Title>
            <SearchBarWrapper>
                <SearchBarInput onChange={handleInputChange} placeholder={'  Wpisz Tytuł lub autora książki.'} />
            </SearchBarWrapper>

            <Results handleAdding={handleAdding} booksData={booksData}/>
        </>
    )
}
const SearchBarWrapper=styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    height: 3rem;
    border: solid black 1px;
    border-radius: 5px;
`;
const SearchBarInput = styled.input`
    width: 100%;
    padding: 0.75rem;  
    border: none;
    border-radius: 8px;  
    font-size: 1rem;
    background-color: #f5f5f5;  
    transition: all 0.2s ease-in-out;

    &:focus {
        outline: none;
        background-color: white;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); 
    }
`;
const Title=styled.div`
    font-family: "Book Antiqua",serif;
    font-size: 2rem;
    text-align: center;
    `;