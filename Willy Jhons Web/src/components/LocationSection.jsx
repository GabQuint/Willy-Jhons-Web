import "../css/styles_main_screen_location.css";

export const LocationSection = () => {
  return (
    <>
      <h1 className="titleUbi">
        <span>Ubic</span>anos
      </h1>
      <div className="containerUbi">
        <div className="imageUbi"></div>
        <h2 className="direction">
          Avenida 3 entre calle 14 y 16, Plaza Comercial Centro Uno, local
          Joyería Willy Johns. San José
        </h2>
        <img src="/src/assets/icon/location.svg" alt="" />
      </div>
    </>
  );
};
