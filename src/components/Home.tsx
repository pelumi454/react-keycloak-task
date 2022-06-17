import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import heroBg from "../../src/assets/images/hero-phone-bg.svg";
import './home.css'

const Home = () => {
  const authContext = useContext(AuthContext);

  return (
    <section>
          <div className="slider-section">
            <div className="slider-wrap">
              <div className="slider-text-wrap">
                <h1 className="username">Hello {authContext.username}!</h1>
                <div className="slider-text">Shop the Latest Iphones</div>
                <button className="show-now">Shop Now</button>
                <button
                  className="text-white bg-red-400 border-0 py-2 px-8 text-lg mt-10 logout-btn show-now"
                  onClick={authContext.logout}
                >
                  Logout
                </button>
              </div>
              <div className="slider-image-wrap">
                <img src={heroBg} alt="" className="slider-image" />
              </div>
            </div>
      </div>
    </section>
  );
};

export default Home;
