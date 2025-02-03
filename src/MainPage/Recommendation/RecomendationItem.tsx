import { useState } from "react";
import styled from "styled-components";
import {RecommendationItemProps} from "../../utils/types.ts";

export function RecommendationItem({ bookData }: RecommendationItemProps) {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <BookWrapper
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <img src={bookData.imgSource} alt={bookData.title} />

            <div>
                <p>{bookData.title}</p>
                <p>by {bookData.author}</p>
            </div>

            {bookData.blurb && showTooltip && (
                <Tooltip>{bookData.blurb}</Tooltip>
            )}
        </BookWrapper>
    );
}

const BookWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    justify-content: flex-start;
    justify-items: end;
    align-items: center;
    max-height: 16rem;
    width: auto;
    cursor: pointer;

    img {
        padding: 0.5rem;
        width: auto;
        object-fit: contain;
    }
`;

const Tooltip = styled.div`
    position: absolute;
    bottom: -100%;
    left: 100%;
    //transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
    font-size: 0.9rem;
    z-index: 100;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    width: 20rem;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
`;
