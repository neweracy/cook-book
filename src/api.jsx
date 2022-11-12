import * as react from "react";
import picture from "./wasa-crispbread-0P-cY9tUNnY-unsplash.jpg";
import "./api.css";
import data from "./data.json";
import SearchBar from "./seacrchBar";
import * as ReactBootstrap from "react-bootstrap";
import HeroSection from "./heroSection";

const Api = () => {
  const [Loading, setLoading] = react.useState(false);

  react.useEffect(() => {
    recipeList();
  }, [1]);
  
  //recipelist
  const recipeList = async () => {
    setLoading(true);
    const reData =
      (await data) &&
      data.map((data) => (
        <div className="">
          <h1>g</h1>
        </div>
      ));
    console.log(reData);
  };

  return (
    <div className="max-w-full max-h-full">
      <section id="searchBar"className="sticky top-0">
        
            <SearchBar fullData={data}/>
          
      </section>
      <section id="heroSection" className=""><HeroSection img={picture}/></section>
      <section id="recipeList">
        <div className="App text-center cursor-pointer max-w-full max-h-full mt-2 justify-center">
          {Loading ? (
            data &&
            data.map((data) => (
              <div className="">
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  <h1>{data.title}</h1>
                  <div className="flex justify-center ">
                    <img src={data.img} alt="" />
                  </div>
                </a>
              </div>
            ))
          ) : (
            <ReactBootstrap.Spinner animation="border" />
          )}
        </div>
      </section>
    </div>
  );
};
export default Api;
