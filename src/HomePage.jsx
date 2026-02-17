import products from "./data.js";



function HomePage()
{
    return (
        <>
        <header>
            <div className="navbar">
        {/* Logo */}
        <div className="nav-logo">
          <div className="logo"></div>
        </div>

        {/* Address / Location */}
        <div className="nav-address">
          <p className="add-first">Share resource</p>
          <div className="icon">
            <i class="fa-solid fa-share"></i>
            <p className="add-sec">
              <b>Upload</b>
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="nav-search">
          <select className="all">
            <option>All</option>
            <option>Amazon Devices</option>
            <option>Books</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home & Kitchen</option>
            <option>Beauty & Personal Care</option>
            <option>Computers</option>
            <option>Mobiles</option>
            <option>Appliances</option>
            <option>Grocery</option>
            <option>Toys & Games</option>
          </select>

          <input
            placeholder="Search Resources"
            className="search-box"
          />
          <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        {/* Language */}
        <div className="nav-language">
          <i className="fa-solid fa-globe"></i>
          <select className="lang-select">
            <option>EN</option>
            <option>HINDI</option>
            <option>FRENCH</option>
            <option>ES</option>
          </select>
        </div>

        {/* Sign In / Account */}
        <div className="sign-in">
          <p className="nav-sign">Hello, sign in</p>
          <div className="account-dropdown">
            <label htmlFor="account" style={{ fontWeight: 700 }}>
              Accounts & Lists
            </label>
            <select className="account" id="account">
              <option value="your-account">Your Account</option>
              <option value="orders">Your Orders</option>
              <option value="wishlist">Your Wishlist</option>
              <option value="recommendations">Your Recommendations</option>
              <option value="sign-out">Sign Out</option>
            </select>
          </div>
        </div>

        {/* Returns & Orders */}
        <div className="nav-return">
          <p className="returns">Returns</p>
          <p className="orders">& Rents</p>
        </div>

        {/* Cart */}
        <div className="nav-cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <p className="cart-text">My Purchase</p>
        </div>
      </div>

      {/* Panel / Categories */}
      <div className="panel">
        <div className="panel-all">
          <i className="fa-solid fa-bars"></i>
          All
        </div>

        <div className="panel-ops">
          <p>Home</p>
          <p>Categories</p>
          <p>Trending</p>
          <p>Best Seller's</p>
          <p>Today's Deals</p>
          <p>New Resources</p>
          <p>Featured Contributor</p>
          <p>About</p>
          
        </div>
      </div>
        </header>

        
        {/*PRODUCTS*/}
        <div className="shop-section">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            <p className="desc">{product.desc}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>



      {/* FOOTER */}
      
        <footer className=" pt-4 mt-5">
      <div className="container">
        <div className="row">

          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>MyStore</h5>
            <p>
              Your trusted platform for quality products at the best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a href="#" className="text-light me-3 fs-4">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-light me-3 fs-4">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-light me-3 fs-4">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#" className="text-light fs-4">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center pb-3">
          <p className="mb-0">© 2026 MyStore. All Rights Reserved.</p>
        </div>
      </div>
    </footer>



        </>
    )
}

export default HomePage;