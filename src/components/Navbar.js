import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Shopping Cart
          </a>
          <button type="button" class="btn btn-primary">
  Items in the Cart <span class="badge text-bg-secondary">{this.props.totalItem}</span>
</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
