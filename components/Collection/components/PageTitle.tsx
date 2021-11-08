const PageTitle = ({title, description, descriptionArray}: any) => {
  return (
    <div className="page-title">
      {title && <h1>{title}</h1>}
      {/* {description && <p>{description}</p>} */}
      {
        descriptionArray && 
        <p>
          {
          descriptionArray?.map((el:string, i:any) => (
              <span key={i}>{el}<br /></span>
            ))
          }
        </p>
      }
    </div>
  )
}

export default PageTitle