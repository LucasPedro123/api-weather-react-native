import React, { useContext, useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import * as S from './style'; // Verifique se o estilo está sendo importado corretamente
import { StatusBar } from 'expo-status-bar';
import { WeatherContext } from '../../../Context/WeatherContext';

// Importe suas imagens corretamente
import cardContainer from '../../../../assets/containerWeather (2).png';
import icon from '../../../../assets/IconsSol.png';
import tempIcon from '../../../../assets/tempIcon.jpg';
import cloudIcon from '../../../../assets/cloudIcon.png';
import aguaIcon from '../../../../assets/cloudVector.png';
import Icon from '../../../../assets/Icons.png';

const api = {
    key: '57b03edddd891e11682e32c942d79de3', // Chave
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}

const Dash = () => {
    const context = useContext(WeatherContext);

    const [dataPressure, setDataPressure] = useState(0);
    const [dataWindSpeed, setDataWindSpeed] = useState(0);
    const [dataWindDeg, setDataWindDeg] = useState(0);
    const [dataVisibility, setDataVisibility] = useState(0);
    const [dataSunrise, setDataSunrise] = useState('');
    const [dataSunset, setDataSunset] = useState('');

    const [dataName, setDataName] = useState('');
    const [dataCountry, setDataCountry] = useState('');
    const [dataTemp, setDataTemp] = useState(0);
    const [dataTempMin, setDataTempMin] = useState(0);
    const [dataTempMax, setDataTempMax] = useState(0);
    const [dataFeelsLike, setDataFeelsLike] = useState(0);
    const [dataHumidity, setDataHumidity] = useState(0);
    const [dataDescription, setDataDescription] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiWeatherURL = `${api.base}weather?q=${context.WeatherSearch}&units=${api.units}&appid=${api.key}&lang=${api.lang}`;
                const response = await fetch(apiWeatherURL);
                const data = await response.json();

                setDataName(data.name);
                setDataCountry(data.sys.country);
                setDataTemp(Math.round(data.main.temp));
                setDataTempMin(Math.round(data.main.temp_min));
                setDataTempMax(Math.round(data.main.temp_max));
                setDataFeelsLike(data.main.feels_like);
                setDataHumidity(Math.round(data.main.humidity));
                setDataPressure(data.main.pressure);
                setDataWindSpeed(data.wind.speed);
                setDataWindDeg(data.wind.deg);
                setDataVisibility(data.visibility);
                setDataSunrise(new Date(data.sys.sunrise * 1000).toLocaleTimeString('pt-BR'));
                setDataSunset(new Date(data.sys.sunset * 1000).toLocaleTimeString('pt-BR'));
                data.weather.map(e => setDataDescription(e.description));

                const today = new Date();
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                setCurrentDate(today.toLocaleDateString('pt-BR', options));

                console.log(data);
            } catch (error) {
                console.error('Erro ao carregar dados do clima:', error);
            }
        };

        fetchData();
    }, [context.WeatherSearch]);

    function WeatherDetails() {
        return (
            <S.WeatherDetailsContainer>
                <S.WeatherDetailsWrapper>
                    <S.WeatherDetailsText>
                        <Image source={tempIcon} />
                        <S.WeatherDetailsName>Sensação Térmica</S.WeatherDetailsName>
                    </S.WeatherDetailsText>
                    <S.WeatherDetailsNumber>{dataFeelsLike} ºC</S.WeatherDetailsNumber>
                </S.WeatherDetailsWrapper>
                <S.WeatherDetailsWrapper>
                    <S.WeatherDetailsText>
                        <Image source={tempIcon} />
                        <S.WeatherDetailsName>Umidade do ar</S.WeatherDetailsName>
                    </S.WeatherDetailsText>
                    <S.WeatherDetailsNumber>{dataHumidity}%</S.WeatherDetailsNumber>
                </S.WeatherDetailsWrapper>
                <S.WeatherDetailsWrapper>
                    <S.WeatherDetailsText>
                        <Image source={tempIcon} />
                        <S.WeatherDetailsName>Pressão</S.WeatherDetailsName>
                    </S.WeatherDetailsText>
                    <S.WeatherDetailsNumber>{dataPressure} hPa</S.WeatherDetailsNumber>
                </S.WeatherDetailsWrapper>
                <S.WeatherDetailsWrapper>
                    <S.WeatherDetailsText>
                        <Image source={tempIcon} />
                        <S.WeatherDetailsName>Velocidade do Vento</S.WeatherDetailsName>
                    </S.WeatherDetailsText>
                    <S.WeatherDetailsNumber>{dataWindSpeed} m/s</S.WeatherDetailsNumber>
                </S.WeatherDetailsWrapper>
                
            </S.WeatherDetailsContainer>
        )
    }

    return (
        <S.Container>
            <StatusBar style="light" />
            <S.CardContainer>
                <S.CardContent style={{ zIndex: 1 }}>
                    <S.CardTextView>
                        <S.CardTitle>{dataName}, {dataCountry}</S.CardTitle>
                        <S.SubTitle>{currentDate}</S.SubTitle>
                    </S.CardTextView>
                    <S.CardWrapper>
                        <S.CardTemperature>
                            <View>
                                <S.Celsius>{dataTemp} ºC</S.Celsius>
                                <S.subCelsius>{dataTempMin}ºC / {dataTempMax}ºC</S.subCelsius>
                                <S.Description>{dataDescription}</S.Description>
                            </View>
                            <S.CardImage source={icon} />
                        </S.CardTemperature>
                    </S.CardWrapper>
                </S.CardContent>
                <S.Card source={cardContainer} style={{ zIndex: 0, borderRadius: 10 }} />
            </S.CardContainer>
            <WeatherDetails />
        </S.Container>
    );
};

export default Dash;
