import InfoItem from './InfoItem';

const InfoList = ({ info }) => {
  const {
    ip,
    location: { city, region, country, timezone },
    isp
  } = info;

  return (
    <div className="m-6 relative -top-36 md:-inset-y-32 lg:-inset-y-24 md:my-6">
      <div
        className="bg-white text-center mt-4 rounded-xl p-4 max-w-full
       md:grid md:grid-cols-auto-fit-medium lg:grid-cols-auto-fit 
       md:justify-evenly md:w-5/6 md:mx-auto md:text-xs
        md:text-left md:px-4 md:p-0 md:max-w-7xl
      "
      >
        <InfoItem border={true} information={ip} text="ip address" />
        <InfoItem
          border={true}
          information={[city, region, country]}
          text="location"
        />
        <InfoItem border={true} information={timezone} text="timezone" />
        <InfoItem border={false} information={isp} text="isp" />
      </div>
    </div>
  );
};

export default InfoList;
