import {useQuery} from '@apollo/react-hooks'
import {MEMBERS} from '../../gql/example'
import Navbar from '../../components/Navbar'

const TestStatic = () => {
  const {data} = useQuery(MEMBERS)

  if (data) {
    console.log(data)
  }

  return (
    <>
      <Navbar />
    </>
  )
}

export default TestStatic