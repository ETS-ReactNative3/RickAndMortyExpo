import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Divider } from "react-native-elements";

import {
  CardInfo,
  Container,
  HeaderCard,
  IconContainer,
  TitleContainer,
  Title,
  TitleEpisode,
  CharactersList,
  CharactersContainer,
  InfosContainer,
  TitleInfo,
  Name,
  DescriptionContainer,
  DescriptionTitle,
  Description,
  Status,
} from "./styles";
import * as Font from "expo-font";
import axios from "axios";

const CharPerEpisode = (props) => {
  const [chars, setChars] = useState([]);
  const [visible, setVisible] = useState(true);
  const navigation = useNavigation();

  const urlCharacters = "https://rickandmortyapi.com/api/character";

  const ArrayChar = () => {
    const prop = props.route.params.state.characters;

    return prop.map((item) => {
      return item.substring(item.lastIndexOf("/") + 1);
    });
  };

  const getChars = async () => {
    let string = "";

    ArrayChar().map((num) => (string = string + num + ","));

    const url = urlCharacters + "/" + string;

    await axios
      .get(url)
      .then(({ data }) => setChars(data.map((item) => item)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getChars();
  }, []);

  const handleClose = () => {
    navigation.navigate("Episodes");
  };

  const [loaded] = Font.useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Audiowide-Regular": require("../../assets/fonts/Audiowide-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <>
      <Container>
        <CardInfo>
          <HeaderCard>
            <TitleContainer>
              <Title style={{ fontFamily: "Audiowide-Regular" }}>
                Characters in
              </Title>

              <TitleEpisode style={{ fontFamily: "Audiowide-Regular" }}>
                {props.route.params.state.name}
              </TitleEpisode>
              <Title style={{ fontFamily: "Audiowide-Regular" }}>episode</Title>
            </TitleContainer>
            <IconContainer>
              <Ionicons
                onPress={handleClose}
                name="close"
                size={25}
                color="#fff"
              />
            </IconContainer>
          </HeaderCard>

          <CharactersList
            data={chars}
            keyExtractor={(item) => item.id}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{ height: 80 }}
            renderItem={({ item }) => (
              <>
                {!item ? (
                  <ActivityIndicator size="large" color="#00ff00" />
                ) : (
                  <>
                    <CharactersContainer>
                      <Avatar size={150} rounded source={{ uri: item.image }} />
                      <InfosContainer>
                        <Name style={{ fontFamily: "Audiowide-Regular" }}>
                          {item.name}
                        </Name>
                        <DescriptionContainer>
                          <DescriptionTitle
                            style={{ fontFamily: "Audiowide-Regular" }}
                          >
                            Specie:
                          </DescriptionTitle>
                          <Description
                            style={{ fontFamily: "Poppins-Regular" }}
                          >
                            {item.species}
                          </Description>
                        </DescriptionContainer>
                        <DescriptionContainer>
                          <DescriptionTitle
                            style={{ fontFamily: "Audiowide-Regular" }}
                          >
                            Status:
                          </DescriptionTitle>
                          {item.status === "Alive" && (
                            <>
                              <Status>🟢</Status>
                              <Description
                                style={{ fontFamily: "Poppins-Regular" }}
                              >
                                {item.status}
                              </Description>
                            </>
                          )}
                          {item.status === "Dead" && (
                            <>
                              <Status>🔴</Status>
                              <Description
                                style={{ fontFamily: "Poppins-Regular" }}
                              >
                                {item.status}
                              </Description>
                            </>
                          )}
                          {item.status === "unknown" && (
                            <>
                              <Status>⚫</Status>
                              <Description
                                style={{ fontFamily: "Poppins-Regular" }}
                              >
                                {item.status}
                              </Description>
                            </>
                          )}
                        </DescriptionContainer>
                      </InfosContainer>
                    </CharactersContainer>
                    <Divider color={"#777a81"} />
                  </>
                )}
              </>
            )}
          />
        </CardInfo>
      </Container>
    </>
  );
};

export default CharPerEpisode;
