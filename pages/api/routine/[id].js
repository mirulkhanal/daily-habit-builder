import nc from 'next-connect';
import Routine from '../../../model/Routine';
import db from '../../../utils/db';
db();
const handler = nc();

handler.delete(async (req, res) => {
  try {
    await Routine.findByIdAndRemove(req.query.id);
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

export default handler;
