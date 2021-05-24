import InfoItem from './InfoItem';

const InfoList = ({ info }) => {
  const { ip, location, timezone, isp } = info;

  return (
    <div
      className="m-6 relative -top-36
                     md:-inset-y-20	
                     md:my-6
      "
    >
      <div
        className="
       bg-white text-center mt-4 rounded-xl p-4 max-w-full
       md:grid md:grid-cols-4 md:w-4/6 md:mx-auto md:text-left md:px-0 md:p-0
      "
      >
        <InfoItem border={true} information={ip} text="ip address" />
        <InfoItem border={true} information={location} text="location" />
        <InfoItem border={true} information={timezone} text="timezone" />
        <InfoItem border={false} information={isp} text="isp" />
      </div>
    </div>
  );
};

export default InfoList;
