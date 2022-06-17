import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import heroBg from "../../assets/images/hero-phone-bg.svg";


const Home = () => {
  const authContext = useContext(AuthContext);

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800">
            Welcome {authContext.username}
          </h1>
          <div className="slider-section">
            <div className=" d-flex ">
              <div className="slider-text-wrap">
                <div className="slider-text">Shop the Latest Iphones</div>
                <button className="show-now">Shop Now</button>
              </div>
              <div className="slider-image-wrap">
                <img src={heroBg} alt="" className="slider-image" />
              </div>
            </div>
          </div>
          {/* Show different content based on the roles the user has assigned. */}
          {authContext.hasRole("user") && <p>You are a user</p>}
          {authContext.hasRole("admin") && <p>You are a admin</p>}
          <button
            className="text-white bg-red-400 border-0 py-2 px-8 focus:outline-none hover:bg-red-400 rounded text-lg mt-10"
            onClick={authContext.logout}
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
