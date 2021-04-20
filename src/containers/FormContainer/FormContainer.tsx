import { Input, Button } from '../../components'
import { Form, Title } from './styles'

export const FormContainer = () => {
  return (
    <Form>
      <Title>Please Login!</Title>
      <Input />
      <Input />
      <Button>Log in</Button>
    </Form>
  )
}
