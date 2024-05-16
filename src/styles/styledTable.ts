import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.8em;
  font-family: sans-serif;
//   max-width: 90%;
//   width: fit-content;
  width : 90%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  thead tr {
    background-color: #0079c1;
    color: #fff;
  }

  th,
  td {
    padding: 1rem 1rem;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f2f2f2;
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid #0079c1;
  }
`;
