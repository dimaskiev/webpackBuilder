import createMenu from '../../components/menu/menu';
import './index.scss';
var menu = createMenu(['Главная', 'Блог'], 'menu');
document.body.appendChild(menu);
console.log('in index.js')