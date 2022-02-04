import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

import {
  About,
  CardInfo,
  Container,
  Divider,
  ImageContainer,
  Info,
  InfoAbout,
  InfoLocation,
  InfosContainer,
  InfoStatus,
  LastLocation,
  Location,
  Status,
  Title,
  TitleContainer,
} from "./styles";
import * as Font from "expo-font";
import { Avatar } from "react-native-elements";

const CharactersMap = ({ characters = [] }) => {
  const [loaded] = Font.useFonts({
    // "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Audiowide-Regular": require("../../assets/fonts/Audiowide-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Container>
      <View style={{ marginTop: 150 }} />
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{ height: 10 }}
        renderItem={({ item }) => (
          <CardInfo >
            <ImageContainer>
              <Avatar
                rounded
                size={280}
                source={{ uri: item.image }}
                containerStyle={{
                  borderColor: "#777a81",
                  borderStyle: "solid",
                  borderWidth: 2,
                }}
              />
            </ImageContainer>
            <Divider />
            <TitleContainer>
              <Title style={{ fontFamily: "Audiowide-Regular" }}>
                {item.name}
              </Title>
            </TitleContainer>
            <InfosContainer>
              {item.status === "Alive" && (
                <InfoStatus>
                  <Status style={{ fontFamily: "Poppins-Regular" }}>🟢 </Status>
                  <Info style={{ fontFamily: "Poppins-Regular" }}>
                    {item.status} - {item.species}
                  </Info>
                </InfoStatus>
              )}
              {item.status === "Dead" && (
                <InfoStatus>
                  <Status style={{ fontFamily: "Poppins-Regular" }}>🔴 </Status>
                  <Info style={{ fontFamily: "Poppins-Regular" }}>
                    {item.status} - {item.species}
                  </Info>
                </InfoStatus>
              )}
              {item.status === "unknown" && (
                <InfoStatus>
                  <Status style={{ fontFamily: "Poppins-Regular" }}>⚫ </Status>
                  <Info style={{ fontFamily: "Poppins-Regular" }}>
                    {item.status} - {item.species}
                  </Info>
                </InfoStatus>
              )}
              <InfoAbout>
                <About style={{ fontFamily: "Poppins-SemiBold" }}>
                  Gender:
                </About>
                <About style={{ fontFamily: "Poppins-Regular" }}>
                  {item.gender}
                </About>
              </InfoAbout>
              <InfoAbout>
                <About style={{ fontFamily: "Poppins-SemiBold" }}>
                  Last known location:
                </About>
                <About style={{ fontFamily: "Poppins-Regular" }}>
                  {item.location.name}
                </About>
              </InfoAbout>

              <InfoAbout>
                <About style={{ fontFamily: "Poppins-SemiBold" }}>
                  First seen in:
                </About>
                <About style={{ fontFamily: "Poppins-Regular" }}>
                  {item.origin.name}
                </About>
              </InfoAbout>
            </InfosContainer>
          </CardInfo>
        )}
      />
    </Container>
  );
};

export default CharactersMap;
