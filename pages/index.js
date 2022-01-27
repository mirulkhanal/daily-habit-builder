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
  margin-top: 35px;
  @media (max-width: 390px) {
    margin-top: 100px;
  }
`;
export default function Home({ routines }) {
  return (
    <Container>
      <AddRoutine />
      <ViewRoutine routines={routines} />
    </Container>
  );
}
export const getServerSideProps = async ({ req }) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const baseUrl = req ? `${protocol}://${req.headers.host}` : '';
  const response = await axios.get(baseUrl + '/api/routine');
  return {
    props: {
      routines: response.data.routines,
    },
  };
};
