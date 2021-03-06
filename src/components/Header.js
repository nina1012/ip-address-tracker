import SearchBox from './SearchBox';

const Header = ({ handleSubmit, handleChange }) => {
  return (
    <header
      // background image is put inline absolute z-50 top-0 left-0
      style={{ backgroundImage: 'url("./images/pattern-bg.png")' }}
      className="w-full max-w-10/12 bg-blue-600 h-72 bg-cover bg-no-repeat p-6 relative md:max-h-68 "
    >
      <h1 className="text-white font-medium  text-center text-2xl mb-6 md:mt-2 md:mb-7 md:text-3xl ">
        IP Address Tracker
      </h1>
      <SearchBox handleSubmit={handleSubmit} handleChange={handleChange} />
    </header>
  );
};

export default Header;
