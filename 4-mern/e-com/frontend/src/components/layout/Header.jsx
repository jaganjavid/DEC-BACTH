
import avatar from "../../assets/default_avatar.jpg";
import Search from "./Search";
import { useGetMeQuery } from "../../redux/api/userApi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLazyLogoutQuery } from "../../redux/api/authApi";




const Header = () => {

  const navigate = useNavigate();


  const {isLoading} = useGetMeQuery();

  const {user} = useSelector((state) => state.auth);
  const {cartItems} = useSelector((state) => state.cart);

  const [logout] = useLazyLogoutQuery();

  const logoutHandler = () => {
    logout();
    navigate(0);
  }


  return (
    <nav className="navbar row">
    <div className="col-12 col-md-3 ps-5">
      <div className="navbar-brand">
        <a href="/">
          {/* <img width="150px" src="../images/shop-logo.svg" alt="Ecom Logo" />  */}
           <h4>Shopping</h4>
        </a>
      </div>
    </div>
    <div className="col-12 col-md-6 mt-2 mt-md-0">
     <Search/>
    </div>
    <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
      <a href="/cart" style={{
          textDecoration:"none"
      }}>
        <span id="cart" className="ms-3"> Cart </span>
        <span className="ms-1" id="cart_count">{cartItems.length}</span>
      </a>

      {user ? (
        <div className="ms-4 dropdown">
        <button
          className="btn dropdown-toggle text-white"
          type="button"
          id="dropDownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <figure className="avatar avatar-nav">
            <img
              src={avatar}
              alt="User Avatar"
              className="rounded-circle"
            />
          </figure>
          <span>{user ? user.name : "user"}</span>
        </button>
        <div className="dropdown-menu w-100" aria-labelledby="dropDownMenuButton">
          <Link className="dropdown-item" to="/admin/dashboard"> Dashboard </Link>

          <Link className="dropdown-item" to="/me/orders"> Orders </Link>

          <Link className="dropdown-item" to="/me/profile"> Profile </Link>

          <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}> Logout </Link>
        </div>
      </div>
      ) : (
         !isLoading && (
          <Link to="/login" className="btn ms-4" id="login_btn"> Login </Link>
         )
      )}
    </div>
  </nav>
  )
}

export default Header