const PageTitle = ({title, description}: any) => {
  return (
    <div className="page-title">
      <h1>{title || 'MOSHIONS'}</h1>
      <p>
        {`A new array of tops, jackets, cardigans, skirts`} <br /> and pants with finest embroidery, beadwork and custom prints.
      </p>
    </div>
  )
}

export default PageTitle