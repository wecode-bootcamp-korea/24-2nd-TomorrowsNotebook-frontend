import ReactDOM from 'react-dom';

const Potal = ({ children }) => {
  const container = document.getElementById('modal');
  return ReactDOM.createPortal(children, container);
};

export default Potal;
