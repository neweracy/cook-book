//search bar
const SearchBar = ({ fullData }) => {
  return (
    <div className=" ">
      <div class="relative max-w-full w-full  bg-yellow-50 px-6 pt-10 pb-8 shadow-md ring-1 ring-gray-900/5 sm:px-8 ">
        <div class="mx-auto max-w-md">
          <form action="" class="relative mx-auto w-max">
            <input
              type="search"
              placeholder="Search Recipes"
              onChange={(e) => fullData(e.target.value)}
              class="peer relative z-10 h-12 w-12 cursor-pointer rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-orange-300 focus:pl-16 focus:pr-4"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-black px-3.5 peer-focus:border-orange-300 peer-focus:stroke-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
