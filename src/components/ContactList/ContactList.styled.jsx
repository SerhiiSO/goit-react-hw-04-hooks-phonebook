import styled from 'styled-components';

export const DivStyled = styled.div`
  text-align: center;
  width: 400px;
  margin: auto;
  padding: 20px;
`;
export const ListStyled = styled.ul`
  display: block;
`;
export const ItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const DataStyled = styled.span`
  margin-right: 10px;
  font-size: 10px;
`;

export const DeleteStyled = styled.button`
  background-color: black;
  color: white;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 3px 10px;
  transition: all 150ms linear;
  :hover {
    color: #000;
    background-color: #fff;
  }
`;
