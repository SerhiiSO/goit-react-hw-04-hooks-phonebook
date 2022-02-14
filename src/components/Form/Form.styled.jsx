import styled from 'styled-components';

export const FormStyled = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 15px;
`;
// export const FieldStyled = styled.div`
//   display: block;
//   margin-bottom: 10px;
//   align-items: center;
// `;

export const LabelStyled = styled.label`
  display: inline-block;
  text-align: center;
  font-weight: 700;
  font-size: 10px;
  width: 90px;
  margin-top: 10px;
  margin-right: 10px;
`;

export const SubmitBtnStyled = styled.button`
  position: relative;
  border: 1px solid #000000;

  margin-top: 10px;
  background-color: #000000;
  color: white;
  padding: 5px 15px;
  border-radius: 10px;
  transition: all n linear;
  :hover,
  :focus {
    background-color: inherit;
    color: #000000;
  }
`;

export const InputStyled = styled.input`
  margin-top: 5px;
`;
