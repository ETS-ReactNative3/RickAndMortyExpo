import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CharPerEpisode from "../../components/CharPerEpisode";
import EpisodesMap from "../../components/EpisodesMap";
import Pagination from "../../components/Pagination";
import { fecthEpisodes } from "../../store/actions";
import { Container, ContainerPagination } from "./styles";

const Episodes = () => {
  // const [episodes, setEpisodes] = useState([]);
  const { episodes } = useSelector((state) => {
    return state.AllEpisodes;
  });
  const dispatch = useDispatch();
  const [info, setInfo] = useState({});

  const urlEpisodes = "https://rickandmortyapi.com/api/episode";

  const getEpisode = async (url) => {
    await axios
      .get(url)
      .then(({ data }) => {
        dispatch(fecthEpisodes(data.results));
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
