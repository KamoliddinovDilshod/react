import { NavLink } from "react-router-dom";

const Item = ({img , title}) => {
  return (
    <li className='nav__item'>
      <NavLink className='nav__link'>
        <img className='nav__img' src={img} alt={title} />
        <strong className='nav__title'>{title}</strong>
      </NavLink>
    </li>
  );
};

export default Item;
