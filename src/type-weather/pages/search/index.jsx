import React, { useContext, useState } from "react";
import {
  Container,
  HeaderContainer,
  HeaderImg,
  Input,
  Subtitle,
  TitleColored,
  TitleContainer,
  TitleText,
} from "./styles";

import Background from "../../assets/images/background.png";
import Cloud from "../../assets/images/cloud.png";
import { TouchableOpacity, Text, Button, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { WeatherContext } from "../../../Context/WeatherContext";

export default function Search({ navigation }) {
  const context = useContext(WeatherContext)

  const [inputSearch, setInputSearch] = useState();

  function handleClickDash() {
    context.setWeatherSearch(inputSearch)
    if(inputSearch != null){
      navigation.navigate('dash')
    }
  }

  return (
    <Container source={Background}  resizeMode="cover">
      <HeaderContainer>
        <HeaderImg source={Cloud} />
        <TitleText>TypeWeather</TitleText>
      </HeaderContainer>
      <TitleContainer>
        <TitleText>
          Boas vindas ao <TitleColored>TypeWeather</TitleColored>
        </TitleText>
        <Subtitle>Escolha um local para ver a previsão do tempo</Subtitle>
      </TitleContainer>
      <Input placeholder="Buscar Local" onChangeText={(text)=>{setInputSearch(text)}}></Input>

      <Button title="Ir" onPress={() => { handleClickDash() }} />
    </Container>
  );
}
