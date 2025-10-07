import "./header.css";

function Header() {
  return (
    <header>
      <a href="/" className="zerodha-logo">
        <img
          src="https://zerodha.com/static/images/logo.svg"
          alt="Zerodha logo"
        />
      </a>

      <nav>
        <a href="/">Signup</a>
        <a href="/">About</a>
        <a href="/">Products</a>
        <a href="/">Pricing</a>
        <a href="/">Support</a>
      </nav>
    </header>
  );
}

export default Header;
