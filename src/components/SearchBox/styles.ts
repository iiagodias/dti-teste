import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';


export const Container = styled.View`
  padding: 15px;
  background-color: ${({ theme }) => theme.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.TextInput`
  color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.background};
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  width: 50%;
  height: 45px;
`;

export const InputMask = styled(TextInputMask)`
  color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.background};
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  width: 30%;
  height: 45px;
`;

export const ContainerSearch = styled.TouchableOpacity`

`;

