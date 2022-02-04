import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { View, Text, Image } from "react-native";
import CharactersMap from "../../components/CharactersMap";
import Pagination from "../../components/Pagination";
import { Container, ContainerPagination } from "./styles";

const Characters = () => {
  const [characters, setCharacters] = useState();
  const [info, setInfo] = useState({});
  const urlCharacters = "https://rickandmortyapi.com/api/character";

  const getCharacter = async (url) => {
    await axios
      .get(url)
      .then(({ data }) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((err) => console.log(err));
  };

  const onPrevious = () => {
    getCharacter(info.prev);
  };
  const onNext = () => {
    getCharacter(info.next);
  };

  useEffect(() => {
    getCharacter(urlCharacters);
  }, []);

  return (
    <Container>
      <ContainerPagination>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrev={onPrevious}
        onNext={onNext}
      />
    
      </ContainerPagination>
      
      <CharactersMap characters={characters} />
    </Container>
  );
};

export default Characters;
