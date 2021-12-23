const CollectionFilter = ({title, description}: any) => {
  return (
    <div className="collection-options">
      <div className="options-container">
        <div className="option">
          <span className="font-weight-light">Category</span>
          <i className="bi bi-chevron-down"></i>
        </div>
        <div className="option">
          <span>Color</span>
          <i className="bi bi-chevron-down"></i>
        </div>
        {/* <div className="option">
          <span>Size</span>
          <i className="bi bi-chevron-down"></i>
        </div> */}
        <div className="filter-dropdown dropdown show">
          <button  className="btn btn-default dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span>Size</span>
            <i className="bi bi-chevron-down"></i>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
      <div className="options-container">
        <div className="option d-flex-start">
          <span>Model view</span>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
        <div className="option">
          <span>Sort By</span>
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
      
    </div>
  )
}

export default CollectionFilter