import './test.css';

const say = function (name) {
  const d = document.createElement('div');
  d.className = 'div_one';
  d.textContent = `Hello, ${name}`;
  document.body.appendChild(d);
};

export default say;
