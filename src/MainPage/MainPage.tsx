import styled from 'styled-components';
import {SearchBar} from './SearchBar/SearchBar.tsx';
import {Footer} from './Footer/Footer.tsx';
import {Collection} from './Collection/Collection.tsx'
import {useEffect, useState} from "react";
import {BookData} from "../utils/types.ts";
import {useBookDBquery} from "../hooks/bookDBquery.ts";
import {parseBooks} from "../utils/functions.ts";
import {useChromaQuery} from "../hooks/chromaQuery.ts";
import {Recommendation} from "./Recommendation/Recommendation.tsx";
export function MainPage(){
    const [collection,setCollection]=useState<BookData[]>([])
    const [searchResults,setSearchResults]=useState<BookData[]>([])
    const [query, setQuery] = useState<string>('');
    const [recommendations, setRecommendations] =useState<BookData[]>([])
    const bookQuery=useBookDBquery(query)
    const recommendationQuery=useChromaQuery(collection.map((bookData)=>{return bookData.id}))
    useEffect(() => {
        if (bookQuery.data) {
            try {
                const parsedData = parseBooks(JSON.parse(bookQuery.data));
                setSearchResults(parsedData);
            } catch (error) {
                console.error('Failed to parse book data:', error);
            }
        }
    }, [bookQuery.data]);
    useEffect(() => {
        if (recommendationQuery.data) {
            try {
                const parsedData = parseBooks(JSON.parse(recommendationQuery.data));
                setRecommendations(()=> {
                    return parsedData.slice(0,3)
                });
            } catch (error) {
                console.error('Failed to parse book data:', error);
            }
        }
    }, [recommendationQuery.data]);

    function handleSearch(bookTitle:string){
        setQuery(bookTitle)
    }

    function addToCollection(book: BookData) {
        if (!collection.some(item => item.title === book.title) && collection.length<11) {
            setCollection([...collection, book]);
        }
    }
    function removeFromCollection(book:BookData){
        const filteredCollection=collection.filter((value)=>{return book.title!==value.title})
        setCollection(filteredCollection);
    }
    return (
        <MainGrid>

            <RecommendationDiv>
                <Recommendation recommendations={recommendations} />
            </RecommendationDiv>
            <MainDiv>
                <SearchBar handleAdding={addToCollection} handleSearch={handleSearch} booksData={searchResults}/>
            </MainDiv>
            <CollectionWrapper>
                <Collection collection={collection} handleRemoval={removeFromCollection} />
            </CollectionWrapper>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </MainGrid>
    )
}
const MainGrid=styled.div`
    display: grid;
    grid-template-rows: auto auto 1fr;  
    grid-template-columns: 1fr 4fr 2fr;
    gap: 1rem; 
`;
const MainDiv=styled.div`
    grid-area: 2/2/3/3`;
const RecommendationDiv=styled.div`
    grid-row: 1/1;
    grid-column: 2/3;`
const FooterWrapper=styled.div`
    grid-area: 3/1/4/4;
`;
const CollectionWrapper=styled.div`
    grid-area: 2/3/3/4;
`;