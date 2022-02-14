import React, { useRef, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  About,
  ButtonFavorite,
  ButtonInfoEp,
  CardInfo,
  CharactersButton,
  CharactersButtonTxt,
  Container,
  EpisodesButton,
  EpisodesButtonTxt,
  FooterCard,
  HeaderCard,
  IconContainer,
  InfoAbout,
  InfosContainer,
  TabCustom,
  Title,
  TitleContainer,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import * as Font from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { updateFavorite } from "../../store/actions";
import EmptyFavorites from "../EmptyFavorites";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import TabTop from "../../stacks/TabsTop";

const FavoritesMap = () => {
  const { episodes } = useSelector((state) => state.AllEpisodes);

  // const [epButton, setEpButton] = useState(false);
  // const [charButton, setCharButton] = useState(false);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [loaded] = Font.useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Audiowide-Regular": require("../../assets/fonts/Audiowide-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  //.toString().padStart(3, "0")
  const removeFav = (item) => {
    dispatch(updateFavorite(item));
  };

  i18n.fallbacks = true;
  i18n.locale = Localization.locale;

  return (
    <Container>
      <FlatList
        data={episodes}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<EmptyFavorites />}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{ height: 10 }}
        renderItem={({ item }) => (
          <>
            {item.favorite ? (
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
                        removeFav(item.id);
                      }}
                    >
                      <MaterialCommunityIcons
                        name="star-off"
                        size={24}
                        color="#D69D0D"
                      />
                    </ButtonFavorite>
                  </IconContainer>
                </HeaderCard>
                <InfosContainer>
                  <InfoAbout>
                    <About style={{ fontFamily: "Poppins-SemiBold" }}>
                      {i18n.t("Name:")}
                    </About>
                    <About>{item.name}</About>
                  </InfoAbout>
                  <InfoAbout>
                    <About style={{ fontFamily: "Poppins-SemiBold" }}>
                      {i18n.t("On air at:")}
                    </About>
                    <About>{i18n.t(item.air_date)}</About>
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
            ) : null}
          </>
        )}
      />
    </Container>
  );
};

export default FavoritesMap;

i18n.translations = {
  "pt-BR": {
    "Name:": "Nome:",
    "On air at:": "No ar em:",
    "December 2, 2013": "2 de Dezembro de 2013",
    "December 9, 2013": "9 de Dezembro de 2013",
    "December 16, 2013": "16 de Dezembro de 2013",
    "January 13, 2014": "13 de Janeiro de 2014",
    "January 20, 2014": "20 de Janeiro de 2014",
    "January 27, 2014": "27 de Janeiro de 2014",
    "March 10, 2014": "10 de Março de 2014",
    "March 17, 2014": "17 de Março de 2014",
    "March 17, 2014": "17 de Março de 2014",
    "March 24, 2014": "24 de Março de 2014",
    "April 7, 2014": "7 de Abril de 2014",
    "April 14, 2014": "14 de Abril de 2014",
    "July 26, 2014": "26 de Julho de 2014",
    "August 2, 2015": "2 de Agosto de 2015",
    "August 9, 2015": "9 de Agosto de 2015",
    "August 16, 2015": "16 de Agosto de 2015",
    "August 23, 2015": "23 de Agosto de 2015",
    "August 30, 2015": "30 de Agosto de 2015",
    "September 13, 2015": "13 de Setembro de 2015",
    "September 20, 2015": "20 de Setembro de 2015",
    "September 27, 2015": "27 de Setembro de 2015",
    "October 4, 2015": "4 de Outubro de 2015",
    "April 1, 2017": "1 de Abril de 2017",
    "July 30, 2017": "30 de Julho de 2017",
    "August 6, 2017": "6 de Agosto de 2017",
    "August 13, 2017": "13 de Agosto de 2017",
    "August 20, 2017": "20 de Agosto de 2017",
    "August 27, 2017": "27 de Agosto de 2017",
    "September 10, 2017": "10 de Setembro de 2017",
    "September 17, 2017": "17 de Setembro de 2017",
    "September 24, 2017": "24 de Setembro de 2017",
    "October 1, 2017": "1 de Outubro de 2017",
    "November 10, 2019": "10 de Novembro de 2019",
    "November 17, 2019": "17 de Novembro de 2019",
    "November 24, 2019": "24 de Novembro de 2019",
    "December 8, 2019": "8 de Dezembro de 2019",
    "December 15, 2019": "15 de Dezembro de 2019",
    "May 3, 2020": "3 de Maio de 2019",
    "May 10, 2020": "10 de Maio de 2019",
    "May 17, 2020": "17 de Maio de 2019",
    "May 24, 2020": "24 de Maio de 2019",
    "May 31, 2020": "31 de Maio de 2019",
    "June 20, 2021": "20 de Junho de 2021",
    "June 27, 2021": "27 de Junho de 2021",
    "July 4, 2021": "4 de Julho de 2021",
    "July 11, 2021": "11 de Julho de 2021",
    "July 18, 2021": "18 de Julho de 2021",
    "July 25, 2021": "25 de Julho de 2021",
    "August 1, 2021": "1 de Agosto de 2021",
    "August 28, 2021": "28 de Agosto de 2021",
    "September 5, 2021": "5 de Setembro de 2021",
  },
};
