import React from 'react'

const HeroSection = ({img}) => {
    return (
      <section class="px-3  py-5 bg-amber-100 lg:py-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-bold md:text-7xl text-orange-600">
              Basic
            </p>
            <p className="text-4xl font-bold md:text-7xl">recipe list</p>
            <p className="mt-2 text-sm md:text-lg">neweracy</p>
            <a href="#recipeList">
              <button className="text-lg md:text-2xl rounded bg-gray-600 hover:bg-slate-600 text-white py-2 px-5 mt-10 ">
                Recipes
              </button>
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <img
              className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
              src={img}
              alt=""
            />
          </div>
        </div>
       
      </section>
    );
  };
  export default HeroSection;