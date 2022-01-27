import mongoose from 'mongoose';

const RoutineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Enter the title for the routine task'],
  },
  startTime: {
    type: String,
    required: [true, 'Enter the start time of the task'],
  },
  endTime: {
    type: String,
    required: [true, 'Enter the end time of the task'],
  },
});

export default mongoose.models.Routine ||
  mongoose.model('Routine', RoutineSchema);
