import { Input, Button } from '../../components'

import { Container, Form, Title } from './styles'

export const HomePage = () => {
  return (
    <Container>
      <Form>
        <Title>Please Login!</Title>
        <Input />
        <Input />
        <Button>Log in</Button>
      </Form>
    </Container>
  )
}
