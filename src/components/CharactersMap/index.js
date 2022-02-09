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
import * as Localization from "expo-localization";
import i18n from "i18n-js";

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

  i18n.fallbacks = true;
  i18n.locale = Localization.locale;

  return (
    <Container>
      <View style={{ marginTop: 150 }} />
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{ height: 10 }}
        renderItem={({ item }) => (
          <CardInfo>
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
                    {i18n.t(item.status)} - {i18n.t(item.species)}
                  </Info>
                </InfoStatus>
              )}
              {item.status === "Dead" && (
                <InfoStatus>
                  <Status style={{ fontFamily: "Poppins-Regular" }}>🔴 </Status>
                  <Info style={{ fontFamily: "Poppins-Regular" }}>
                    {i18n.t(item.status)} - {i18n.t(item.species)}
                  </Info>
                </InfoStatus>
              )}
              {item.status === "unknown" && (
                <InfoStatus>
                  <Status style={{ fontFamily: "Poppins-Regular" }}>⚫ </Status>
                  <Info style={{ fontFamily: "Poppins-Regular" }}>
                    {i18n.t(item.status)} - {item.species}
                  </Info>
                </InfoStatus>
              )}
              <InfoAbout>
                <About style={{ fontFamily: "Poppins-SemiBold" }}>
                  {i18n.t("Gender:")}
                </About>
                <About style={{ fontFamily: "Poppins-Regular" }}>
                  {i18n.t(item.gender)}
                </About>
              </InfoAbout>

              <InfoAbout>
                <About style={{ fontFamily: "Poppins-SemiBold" }}>
                  {i18n.t("First seen in:")}
                </About>
                <About style={{ fontFamily: "Poppins-Regular" }}>
                  {item.origin.name === "Mr. Goldenfold's dream"
                    ? "O sonho de Goldenfold"
                    : i18n.t(item.origin.name)}
                </About>
              </InfoAbout>

              <InfoAbout>
                <About style={{ fontFamily: "Poppins-SemiBold" }}>
                  {i18n.t("Last known location:")}
                </About>
                <About style={{ fontFamily: "Poppins-Regular" }}>
                  {item.location.name === "Mr. Goldenfold's dream"
                    ? "O sonho de Goldenfold"
                    : i18n.t(item.location.name)}
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

//translations
i18n.translations = {
  "pt-BR": {
    Alive: "Vivo",
    Dead: "Morto",
    unknown: "Desconhecido",
    Human: "Humano",
    Alien: "Alienígena",
    Humanoid: "Humanóide",
    "Mythological Creature": "Criatura Mitológica",
    Poopybutthole: "Senhor calça cagada",
    "Gender:": "Gênero",
    Female: "Feminino",
    Male: "Masculino",
    Cronenberg: "Cronenberg",
    Genderless: "Sem gênero",
    Animal: "Animal",
    Disease: "Doença",
    "Last known location:": "Último local conhecido:",
    "First seen in:": "Visto pela primeira vez em:",
    "Earth (C-137)": "Terra (C-137)",
    "Earth (C-500A)": "Terra (C-500A)",
    "Earth (Replacement Dimension)": "Terra (Dimensão de substituição)",
    "Earth (J19ζ7)": "Terra (J19ζ7)",
    "Earth (Evil Rick's Target Dimension)": "Terra (Dimensão do Evil Rick)",
    "Citadel of Ricks": "Cidadela dos Ricks",
    "Testicle Monster Dimension": "Dimensão do Monstro do Testículo",
    "Worldender's lair": "Covil do Mundano",
    "Anatomy Park": "Parque da Anatomia",
    "Interdimensional Cable": "Canal Interdimensional",
    "Post-Apocalyptic Earth": "Terra pós-apocalíptica",
    "Immortality Field Resort": "Resort Campo da Imortalidade",
    "Fantasy World": "Mundo da Fantasia",
    "Planet Squanch": "Planeta Squanch",
    Abadango: "Abadango",
    "Bepis 9": "Bepis 9",
    "Venzenulon 7": "Venzenulon 7",
    "Purge Planet": "Planeta do Purgatório",
    "Signus 5 Expanse": "Expansão Signus 5",
    "Bird World": "Mundo dos Pássaros",
    "Hideout Planet": "Planeta Esconderijo",
    "Mr. Goldenfold's dream": "O sonho de Goldenfold",
    "Dorian 5": "Dorian 5",
    "Unity's Planet": "Planeta da Unidade",
    "Giant's Town": "Cidade dos Gigantes",
    "Cronenberg Earth": "Terra Cronenberg",
    "St. Gloopy Noops Hospital": "Hospital Gloopy Noops",
    "Roy: A Life Well Lived": "Roy: Uma vida bem vivida",
    "Nuptia 4": "Nuptia 4",
    "Interdimensional Customs": "Alfândega Interdimensional",
    "Earth (Giant Telepathic Spiders Dimension)":
      "Terra (Dimensão das Aranhas Telepáticas Gigantes)",
    "Hamster in Butt World": "Hamster no mundo da bunda",
    Gazorpazorp: "Gazorpazorp",
    "Galactic Federation Prison": "Prisão da Federação Galática",
    "Earth (5-126)": "Terra (5-126)",
    Jerryboree: "Jerryboree",
    "Larva Alien's Planet": "Planeta das Larvas Alienígenas",
    "Rick's Memories": "Memórias do Rick",
    Alphabetrium: "Alphabetrium",
    "Earth (K-22)": "Earth (K-22)",
    "Pawn Shop Planet": "Planeta da loja de penhores",
    "Zigerion's Base": "Base do Zigerion",
    "Mega Gargantuan Kingdom": "Reino Mega Gargantuan",
    "Gear World": "Mundo da Engrenagem",
    "Earth (D-99)": "Terra (D-99)",
    "Earth (D716)": "Terra (D716)",
    "Earth (D716-C)": "Terra (D716-C)",
    "Earth (J-22)": "Terra (J-22)",
    "Resort Planet": "Planeta Resort",
    Pluto: "Plutão",
    "St. Gloopy Noops Hospital": "Hospital Gloopy Noops",
    "Froopyland": "Froopylândia"
  },
};
