const CollectionFilter = ({title, description}: any) => {
  return (
    <>
      <div className="row">
        <div className="h4 d-flex justify-content-center filter-title">
          {title || 'Title'}
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center text-center filter-description">
          {description || 'Description'}
        </div>
      </div>
      <div className="container filter-input">
        <div className="row">
          <div className="column">
            <div className="">
              <select className="form-control">
                <option>Categories</option>
              </select>
            </div>
          </div>
          <div className="column">
            <div className="">
              <input type="search" placeholder='Search' className="form-control" />
            </div>
          </div>
          <div className="column">
            <div className="">
              <select className="form-control">
                <option>Sort by</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CollectionFilter