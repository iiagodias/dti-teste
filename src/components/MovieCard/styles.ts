import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: white;
  width: 48%;
  height: 245px;
  margin-bottom: 15px;
  border: 1px solid ${({ theme }) => theme.silverSand};
  border-radius: 5px;
  overflow: hidden;
`;

export const Poster = styled.Image`
  resize-mode: cover;
  width: 100%;
  height: 125px;
`;

export const BoxData = styled.View`
  width: 100%;
  height: 75px;
  padding: 8px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.tundora};
  margin-bottom: 10px;
`;

export const NumberRating = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.tundora};
  text-align: center;
  margin-top: 5px;
`;