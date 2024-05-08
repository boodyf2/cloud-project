import express from 'express';
import DbService from '../services/dbService.js';
const router = express.Router();
const dbService = new DbService();

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await dbService.getStudents();
    res.json({ success: true, data: students });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// Get a single student
router.get('/:id', async (req, res) => {
  try {
    const student = await dbService.getStudentById(req.params.id);
    res.json({ success: true, data: student });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

export default router;
