import { Link } from "react-router-dom";
import { useSelector, UseSelector } from "react-redux";
import { ICount } from "../redux/userSlice";

function NavBar() {
  const count = useSelector(
    (state: { userSlice: ICount }) => state.userSlice.value
  );

  return (
    <div className="navBar bg-emerald-500 flex text-center p-2 z-50 items-center">
      <div className="logoContainer basis-1/4">
        <h1 className="bg-slate-200 px-1 py-1 font-bold text-xl ">
          Network Call Practice
        </h1>
      </div>
      <div className="pageContainer flex pageContainer text-center basis-3/4 justify-center gap-4">
        <Link to="/">
          <a className="text-base text-slate-50">Users</a>
        </Link>
        <Link to="/register">
          <a className="text-base text-slate-50">Register</a>
        </Link>
      </div>
      <h1>Total User: {count}</h1>
    </div>
  );
}

export default NavBar;
