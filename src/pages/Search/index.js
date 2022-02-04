import React from "react";
import { Text, View } from "react-native";

import {
  Container,
  IconContainer,
  Input,
  InputContainer,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
const Search = () => {
  return (
    <Container>
      {/* <KeyboardAvoidingView
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
      > */}
        <InputContainer>
          <IconContainer>
            <Ionicons name="search" size={24} color="#999" />
          </IconContainer>
          <Input placeholder="Pesquisar" />
        </InputContainer>
      {/* </KeyboardAvoidingView> */}
    </Container>
  );
};

export default Search;
