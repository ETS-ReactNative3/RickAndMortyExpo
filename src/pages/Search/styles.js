import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #262c3a;
`;

export const InputContainer = styled.View`
position: absolute;
top: 170px;
  width: 389px;
  height: 50px;
  border-radius: 8px;
  /* margin-top: 100px; */
  margin-bottom: 100px;
  background: #fff;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  background: #fff;
 border-top-right-radius: 8px;
 border-bottom-right-radius: 8px;
  width: 330px;
  height: 50px;
  font-size: 20px;
  padding: 12px;
`;

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
