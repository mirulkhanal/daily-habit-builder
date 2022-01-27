import styled from 'styled-components';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
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
  position: relative;
`;

const Content = styled.div`
  display: flex;
  color: white;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  @media (max-width: 390px) {
    padding: 0 20px;
  }
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

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const EditButton = styled(DeleteButton)``;
const StartTime = styled.p``;
const EndTime = styled.p``;
const Title = styled.h1`
  @media (max-width: 390px) {
    width: 65%;
    margin-right: 20px;
  }
`;

const RoutineList = ({ routine }) => {
  const router = useRouter();
  const convertTime = (time) => {
    const timeHour = Number(time.split(':')[0]);
    const timeMinutes = time.split(':')[1];
    return timeHour > 12
      ? `${timeHour - 12}:${timeMinutes} PM`
      : `${timeHour}:${timeMinutes} AM`;
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/routine/${routine._id}`);
      router.push('/');
      toast.success('Successfully removed the routine task');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Title>{routine.title}</Title>
      <Actions>
        <DeleteButton>
          <DeleteForeverOutlinedIcon
            style={{ color: '#FF2E63' }}
            onClick={handleDelete}
          />
        </DeleteButton>
        <EditButton>
          <EditOutlinedIcon style={{ color: '#E0F9B5' }} />
        </EditButton>
      </Actions>
      <Content>
        <StartTime>Start Time: {convertTime(routine.startTime)}</StartTime>
        <EndTime>End Time: {convertTime(routine.endTime)}</EndTime>
      </Content>
    </Container>
  );
};

export default RoutineList;
