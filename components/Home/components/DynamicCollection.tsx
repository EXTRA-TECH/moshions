import Link from 'next/link'
import {CATEGORIES} from "../../MainMenu/queries"

const DynamicCollection = ({dataSource, row, categorySource, loading}:any) => {
  if (row % 2 === 0) {
    return (
      <>
        <h1 className="title show-small-mobile">{dataSource?.node?.name}</h1>
  
        <section className="single-image-text small-reverse bg-dark-gray">
          <div className="section-text-container">
            <h1>{dataSource?.node?.name}</h1>
  
            <ul>
              {loading && <button className="btn btn-light" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                <span className="visually-hidden">Loading...</span>
              </button>
              }
              {
                categorySource?.categories?.edges?.map((el:any, i:any) => {
                  return (
                    <li key={i}>
                      <Link href={`/collection/${el.node.slug}`}>
                        <a href="#" className="text-uppercase">{el.node.name}</a>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="section-image-holder">
            <img src={dataSource?.node?.backgroundImage?.url} alt="" />
          </div>
        </section>
      </>
    )
  }
  return (
    <>
      <h1 className="title show-small-mobile">{dataSource?.node?.name}</h1>
      <section className="single-image-text gold-section reserse">
        <div className="section-image-holder">
          <img src={dataSource?.node?.backgroundImage?.url || "/assets/Image Wrapper2.svg"} alt="" />
        </div>

        <div className="section-text-container">
          <h1>{dataSource?.node?.name}</h1>

          <ul>
            {loading && <button className="btn btn-light" type="button" disabled>
              <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              <span className="visually-hidden">Loading...</span>
            </button>
            }
            {
              categorySource?.categories?.edges?.map((el:any, i:any) => {
                return (
                  <li key={i}>
                    <Link href={`/collection/${el?.node?.slug}`}>
                      <a href="#" className="text-uppercase">{el.node.name}</a>
                    </Link>
                  </li>
                )
              })
            }
            {!loading && <li><Link href="/brand"><a href="#">THE BRAND</a></Link></li>}
          </ul>
        </div>
      </section>
    </>
  )
}

export default DynamicCollection