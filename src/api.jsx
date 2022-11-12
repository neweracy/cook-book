import * as react from "react";
import picture from "./wasa-crispbread-0P-cY9tUNnY-unsplash.jpg";
import "./api.css";
import data from "./data.json";
import SearchBar from "./searchBar";
import * as ReactBootstrap from "react-bootstrap";
import HeroSection from "./heroSection";

const Api = () => {
  const [Loading, setLoading] = react.useState(false);
  const [modal, setModal] = react.useState(false);
  const [SearchRecipe, setSearchRecipe] = react.useState("");


  const dataSort = data.sort((a,b) => a.title.localeCompare(b.title));


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
          <a className="  " href={data.url} target="_blank" rel="noopener noreferrer">
            <h1>{data.title}</h1>
            <div className="flex justify-center ">
              <img src={data.img} alt="" />
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
      <section id="recipeList">
        <div className="App text-center cursor-pointer max-w-full max-h-full mt-2 justify-center">
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
