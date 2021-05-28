import '../App.css';
const LoadingIcon = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <img
        className="animate-pulse loading-icon"
        src="./images/icon-location.svg"
        alt="icon location"
      />
    </div>
  );
};

export default LoadingIcon;
