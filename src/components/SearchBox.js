const SearchBox = ({ handleSubmit, handleChange }) => {
  return (
    <form
      onSubmit={e => handleSubmit(e)}
      className="flex items-center mb-6 md:justify-center hover:cursor-pointer md:max-w-xl md:mx-auto  "
    >
      <input
        type="text"
        placeholder="Search for any ip address or domain"
        className="w-4/5 overflow-ellipsis h-14 pl-6 text-lg rounded-l-xl md:max-w-3/5 "
        onChange={e => handleChange(e)}
      />
      <button className="inline-block bg-black w-1/5 h-14 rounded-r-xl md:w-16 hover:bg-gray-700 ">
        <img
          src="./images/icon-arrow.svg"
          className="mx-auto"
          alt="arrow icon"
        />
      </button>
    </form>
  );
};

export default SearchBox;
