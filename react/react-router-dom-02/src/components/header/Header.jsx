import "./header.css";

function Header() {
  return (
    <header>
      <div className="header-left">
        <a href="/">
          <img
            src="https://raw.githubusercontent.com/Salman-itShaala/Batch-17/e66bfc31cf65ee1f0b3bce9086ab0210f8541e5d/day%20-%2049/images/svg/burger-logo.svg"
            alt="Burger logo"
          />
          Taste Vibes
        </a>
      </div>
      <nav className="header-center">
        <a href="/">Home</a>
        <a href="/">Shop</a>
        <a href="/">Manual</a>
        <a href="/">Order</a>
      </nav>
      <div className="header-right">
        <img
          onclick="toggleSearchBox()"
          src="https://raw.githubusercontent.com/Salman-itShaala/Batch-17/e66bfc31cf65ee1f0b3bce9086ab0210f8541e5d/day%20-%2049/images/svg/search-icon.svg"
          alt=""
        />
        <img
          src="https://raw.githubusercontent.com/Salman-itShaala/Batch-17/e66bfc31cf65ee1f0b3bce9086ab0210f8541e5d/day%20-%2049/images/svg/option-bars.svg"
          alt=""
        />
      </div>
      <div className="search-wrapper" id="search-container">
        <div className="search-box">
          <div className="search-input-wrapper">
            <input
              type="search"
              id="recipe-input"
              placeholder="Search recipe..."
            />
            <button onclick="toggleSearchBox()">Close</button>
          </div>

          <div className="search-recipes-list" id="recipes-list"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
