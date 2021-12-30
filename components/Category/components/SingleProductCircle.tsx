const SingleProductWithCircle = () => {
  return (
    <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
      <div className='w-100p item'>
        <img src='/assets/product1.svg' alt='' className='w-100p' srcSet='' />
        <div className='item-details'>
          <div className='item-label'>
            <h4>Josi Dress</h4>
            <span>RWF 310,000</span>
          </div>
          <span className='bg-black item-color'></span>
        </div>
      </div>
    </div>
  );
};

export default SingleProductWithCircle;
