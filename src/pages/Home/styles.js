import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #262c3a;
`;

export const ContainerInfo = styled.View`
  width: 380px;
  height: 450px;
  background: #595d65;
  border-radius: 8px;
  padding: 25px;
  margin-top: 180px;
  border: 1px solid #777a81;
`;

export const Sinopse = styled.Text`
  font-size: 26px;
  color: #fff;
  padding: 10px 10px 20px;
`;

export const Info = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

export const ButtonNavigation = styled.TouchableOpacity`
  width: 380px;
  height: 55px;
  background: #6fbe6c;
  border-radius: 8px;
  margin-top: 10px;
  padding: 12px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  color: #2F3646;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
`;
