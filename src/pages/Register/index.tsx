import {useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {Alert, StyleSheet} from 'react-native'
import {InputLabel} from '../../components/InputLabel'
import {navigationProps} from '../../types'
import {
  ActionsContainer,
  CancelActionButton,
  CancelActionButtonText,
  Container,
  FormContainer,
  SaveActionButton,
  SaveActionButtonText,
} from './styles'

export const Register = () => {
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [curso, setCurso] = useState('')

  const navigation = useNavigation<navigationProps>()
  const handleMainCancel = () => {
    navigation.navigate('login')
  }
  const handleMain = () => {
    Alert.alert('Usuário Cadastrado com sucesso!')
    navigation.navigate('login')
  }

  return (
    <Container>
      <FormContainer>
        <InputLabel
          label="Nome:"
          placeholder="Nome"
          onChangeText={setName}
          value={name}
        />
        <InputLabel
          label="Telefone:"
          placeholder="Telefone"
          onChangeText={setTel}
          value={tel}
        />
        <InputLabel
          label="CPF:"
          placeholder="CPF"
          onChangeText={setCpf}
          value={cpf}
        />
        <InputLabel
          label="Email:"
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <InputLabel
          label="Curso:"
          placeholder="Curso"
          onChangeText={setCurso}
          value={curso}
        />
        
        <ActionsContainer>
          <CancelActionButton
            onPress={handleMainCancel}
            style={styles.RoundedButton}>
            <CancelActionButtonText>Cancelar</CancelActionButtonText>
          </CancelActionButton>
          <SaveActionButton onPress={handleMain} style={styles.RoundedButton}>
            <SaveActionButtonText>Salvar</SaveActionButtonText>
          </SaveActionButton>
        </ActionsContainer>
      </FormContainer>
    </Container>
  )
}
const styles = StyleSheet.create({
  RoundedButton: {
    borderRadius: 10,
    overflow: 'hidden',
  },
})
