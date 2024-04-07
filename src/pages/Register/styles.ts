import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View``

export const FormContainer = styled.View`

`

export const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`

export const CancelActionButton = styled(RectButton)`
  background-color: ${props => props.theme.error};
  padding: 10px;
  border-radius: 5px;
`

export const CancelActionButtonText = styled.Text`
  color: ${props => props.theme.textOnError};
`

export const SaveActionButton = styled(RectButton)`
  background-color: ${props => props.theme.primary};
  padding: 10px;
  border-radius: 5px;
`

export const SaveActionButtonText = styled.Text`
  color: ${props => props.theme.textOnPrimary};
`
