import "./header.scss";
import logUrl from "../../assets/imediat24.png";
import { Link } from "react-router-dom";
import Search from "./Search";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <header>
      <section>
        <Link to="/">
          <img height="50" src={logUrl} alt="logo" />
          <h1>Store Front</h1>
        </Link>
      </section>
      <nav>
        <ul>
          <li>
            <Search />
          </li>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
