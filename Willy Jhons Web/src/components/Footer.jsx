import '../css/styles_main_screen_footer.css'

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerBackground">
          <div className="containerFooter">
            <div className="logoFooter">
          <img src="/src/assets/logo_willy_jhons.png" alt="" />
          </div>
          <h2 className="aboutUs">
            We are a company dedicated to the marketing and production of 925
            Silver, Steel, Gold Laminated Jewelry and our watch brands Tempus,
            Yess and C&O. With the presence of our stores in Miami, Costa Rica,
            Panama, Colombia, Venezuela, Ecuador, Peru, Chile, Argentina.
          </h2>
          
          <div className="containerFbIg">
          <div className="fb">
            <img src="/src/assets/icon/fb.png" alt="" />
          </div>
          <div className="ig">
            <img src="/src/assets/icon/ig.png" alt="" />
          </div>
          </div>
          </div>      
          
        </div>
      </footer>
    </>
  );
};
