import StudentApi from '../services/StudentApi';

class MembersList {
  constructor() {
    this._membersListEl = document.querySelector('#members-list');
    this._members = [];
    this.getMembers();
  }

  async getMembers() {
    try {
      const res = await StudentApi.getStudents();
      this._members = res.data.data;
      this.render();
      document.dispatchEvent(new Event('membersloaded'));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    this._membersListEl.innerHTML = this._members
      .map((member) => {
        const image_path = member.image_path
          ? member.image_path
          : './assets/avatar.jpg';
        return `
        <div class="member">
          <div class="member-pic">
            <img src="${image_path}" alt="avatar" />
          </div>
          <div class="member-info">
            <h2 class="name text-xl text-bold">${member.first_name} ${member.last_name}</h2>
            <h3 class="position text-lg text-secondary">${member.position}</h3>
            <p class="role text-md text-light">
              ${member.role}
            </p>
            <button class="btn" data-id="${member.id}">View More</button>
          </div>
        </div>
      `;
      })
      .join('');
  }
}

export default MembersList;
