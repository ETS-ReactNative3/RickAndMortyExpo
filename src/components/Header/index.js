import React from "react";

import { Image, StyleSheet, View } from "react-native";
import { Container } from "./styles";
import Title from "../../assets/title.png";

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
  logo: {
    // width: 297,
    height: 70,
  },
});

const Header = () => {
  return (
    <Container>
      <Image
        style={{
          resizeMode: "contain",
        }}
        source={Title}
      />
    </Container>
  );
};

export default Header;
