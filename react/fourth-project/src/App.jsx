import "./App.css";

function App() {
  let isLoggedIn = true;

  const isVisible = false;

  let sports = [];

  return (
    <>
      <Sports sports={sports} />

      {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      {isVisible && <p>Hii there I'm para</p>}
    </>
  );
}

function Sports({ sports }) {
  if (sports.length === 0) {
    return <p>Sports array is empty</p>;
  }

  return (
    <div>
      <p>{sports[0]}</p>
      <p>{sports[1]}</p>
      <p>{sports[2]}</p>
    </div>
  );
}

function Alert({ styles, text, fontColor }) {
  return (
    <div className={styles}>
      <p>
        {text} font color is {fontColor}
      </p>
    </div>
  );
}

export default App;
