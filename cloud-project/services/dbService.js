import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const connection = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

class DbService {
  constructor() {}

  async getStudents() {
    const [students] = await connection.query('SELECT * FROM students_info');
    return students;
  }

  async getStudentById(id) {
    const [student] = await connection.query(
      'SELECT * FROM students_info WHERE Id = ?',
      [id]
    );
    return student[0];
  }
}

export default DbService;
