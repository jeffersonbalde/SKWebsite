const Location = () => {
  return (
    <div className="my-20 w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7905.189379240721!2d123.44143209037115!3d7.8326490187536795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325422ac2a5f4ba3%3A0xae10532ce1df84e7!2sLumbia%2C%20Pagadian%20City%2C%20Zamboanga%20del%20Sur!5e0!3m2!1sen!2sph!4v1711582057831!5m2!1sen!2sph"
        width="600"
        height="450"
        style={{ border: "0" }}
        // allowFullScreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
        className="w-full h-[30rem]"
      ></iframe>
    </div>
  );
};

export default Location;
