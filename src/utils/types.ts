export interface BookData {
        id : string
        imgSource:string,
        title: string,
        author: string,
        blurb?: string,
        purchaseLink?: string,
}
export interface CollectionProps{
    collection:BookData[];
    handleRemoval:(book:BookData)=>void;
}
export interface BookPreviewProps{
    bookData:BookData,
    handleAdding:(book:BookData)=>void;
}
export interface RecommendationProps{
    recommendations:BookData[],
}
export interface RecommendationItemProps{
    bookData:BookData,
}
export interface ResultsProps{
    handleAdding: (book:BookData)=>void,
    booksData: BookData[]
}

export interface SearchBarProps{
    handleAdding: (book:BookData)=>void,
    handleSearch: (title:string)=>void
    booksData: BookData[]
}
export interface CollectionItemProps{
    bookData:BookData;
    handleRemoval:(book:BookData)=>void;
}

export type HtmlMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'TRACE' | 'CONNECT';