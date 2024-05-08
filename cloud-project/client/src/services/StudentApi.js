import axios from 'axios';

class StudentApi {
  constructor() {
    this._apiUrl = 'http://localhost:5000/api/students';
  }

  getStudents() {
    return axios.get(this._apiUrl);
  }

  getStudentById(id) {
    return axios.get(`${this._apiUrl}/${id}`);
  }
}

export default new StudentApi();
