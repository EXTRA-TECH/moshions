import {useQuery} from '@apollo/react-hooks'
import {MEMBERS} from '../../gql/example'

const TestStatic = () => {
  const {data} = useQuery(MEMBERS)

  if (data) {
    console.log(data)
  }
  return (
    <div>Test Static</div>
  )
}

export default TestStatic