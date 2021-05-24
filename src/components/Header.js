import SearchBox from './SearchBox';

const Header = ({ info }) => {
  return (
    <header
      // background images is put inline absolute z-50 top-0 left-0
      style={{ backgroundImage: 'url("./images/pattern-bg.png")' }}
      className="
      w-full
      max-w-10/12
    bg-blue-600 h-72
    bg-cover
    bg-center
    p-6
    relative
    md:max-h-64
    "
    >
      <h1
        className="
      text-white
      font-medium 
      text-center
      text-2xl
      mb-6
      md:mb-7
      md:text-3xl
      "
      >
        IP Address Tracker
      </h1>
      <SearchBox />
    </header>
  );
};

export default Header;
