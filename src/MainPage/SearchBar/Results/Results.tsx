import styled from "styled-components";
import {ResultsProps} from "../../../utils/types.ts";
import {BookPreview} from "./BookPreview.tsx";



export function Results({handleAdding,booksData}:ResultsProps){
    return(
        <ResultsWrapper>
            {booksData.map((book,index)=>{
                return (
                    <BookPreview key={index} bookData={book} handleAdding={handleAdding}>
                    </BookPreview>
                )
            })}
        </ResultsWrapper>
    )
}
const ResultsWrapper=styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid;
    border-top: none;
    
`;