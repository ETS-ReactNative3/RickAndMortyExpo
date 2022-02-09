import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import * as Font from "expo-font";
import {
  ButtonNavigation,
  ButtonText,
  Container,
  ContainerInfo,
  Info,
  Sinopse,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import * as Localization from "expo-localization";
import i18n from "i18n-js";

const Home = () => {
  const navigation = useNavigation();

  const [loaded] = Font.useFonts({
    // "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Audiowide-Regular": require("../../assets/fonts/Audiowide-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const SinopseEN = () => {
    return (
      <Info style={{ fontFamily: "Poppins-Regular" }}>
        The show revolves around the adventures of members of the Smith family,
        which consists of parents Jerry Beth and their children Summer and
        Morty, and Beth's father Rick Sanchez, who lives with them as employees.
        According to Justin Roiland, the family lives outside of Seattle,
        Washington. However, Rick and Morty's adventures take place in an
        infinite number of realities, with the characters traveling to other
        planets and dimensions through portals using Rick's vehicle. Rick is an
        eccentric, alcoholic mad scientist who eschews fanciful conventions like
        marriage, love and family. He often goes on adventures with his
        14-year-old grandson Morty, a kind-hearted but also easily distressed
        boy whose naive but fundamental moral compass works counter to Rick's
        Machiavellian ego.
      </Info>
    );
  };

  return (
    <Container>
      <ContainerInfo>
        <Sinopse style={{ fontFamily: "Audiowide-Regular" }}>
          {i18n.t("Synopsis")}
        </Sinopse>

        <ScrollView>
          <Info style={{ fontFamily: "Poppins-Regular" }}>
            O show gira em torno das aventuras dos membros da família Smith, que
            consiste nos pais Jerry e Beth, seus filhos Summer e Morty, e o pai
            de Beth, chamado Rick Sanchez, que mora com eles como hóspede. De
            acordo com Justin Roiland, a família mora fora da cidade de Seattle,
            no estado norte-americano de Washington. No entanto, as aventuras de
            Rick e Morty ocorrem em um número infinito de realidades, com os
            personagens viajando para outros planetas e dimensões através de
            portais usando o veículo voador de Rick. Rick é um cientista louco
            excêntrico e alcoólatra, que evita muitas convenções costumeiras
            como escola, casamento, amor e família. Ele frequentemente vai em
            aventuras com seu neto de 14 anos de idade, Morty, um menino de bom
            coração, mas que também fica facilmente angustiado, cuja bússola
            moral ingênua mas fundamentada funciona em contraponto ao ego
            maquiavélico de Rick.
          </Info>
        </ScrollView>
      </ContainerInfo>
      <ButtonNavigation onPress={() => navigation.navigate("Characters")}>
        <ButtonText style={{ fontFamily: "Audiowide-Regular" }}>
          {i18n.t("Characters")}
        </ButtonText>
        <Ionicons name="chevron-forward" size={30} color="#2F3646" />
      </ButtonNavigation>
      <ButtonNavigation onPress={() => navigation.navigate("Episodes")}>
        <ButtonText style={{ fontFamily: "Audiowide-Regular" }}>
          {i18n.t("Episodes")}
        </ButtonText>
        <Ionicons name="chevron-forward" size={30} color="#2F3646" />
      </ButtonNavigation>
      <ButtonNavigation onPress={() => navigation.navigate("Favorites")}>
        <ButtonText style={{ fontFamily: "Audiowide-Regular" }}>
          {i18n.t("Favorites")}
        </ButtonText>
        <Ionicons name="chevron-forward" size={30} color="#2F3646" />
      </ButtonNavigation>
      <View style={{ marginBottom: "10%" }} />
    </Container>
  );
};

export default Home;

i18n.fallbacks = true;
i18n.locale = Localization.locale;

i18n.translations = {
  pt: {
    "Synopsis": "Sinopse",
    "Episodes": "Episódios",
    "Characters": "Personagens",
    "Favorites": "Favoritos",
  },
};
