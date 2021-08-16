// Import all plugins
import * as bootstrap from 'bootstrap';

const $root = document.getElementById('root');
const $paragraph = document.createElement('p');

$paragraph.textContent = 'hello world';
$root.appendChild($paragraph);