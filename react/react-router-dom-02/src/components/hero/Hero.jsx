import "./hero.css";

function Hero() {
  return (
    <main>
      <div class="hero-left">
        <div class="happy-customers">
          <div class="rating-starts">
            <img
              src="https://raw.githubusercontent.com/Salman-itShaala/Batch-17/e66bfc31cf65ee1f0b3bce9086ab0210f8541e5d/day%20-%2049/images/svg/star.svg"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/Salman-itShaala/Batch-17/e66bfc31cf65ee1f0b3bce9086ab0210f8541e5d/day%20-%2049/images/svg/star.svg"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/Salman-itShaala/Batch-17/e66bfc31cf65ee1f0b3bce9086ab0210f8541e5d/day%20-%2049/images/svg/star.svg"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/Salman-itShaala/Batch-17/e66bfc31cf65ee1f0b3bce9086ab0210f8541e5d/day%20-%2049/images/svg/star.svg"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/Salman-itShaala/Batch-17/e66bfc31cf65ee1f0b3bce9086ab0210f8541e5d/day%20-%2049/images/svg/half-star.svg"
              alt=""
            />
            <span>4.5</span>
          </div>
          <p>5k Happy customers</p>
        </div>
        <p class="hero-subheading">Crispy, Crunchy, Veggie Deliciousness!</p>
        <h1>Recipes that love the Earth!</h1>
        <div class="explore-card">
          <a href="">Explore</a>
          <div>
            <img
              src="https://raw.githubusercontent.com/Salman-itShaala/Batch-17/e66bfc31cf65ee1f0b3bce9086ab0210f8541e5d/day%20-%2049/images/svg/play-btn.svg"
              alt=""
            />
            Play demo
          </div>
        </div>
      </div>
      <div class="hero-right">
        <img
          src="https://github.com/Salman-itShaala/Batch-17/blob/main/day%20-%2049/images/hero-burger.png?raw=true"
          class="burger-img"
          alt="Tasty butger"
        />
        <img
          src="https://raw.githubusercontent.com/Salman-itShaala/Batch-17/e66bfc31cf65ee1f0b3bce9086ab0210f8541e5d/day%20-%2049/images/svg/fluid-bg.svg"
          class="fluid-bg"
          alt=""
        />
        <div class="discount-wrapper">
          <p>75% OFF</p>
        </div>
      </div>
    </main>
  );
}

export default Hero;
