import 'normalize.css';
import createMenu from '../../components/menu/menu';
import './blog.scss';
var menu = createMenu(['Главная', 'Блоггг'], 'menu');
document.body.appendChild(menu);
console.log('in blog.js');