const SingleImage = () => {
  return (
    <section id='video' className='single-image hide-small-phone'>
      {/* <img src="/assets/Video 1.jpg" alt="" srcSet="" /> */}
      <video
        className='p-0 mb---10 w-100p'
        src='http://moshions.rw/wp-content/uploads/2021/11/Ingoma-The-call-for-Imandwa-Exhbition-Moshions-.mp4'
        autoPlay={true}
        loop={true}
        controlsList='nodownload'></video>
    </section>
  );
};

export default SingleImage;
