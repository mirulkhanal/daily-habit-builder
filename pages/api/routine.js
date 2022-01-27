// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import nc from 'next-connect';
import Routine from '../../model/Routine';
import db from '../../utils/db';

db();
const handler = nc();
handler.post(async (req, res) => {
  try {
    const routine = new Routine(req.body);
    await routine.save();
    return res.status(200).json(routine);
  } catch (error) {
    return res.status(400).json(error);
  }
});

handler.get(async (req, res) => {
  try {
    const routines = await Routine.find();
    return res.status(200).json({ routines });
  } catch (error) {
    return res.status(400).json(error);
  }
});
export default handler;
