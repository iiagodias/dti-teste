import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

export const Scroll = styled.ScrollView``;


export const Body = styled.View`
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ContainerOrder = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

export const ContainerOrderButton = styled.TouchableOpacity``;

export const TypeOrder = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.secondary};
`;

export const Orderby = styled.Text`
 font-size: 16px;
 color: ${({ theme }) => theme.secondary};
`;
