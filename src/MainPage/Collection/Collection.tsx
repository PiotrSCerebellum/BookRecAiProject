import styled from "styled-components";
import {CollectionProps} from "../../utils/types.ts";
import {CollectionItem} from "./CollectionItem.tsx";



export function Collection({collection,handleRemoval}:CollectionProps){

    return(
        <CollectionWrapper>
            <CollectionTitle>Collection</CollectionTitle>
            {collection.map((book,index)=>{
                return (
                    <CollectionItem key={index} handleRemoval={handleRemoval} bookData={book}>
                    </CollectionItem>
                )
            })}
        </CollectionWrapper>
    )
}
const CollectionWrapper=styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;
const CollectionTitle=styled.h3`
    padding-left: 1rem;
    font-family: "Book Antiqua",serif;`;