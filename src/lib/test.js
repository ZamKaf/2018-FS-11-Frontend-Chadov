import './test.css';
import * as sizes from './file_sizes';

const say = function (name) {
  const d = document.createElement('div');
  d.className = 'div_one';
  d.textContent = `Hello, ${name} ... ${sizes.GetReadableSize(1234567890)}`;
  document.body.appendChild(d);
};

export default say;
