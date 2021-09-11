import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  grid-area: table;
  background-color: #f7f8fd;
  display: flex;
  justify-content: center;
`;

export const Section = styled.section`
`;

export const MyTable = styled.table`
  color: #6c6e71;
  border-radius: 10px;
`;

export const TableBody = styled.tbody`
  
  text-align: center;
`;

export const TableHeader = styled.th`
  padding: 20px;
`;

export const TableRow = styled.tr`
  min-height: 200px;
  width: 50vw;
  margin: 100px auto;
  background: #ffffffd1;
`;

export const TableData = styled.td`
`;

export const Button = styled.button`
  background-color: #c11642;
  margin-top: 15px;
  padding: 8px;
  border-radius: 5px;
  color: white;
  font-weight: 400;
  :hover {
    background-color: #f0265a;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
`;