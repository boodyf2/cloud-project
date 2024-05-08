import '@fortawesome/fontawesome-free';
import './css/style.css';
import MembersList from './components/MembersList';
import Modal from './components/Modal';

const app = () => {
  new MembersList();
  new Modal();
};

app();
