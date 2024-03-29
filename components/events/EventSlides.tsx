const EventSlides = ({
  slide,
}: {
  slide: {
    bgImg: string;
    title: string;
    brief: string;
  };
}) => {
  return (
    <a
      href="#"
      className="img-bg d-flex align-items-end events w-full h-96"
      style={{ backgroundImage: `url(/${slide.bgImg})` }}  
    >
      <div className="img-bg-inner">
        <h2>{slide.title}</h2>
        <p>{slide.brief}</p>
      </div>
    </a>
  );
};

export default EventSlides;
