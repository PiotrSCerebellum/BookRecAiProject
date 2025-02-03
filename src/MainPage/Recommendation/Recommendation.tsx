import styled from "styled-components";
import { RecommendationProps} from "../../utils/types.ts";
import {RecommendationItem} from "./RecomendationItem.tsx";

export function Recommendation({ recommendations } : RecommendationProps){
    if (recommendations) {
        return (
            <BookWrapper>

                {recommendations.map((book, index) => {
                    return (
                        <RecommendationItem key={index} bookData={book}>
                        </RecommendationItem>
                    )
                })}
            </BookWrapper>
        )
    }else {
        return(
            <>
                <p> Fill collection with books to see recommendations</p>
            </>
        )
    }
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
    border-bottom: black 1px solid;

    img {
        height: 10rem;
        width: auto;
        object-fit: contain; 
    }
`;
