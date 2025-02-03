import styled from "styled-components";
import { BookPreviewProps} from "../../../utils/types.ts";

export function BookPreview({ bookData,handleAdding } :BookPreviewProps){

    return (
        <BookWrapper>
            <img src={bookData.imgSource} />
            <div onClick={()=>handleAdding(bookData)}>
                <p>{bookData.title}</p>
                <p>by {bookData.author}</p>
            </div>
        </BookWrapper>
    )
}
const BookWrapper=styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    justify-content: center;
    justify-items: center;
    align-items: center;
    max-height: 12rem;
    width: auto;
    height: 12rem;
    overflow: hidden;
    border-bottom: black 1px solid;

    img {
        height: 10rem;
        width: auto;
        object-fit: contain; 
    }
`;
