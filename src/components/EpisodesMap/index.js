import React, { useCallback, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import {
  About,
  ButtonFavorite,
  ButtonInfoEp,
  ButtonWatchedEp,
  CardInfo,
  Container,
  FooterCard,
  HeaderCard,
  IconContainer,
  InfoAbout,
  InfosContainer,
  Title,
  TitleContainer,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { useEffect } from "react";
import CharPerEpisode from "../CharPerEpisode";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, clickFavorite } from "../../store/actions";
import { setFavorite } from "../../store/actions";
import { removeFavorite } from "../../store/actions";

const Episodes = ({ episodes = [] }) => {
  const navigation = useNavigation();
  // const { favoritted } = useSelector((state) => state.favoritted);
  // console.log(favoritted)
  const dispatch = useDispatch();
  const [favoritted, setFavoritted] = useState(false);
  const [loaded] = Font.useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Audiowide-Regular": require("../../assets/fonts/Audiowide-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const addToFavorite = (episodeId) => {
    const index = episodeId.id - 1;

    console.log(index);

    setFavoritted(!favoritted);
    dispatch(addFavorite(episodeId));
  };

  const removeFromFavorite = (item) => {
    dispatch(removeFavorite(item));
  };

  return (
    <>
      <Container>
        <View style={{ marginTop: 150 }} />
        <FlatList
          data={episodes}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{ height: 10 }}
          renderItem={({ item }) => (
            <CardInfo>
              <HeaderCard>
                <TitleContainer>
                  <Title style={{ fontFamily: "Audiowide-Regular" }}>
                    {item.id.toString().padStart(3, "0")}
                  </Title>
                </TitleContainer>
                <IconContainer>
                  <ButtonFavorite
                    onPress={() => {
                      addToFavorite(item);
                    }}
                  >
                    <MaterialCommunityIcons
                      name={!favoritted ? "star-outline" : "star"}
                      size={24}
                      color={!favoritted ? "#FFF" : "#D69D0D"}
                    />
                  </ButtonFavorite>
                </IconContainer>
              </HeaderCard>
              <InfosContainer>
                <InfoAbout>
                  <About style={{ fontFamily: "Poppins-SemiBold" }}>
                    Name:
                  </About>
                  <About>{item.name}</About>
                </InfoAbout>
                <InfoAbout>
                  <About style={{ fontFamily: "Poppins-SemiBold" }}>
                    On air at:
                  </About>
                  <About>{item.air_date}</About>
                </InfoAbout>
              </InfosContainer>
              <FooterCard>
                <ButtonInfoEp
                  onPress={() => {
                    navigation.navigate("Modal", { state: item });
                  }}
                >
                  <Ionicons
                    name="information-circle-outline"
                    size={35}
                    color="#fff"
                  />
                </ButtonInfoEp>
              </FooterCard>
            </CardInfo>
          )}
        />
      </Container>
    </>
  );
};

export default Episodes;
