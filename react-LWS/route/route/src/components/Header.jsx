import { NavLink } from "react-router-dom";
import classes from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          {/* <NavLink to="/hello" activeClassName={classes.active}>
            Home
          </NavLink> */}
          Home
        </li>
        <li>
          {/* <NavLink to="/posts" activeClassName={classes.active}>
            Posts
          </NavLink> */}
          Posts
        </li>
      </ul>
    </div>
  );
}
