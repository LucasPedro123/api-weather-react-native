import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #13131A; 
    align-items: center;
    
`

export const Card = styled.Image`
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
`
export const CardContainer = styled.View`
    width: 335px;
    height: 305px;
    margin-top: 40px;

`

export const CardContent = styled.View`
    display: flex;
    height: 100%;
    justify-content: space-around;
`

export const CardTextView = styled.View`
    flex-direction: column;
    margin-left: 20px;
`

export const CardTitle = styled.Text`
    font-weight: 700;
    font-size: 16px;
    color: #FAFAFA;

`

export const SubTitle = styled.Text`
    font-weight: 400;
    font-size: 12px;

    color: #FAFAFA;


`

export const CardWrapper = styled.View`
    position: relative;
    bottom: 20;
`

export const CardTemperature = styled.View`
    margin-left: 20px;
    flex-direction: row;
    gap: 30px;
    align-items: center;
`

export const CardImage = styled.Image`

`
export const Celsius = styled.Text`
    font-weight: 800;
    font-size: 38px;
    color: #FFFFFF;


`

export const subCelsius = styled.Text`
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;


`
export const Description = styled.Text`
    font-weight: 400;
    font-size: 14px;
    color: rgb(255, 255, 255);

`


// Weather Details:
export const WeatherDetailsContainer = styled.View`
    margin-top: 24px;

    padding: 4px 16px;
    gap: 8px;

    background: #16161F;
    border-radius: 12px;

`

export const WeatherDetailsWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 327px;
    height: 56px;

    box-sizing: border-box;
    border-bottom: 1px solid #1C1C27;




`

export const WeatherDetailsText = styled.View`
    flex-direction: row;
    gap: 12px;
`
export const WeatherDetailsNumber = styled.Text`

    font-weight: 700;
    font-size: 16px;
    color: #FAFAFA;



`
export const WeatherDetailsName = styled.Text`
    font-weight: 700;
    font-size: 14px;
    color: #BFBFD4;

    

`