import styled from "styled-components";
import {CollectionItemProps} from "../../utils/types.ts";
import CloseIcon from '@mui/icons-material/Close';

export function CollectionItem({ bookData, handleRemoval }: CollectionItemProps) {
    return (
        <BookWrapper onClick={() => handleRemoval(bookData)}>
            <img src={bookData.imgSource} alt={bookData.title} />

            <TextContainer>
                <p>{bookData.title}</p>
                <p>by {bookData.author}</p>
            </TextContainer>

            <CloseIcon />
        </BookWrapper>
    );
}

const BookWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Adjust spacing between elements */
    max-height: 6rem;
    width: auto;
    height: 6rem;
    padding-left: 1rem;
    cursor: pointer;

    img {
        height: 5rem;
        width: auto;
        object-fit: contain;
    }
`;

const TextContainer = styled.div`
    flex-grow: 1; /* Takes available space between image and close icon */
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
