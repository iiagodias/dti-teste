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
