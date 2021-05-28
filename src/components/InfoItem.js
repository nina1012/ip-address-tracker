const InfoItem = ({ information, text }) => {
  return (
    <div className="element py-2 md:mx-4 md:my-4  break-normal md:leading-6">
      <span
        className="uppercase tracking-widest"
        style={{
          color: 'hsl(0, 0%, 59%)',
          fontSize: '0.75rem',
          fontWeight: '600'
        }}
      >
        {text}
      </span>
      <div className="font-medium text-xl md:w-8/12 md:mt-1 md:text-lg lg:text-2xl">
        {typeof information == 'string' ? information : information.join(', ')}
      </div>
    </div>
  );
};

export default InfoItem;
