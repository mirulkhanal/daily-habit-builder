import axios from 'axios';
import styled from 'styled-components';
import AddRoutine from '../components/AddRoutine';
import ViewRoutine from '../components/ViewRoutine';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 10px;
`;
export default function Home({ routines }) {
  return (
    <Container>
      <AddRoutine />
      <ViewRoutine routines={routines} />
    </Container>
  );
}
export const getServerSideProps = async () => {
  const response = await axios.get('http://localhost:3000/api/routine');
  return {
    props: {
      routines: response.data.routines,
    },
  };
};
