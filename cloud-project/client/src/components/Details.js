class Details {
  constructor(student) {
    this._detailsModal = document.querySelector('#details-modal');
    this._student = student;
    this.render();
  }

  render() {
    const image_path = this._student.image_path
      ? this._student.image_path
      : './assets/avatar.jpg';
    this._detailsModal.innerHTML = `
      <div class="member-pic">
        <img src="${image_path}" alt="avatar" />
      </div>
      <div class="info">
        <h2 class="name text-xl text-bold">${this._student.first_name} ${this._student.last_name}</h2>
        <h3 class="position text-lg text-secondary">${this._student.position}</h3>
        <div class="details text-md">
          <p>ID: <span class="text-light">${this._student.id}</span></p>
          <p>Age: <span class="text-light">${this._student.age}</span></p>
          <p>CGPA: <span class="text-light">${this._student.cgpa}</span></p>
        </div>
        <p class="role text-md text-light">
          ${this._student.role}
        </p>
      </div>
    `;
  }
}

export default Details;
