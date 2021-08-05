import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="left">
          <img
            src="http://droitthemes.com/wp/mak/wp-content/uploads/2018/10/about_shap_bg.png"
            alt=""
          />
          <h1>Qui Suis-je</h1>
        </div>
        <div className="right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nu pariatur excepteur sint occaecat.
          </p>
          <div className="btn">
            <a href="#works">View Works</a>
            <a href="#id">Télécharger le CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}
