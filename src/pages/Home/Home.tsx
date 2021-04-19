import { Container, Form, Input, Button, Title } from './styles'

export const HomePage = () => {
  return (
    <Container>
      <Form>
        <Title>Please Login!</Title>
        <Input type="text" />
        <Input type="text" />
        <Button>Log in</Button>
      </Form>
    </Container>
  )
}
