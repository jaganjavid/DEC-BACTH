
import avatar from "../../assets/default_avatar.jpg";

const Header = () => {
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
    <form className="mb-0">
    <div className="input-group">
      <input
        type="text"
        id="search_field"
        aria-describedby="search_btn"
        className="form-control"
        placeholder="Enter Product Name ..."
      />
      <button id="search_btn" className="btn" type="submit">
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </div>
  </form>
    </div>
    <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
      <a href="/cart" style={{
          textDecoration:"none"
      }}>
        <span id="cart" className="ms-3"> Cart </span>
        <span className="ms-1" id="cart_count">0</span>
      </a>

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
          <span>User</span>
        </button>
        <div className="dropdown-menu w-100" aria-labelledby="dropDownMenuButton">
          <a className="dropdown-item" href="/admin/dashboard"> Dashboard </a>

          <a className="dropdown-item" href="/me/orders"> Orders </a>

          <a className="dropdown-item" href="/me/profile"> Profile </a>

          <a className="dropdown-item text-danger" href="/"> Logout </a>
        </div>
      </div>

      <a href="/login" className="btn ms-4" id="login_btn"> Login </a>
    </div>
  </nav>
  )
}

export default Header