import styled from "styled-components";

export const Container = styled.div`
  grid-area: form;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

export const Section = styled.section``;

export const MyForm = styled.form`
  padding: 30px;
  display: flex;
  flex-direction: column;
  color: #6c6e71;
`;

export const Label = styled.label`
  padding: 7px 0px 7px;
`;

export const Input = styled.input`
  padding: 8px;
  width: 300px;
  border: 1px solid #1658c1;
  border-radius: 5px;
  :hover {
    border: 1px solid #95b3e3;
  }
`;

export const Button = styled.button`
  background-color: #1658c1;
  margin-top: 15px;
  padding: 8px;
  border-radius: 5px;
  color: white;
  font-weight: 400;
  :hover {
    background-color: #1689d5;
  }
`;