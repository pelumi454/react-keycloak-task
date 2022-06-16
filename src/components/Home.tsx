import React from "react";

const Home = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Welcome USERNAME
          </h1>
          <p>You are a user</p>
          <p>You are a admin</p>
          <button
            className="text-white bg-red-400 border-0 py-2 px-8 focus:outline-none hover:bg-red-400 rounded text-lg mt-10"
            onClick={() => console.log("Clicked")}
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;