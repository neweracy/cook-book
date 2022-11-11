import * as react from "react";
import Recipe from "./content";
import "./api.css";
import data from "./data.json";
import * as ReactBootstrap from "react-bootstrap";

const Api = () => {
  const [Loading, setLoading] = react.useState(false);

  react.useEffect(() => {
    recipeList();
  }, [1]);

  //search bar
  const searchBar  = () => {
    return <div className=" max-h-full max-w-full flex justify-center mt-3">
      <h1>searchBar</h1>
    </div>;
  };

  //hero section
  const heroSection = () => {
    return <div className="max-h">hero secton</div>;
  };

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
      <section id="searchBar">
      {searchBar()}
      </section>
      <section id="heroSection">
        {heroSection()}
      </section>
      <section id="recipeList">
        <div className="App text-center max-w-full max-h-full mt-2 justify-center">
          {Loading ? (
            data &&
            data.map((data) => (
              <div className="">
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  <h1>{data.title}</h1>
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
