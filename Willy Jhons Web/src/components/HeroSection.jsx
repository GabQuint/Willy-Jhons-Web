import { SearchComponent } from "./SearchComponent";
import '../css/styles_main_screen_hero.css'

export const HeroSection = () => {
  return (
    <>
      <div className="hero">
        <div className="logo">
          <img src="/src/assets/logo_willy_jhons.png" alt="" />
        </div>
        <div className="navbar">
          <ul>
            <li>
              <span>Inicio</span>
            </li>
            <li>
              <a href="#">Catálogo</a>
            </li>
            <li>
              <a href="#">Contactanos</a>
            </li>
          </ul>

          <SearchComponent/>
        
        </div>

        <div className="container-slogan">
          <h1 className="slogan">Accesorios que acompañan tus sueños</h1>
        </div>
      </div>
    </>
  );
};
