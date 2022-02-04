import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import CharPerEpisode from "../../components/CharPerEpisode";
import EpisodesMap from "../../components/EpisodesMap";
import Pagination from "../../components/Pagination";
import { Container, ContainerPagination } from "./styles";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [info, setInfo] = useState({});

  const urlEpisodes = "https://rickandmortyapi.com/api/episode";

  const getEpisode = async (url) => {
    await axios
      .get(url)
      .then(({ data }) => {
        setEpisodes(data.results);
        setInfo(data.info);
      })
      .catch((err) => console.log(err));
  };

  const onPrevious = () => {
    getEpisode(info.prev);
  };
  const onNext = () => {
    getEpisode(info.next);
  };

  useEffect(() => {
    getEpisode(urlEpisodes);
  }, []);

  return (
    <>
      <Container>
        <ContainerPagination>
          <Pagination
            prev={info.prev}
            next={info.next}
            onPrev={onPrevious}
            onNext={onNext}
          />
        </ContainerPagination>
        <EpisodesMap episodes={episodes} />
      </Container>
    </>
  );
};

export default Episodes;
