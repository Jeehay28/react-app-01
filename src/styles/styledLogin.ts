import styled from "styled-components";

export const LoginForm = styled.form`

  padding: 50px 50px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #a7c5ae; /* Light green border */
    border-radius: 3px;
    margin-bottom: 10px;
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #4caf50; /* Green button */
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 15px;
  }

  button:hover {
    background-color: #388e3c; /* Darker green on hover */
  }

  p {
    margin-top: 15px;
    text-align: center;
  }

  p a {
    color: #4caf50; /* Green link */
    text-decoration: none;
  }

  p a:hover {
    text-decoration: underline;
  }
`;

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
