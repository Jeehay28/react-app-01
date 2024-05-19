import styled from "styled-components";

export const Info = styled.div`
  color: rgb(24, 24, 24);
  border: 1px solid #f4f4f4;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 80px;
  max-width: 600px;

  div {
    margin-bottom: 10px;
    padding: 5px 10px;
  }
  
`;

export const Images = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  max-width: 600px;
  padding: 10px 10px;

  img {
    width: 30%;
    height: auto;
    border-radius: 5px;
  }
`;

export const FilterBox = styled.input`
  margin: 10px 10px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &::placeholder {
    color: #aaa;
    font-size: 0.8rem;
  }
`;

export const ButtonGreen = styled.button`
  padding: 5px 10px;
  background-color: transparent; /* Transparent background */
  color: #4caf50; /* Green text color */
  border: 2px solid #4caf50; /* Green border */
  border-radius: 5px;

  
`;

export const ButtonRed = styled.button`
  padding: 5px 10px;
  background-color: transparent; /* Transparent background */
  color: #ff0000; /* Red text color */
  border: 2px solid #ff0000; /* Green border */
  border-radius: 5px;

  
`;