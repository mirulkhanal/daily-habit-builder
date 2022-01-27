import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
const Input = styled.input`
  outline: none;
  text-align: center;
  font-weight: 700;
  padding: 5px 5px;
  color: grey;
`;
const Form = styled.form`
  top: 0;
  margin-top: 70px;
  display: flex;
  justify-content: Center;
  align-items: center;
  gap: 10px;
  width: 70%;
`;
const Button = styled.button`
  border: none;
  padding: 5px 30px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: coral;
  color: white;
  gap: 5px;
  cursor: pointer;
`;
const AddRoutine = () => {
  const router = useRouter();
  const [task, setTask] = useState('');
  const [startTime, setStartTime] = useState('05:00');
  const [endTime, setEndTime] = useState('23:00');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/routine', {
        title: task,
        startTime,
        endTime,
      });
      router.push('/');
      setTask('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder='Title of the task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Input
        type='time'
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <Input
        type='time'
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
      <Button type='submit'>
        <AddIcon />
        Save
      </Button>
    </Form>
  );
};

export default AddRoutine;
