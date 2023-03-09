// Write your code here
import {useState} from 'react'
import {
  Container,
  BackgroundContainer,
  Heading,
  Text,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setData] = useState('')
  const characterError = password.length < 8
  const onChangeText = event => setData(event.target.value)

  return (
    <Container>
      <BackgroundContainer>
        <Heading>Password Validator</Heading>
        <Text>check how strong and secure is your password</Text>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangeText}
        />
        {characterError && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </BackgroundContainer>
    </Container>
  )
}

export default PasswordValidator
