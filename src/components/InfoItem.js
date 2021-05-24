const InfoItem = ({ information, text, border }) => {
  return (
    <div
      className="py-2 md:mx-4 md:my-8  break-normal"
      style={{ borderRight: border && '1px solid hsl(0, 0%, 59%)' }}
    >
      <span
        className="uppercase font-medium tracking-widest"
        style={{ color: 'hsl(0, 0%, 59%)', fontSize: '0.6rem' }}
      >
        {text}
      </span>
      <div className="font-medium text-xl md:w-8/12 md:mt-1 md:text-2xl">
        {information}
      </div>
    </div>
  );
};

export default InfoItem;
