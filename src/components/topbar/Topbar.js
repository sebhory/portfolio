// import { Email, Person } from "@material-ui/icons";
import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && " active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            BM
          </a>
          {/* <div className="itemContainer">
            <Person className="icon" />
            <span>+33 77 66 77 66</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>bm@gmail.com</span>
          </div> */}
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
