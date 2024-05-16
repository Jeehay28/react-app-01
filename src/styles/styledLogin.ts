import styled from "styled-components";

export const LoginForm = styled.form`
  background-color: #fff;
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
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px; /* Add margin-bottom here */
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #0079c1;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 15px; /* Add margin-bottom here */
  }

  button:hover {
    background-color: #005a8b;
  }

  p {
    margin-top: 15px;
    text-align: center;
  }

  p a {
    color: #0079c1;
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
