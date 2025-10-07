import "./hero.css";

function Hero() {
  return (
    <main>
      <Card
        recipe="Maisur Dosa"
        imgUrl="https://blog.swiggy.com/wp-content/uploads/2024/02/Masala-Dosa-1024x538.jpg"
      />
      <Card
        recipe="Masala Dosa"
        imgUrl="https://tripxl.com/blog/wp-content/uploads/2025/06/Masala-Dosa.jpg"
      />
    </main>
  );
}

function Card(props) {
  // props = {recipe : "Maisur Dosa", imgUrl : ""}

  return (
    <div className="card">
      <img src={props.imgUrl} alt="" />
      <p>{props.recipe}</p>
    </div>
  );
}

export default Hero;
