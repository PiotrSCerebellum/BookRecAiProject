import styled, { keyframes } from "styled-components";


export function AnimatedBackground() {
    return (
        <Wrapper />
    );
}

const scrollAnimation = keyframes`
  100% {
    background-position: 0px -400%;
  }
`;


const Wrapper = styled.div`
  animation: ${scrollAnimation} 100s linear infinite;
  background: url("https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"),
    #111111;
  color: #eee;
  height: 100vh;
  min-width: 360px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  perspective-origin: 50% 50%;

  @media (prefers-reduced-motion) {
    animation: ${scrollAnimation} 800s linear infinite; /* Slower animation for accessibility */
  }
`;

