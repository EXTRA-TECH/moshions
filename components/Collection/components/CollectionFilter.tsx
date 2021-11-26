const CollectionFilter = ({title, description}: any) => {
  return (
    <div className="collection-options">
      <div className="options-container">
        <div className="option">
          <span>Category</span>
          <img
            src="/assets/Icon ionic-ios-arrow-down.svg"
            alt=""
            srcSet=""
          />
        </div>
        <div className="option">
          <span>Color</span>
          <img
            src="/assets/Icon ionic-ios-arrow-down.svg"
            alt=""
            srcSet=""
          />
        </div>
        <div className="option">
          <span>Size</span>
          <img
            src="/assets/Icon ionic-ios-arrow-down.svg"
            alt=""
            srcSet=""
          />
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
          <img
            src="/assets/Icon ionic-ios-arrow-down.svg"
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </div>
  )
}

export default CollectionFilter