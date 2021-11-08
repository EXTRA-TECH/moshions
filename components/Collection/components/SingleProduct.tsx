const SingleProductWithBox = ({dataSource}: any) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <div className="w-100p item">
        <img
          src={dataSource.imageUrl}
          alt=""
          className="w-100p"
          srcSet=""
        />
        <div className="item-details">
          <div className="item-label">
            <h4>{dataSource.name}</h4>
            <span>RWF 310,000</span>
          </div>
          {
            dataSource?.colors?.map((el: any, i: number) => (
              <span key={i} className={`${el} item-color`}></span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SingleProductWithBox