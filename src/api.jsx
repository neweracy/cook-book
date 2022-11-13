import * as react from "react";
import picture from "./wasa-crispbread-0P-cY9tUNnY-unsplash.jpg";
import "./api.css";
import data from "./data.json";
import SearchBar from "./searchBar";
import * as ReactBootstrap from "react-bootstrap";
import HeroSection from "./heroSection";

const Api = () => {
  const [Loading, setLoading] = react.useState(false);
  const [SearchRecipe, setSearchRecipe] = react.useState("");

  const dataSort = data.sort((a, b) => a.title.localeCompare(b.title));

  react.useEffect(() => {
    rList();
  }, [1]);

  const rList = async () => {
    setLoading(true);
    const reData =
      (await dataSort) &&
      data.map((data) => (
        <div className="">
          <h1>g</h1>
        </div>
      ));
    console.log(reData);
  };

  //sort data

  //SearchRecipe function
  const filterRecipe = dataSort.filter((data) => {
    return SearchRecipe !== ""
      ? data.title.toLowerCase().includes(SearchRecipe.toLowerCase())
      : data;
  });

  //recipelist
  const recipeList = () => {
    const list =
      filterRecipe &&
      filterRecipe.map((data, keyInfo) => (
        <div key={keyInfo} className="">
          <a className="" href={data.url} target="_blank" rel="noopener noreferrer">
            <div className=" p-4 sm:w-full md:w-full  ">
              <div className="h-full border-2 bg-amber-200 hover:bg-yellow-50 shadow-sm hover:text-gray-500 transition duration-300 ease-in border-amber-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-44 w-full object-cover object-center max-h-full "
                  src={data.img}
                  alt=""
                />
                <div className="p-6  ">
                  <h2 className="text-base font-medium text-orange-600 mb-1">
                    13th November 2022
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">
                    {data.category}
                  </h1>
                  <p className="leading-relaxed mb-3">{data.title}</p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-orange-600 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                    </a>

                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      ></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      ));
    console.log(list);

    return list;
  };

  return (
    <div className="max-w-full max-h-full">
      <section id="searchBar" className="sticky top-0">
        <SearchBar fullData={setSearchRecipe} />
      </section>
      <section id="heroSection" className="">
        <HeroSection img={picture} />
      </section>
      <section id="recipeList" className="bg-yellow-100">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5  text-center cursor-pointer max-w-full max-h-full py-32  ">
          {Loading ? (
            recipeList()
          ) : (
            <ReactBootstrap.Spinner animation="border" />
          )}
        </div>
      </section>
    </div>
  );
};
export default Api;
