import Item from "../navitem/item";
import Home from "../../assets/images/Home.svg"
import "./main.css";

const Nav = () => {
  return (
    <>
      <Nav>
        <ul className='nav__list'>
          <Item img={Home} title="Home" />
        </ul>
      </Nav>
    </>
  );
};

export default Nav;