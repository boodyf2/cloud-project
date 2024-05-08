import express from 'express';
import dotenv from 'dotenv';
import studentsRouter from './routes/students.js';
import cors from 'cors';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// cors middleware
// app.use(
//   cors({
//     origin: ['http://localhost:5050', 'http://localhost:5000', 'http://localhost:3000'],
//     credentials: true,
//   })
// );

// Homepage req
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the students API' });
});

// Students Router
app.use('/api/students', studentsRouter);

app.listen(port, () => console.log(`Server listening on ${port}`));
