import styled from 'styled-components';
import Routine from './Routine';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #eae7e7;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const ViewRoutine = ({ routines }) => {
  return (
    <Container>
      {routines.length > 0
        ? routines.map((routine) => (
            <Routine routine={routine} key={routine._id} />
          ))
        : 'No routines'}
    </Container>
  );
};

export default ViewRoutine;
