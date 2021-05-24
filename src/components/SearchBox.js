const SearchBox = () => {
  return (
    <form
      className="flex items-center mb-6 
        md:justify-center
        md:max-w-xl md:mx-auto "
    >
      <input
        type="text"
        placeholder="Search for any ip address or domain"
        className="w-4/5
        h-14
        pl-6
        text-lg
        rounded-l-xl
        md:max-w-3/5
        "
        defaultValue="192.212.174.101"
      />
      <button
        className="
        inline-block
        bg-black
        w-1/5
        h-14
        rounded-r-xl
        md:w-1/12
      "
      >
        <img src="./images/icon-arrow.svg" className="mx-auto" />
      </button>
    </form>
  );
};

export default SearchBox;
