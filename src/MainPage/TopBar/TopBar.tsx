import styled from "styled-components";


export function TopBar(){
    return (
        <MainGrid>
            <About>
            </About>
        </MainGrid>
    )
}
const MainGrid=styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background-color: black`
const About=styled.div`
    grid-area: 1/5/2/6`;