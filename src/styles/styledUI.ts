import styled, { keyframes } from "styled-components";

const loadingTransformation = keyframes`
  0%, 20% {
    transform: scale(0.5);
    opacity: 0.7;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  80%, 100% {
    transform: scale(0.5);
    opacity: 0.7;
  }
`;

const colorChange = keyframes`
  0% {
    background-color: #388E3C; /* Yellow */
  }
  25% {
    background-color: #8BC34A; /* Yellow-Orange */
  }
  50% {
    background-color: #DCE775; /* Light Yellow */
  }
  75% {
    background-color: #c8e6c9; /* Light Green */
  }
  100% {
    background-color: #8bc34a; /* Green */
  }
`;

export const LoadingDots = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  bbackground-color: #4caf50;;
  animation: ${loadingTransformation} 1.5s ease-in-out infinite,
    ${colorChange} 3s linear infinite;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }

  &:nth-child(4) {
    animation-delay: 0.6s;
  }

  &:nth-child(5) {
    animation-delay: 0.8s;
  }
`;

export const LoadingBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80vh;
`;
