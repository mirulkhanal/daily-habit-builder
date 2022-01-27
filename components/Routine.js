import styled from 'styled-components';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Link from 'next/link';

const Container = styled.div`
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5px;
  background-color: #1e2022;
  width: 99%;
  color: white;
  /* min-width: 50%; */
  position: relative;
`;

const Content = styled.div`
  display: flex;
  color: white;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

const Actions = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const StartTime = styled.p``;
const EndTime = styled.p``;
const Title = styled.h1`
  /* width: 100%; */
  @media (width: 390px) {
    width: 68%;
    margin-right: 20px;
  }
`;

const RoutineList = ({ routine }) => {
  const convertTime = (time) => {
    const timeHour = Number(time.split(':')[0]);
    const timeMinutes = time.split(':')[1];
    return timeHour > 12
      ? `${timeHour - 12}:${timeMinutes} PM`
      : `${timeHour}:${timeMinutes} AM`;
  };
  return (
    <Container>
      <Title>{routine.title}</Title>
      <Actions>
        <Link href='/' passHref>
          <a style={{ cursor: 'pointer' }}>
            <DeleteForeverOutlinedIcon style={{ color: '#FF2E63' }} />
          </a>
        </Link>
        <Link href='/' passHref>
          <a style={{ cursor: 'pointer' }}>
            <EditOutlinedIcon style={{ color: '#E0F9B5' }} />
          </a>
        </Link>
      </Actions>
      <Content>
        <StartTime>Start Time: {convertTime(routine.startTime)}</StartTime>
        <EndTime>End Time: {convertTime(routine.endTime)}</EndTime>
      </Content>
    </Container>
  );
};

export default RoutineList;
