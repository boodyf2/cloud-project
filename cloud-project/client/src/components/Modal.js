import StudentApi from '../services/StudentApi.js';
import Details from './Details.js';

class Modal {
  constructor() {
    this._modal = document.querySelector('#modal');
    this.addEventListeners();
  }

  addEventListeners() {
    document.addEventListener('membersloaded', () => {
      this._viewMoreBtns = document.querySelectorAll('.btn');
      this._viewMoreBtns.forEach((viewMoreBtn) => {
        viewMoreBtn.addEventListener('click', this.open.bind(this));
      });
    });
    window.addEventListener('click', this.outsideClick.bind(this));
  }

  async open(e) {
    this._modal.style.display = 'block';
    const student = await StudentApi.getStudentById(e.target.dataset.id);
    console.log(student.data.data);
    new Details(student.data.data);
  }

  close() {
    this._modal.style.display = 'none';
  }

  outsideClick(e) {
    if (e.target === this._modal) {
      this.close();
    }
  }
}

export default Modal;
