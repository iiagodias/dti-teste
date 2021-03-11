import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

export const Header = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.primary};
  padding: 10px;
`;

export const BoxIcon = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const Scroll = styled.ScrollView``;


export const Body = styled.View`
  padding: 15px;
`;


export const ContainerData = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxData = styled.View`
  width: 48%;
  height: 220px;
`;

export const Poser = styled.Image`
  resize-mode: contain;
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.secondary};
  font-weight: 600;
`;

export const BoxYear = styled.View`
  background-color: ${({ theme }) => theme.tundora};
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const TextYear = styled.Text`
  font-size: 16px;
  color: white;
`;

export const Text = styled.Text`
   font-size: 16px;
   color: ${({ theme }) => theme.secondary};
   margin-bottom: 10px;
`;

export const Hr = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.silverSand};
  padding-bottom: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const TitleHr = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.secondary};
  font-weight: 600;
`;

export const BoxStar = styled.View`
  padding: 20px;
  align-items: center;
`;

export const BoxRating = styled.View`
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 10px;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TextRating = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.secondary};
`;