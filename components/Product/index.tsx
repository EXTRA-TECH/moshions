/* eslint-disable react/jsx-key */
import MainContainer from '../MainContainer';
import { useState } from 'react';
import ProductAccord from '../Products/components/ProductAccordation';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { PRODUCT, CHECKOUT_CREATE } from './queries';
import { useEffect } from 'react';
import Link from 'next/link';
import { priceToString } from '../../lib/helpers';
import {
  useCart,
  useProductList,
  useProductDetails,
  useCategoryList,
} from '@saleor/sdk';
import Loader from '../../components/Loader';
import ReactImageMagnify from 'react-image-magnify';
import InnerImageZoom from 'react-inner-image-zoom';
import CollectionProduct from '../Category/components/CollectionProduct';
import { CATEGORY } from '../Category/queries';

const ProductComponent = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addItem } = useCart();

  const {
    data: catData,
    loading: catLoading,
    error,
  } = useQuery(CATEGORY, {
    variables: {
      slug: 'men',
    },
  });

  const {
    data,
    loading,
    refetch: refetchProduct,
  } = useQuery(PRODUCT, {
    variables: {
      id,
    },
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [image, setImage] = useState(data?.product?.images[0]?.url);

  if (loading) {
    return <Loader />;
  }

  if (data) {
    console.log('product>>>', data?.product?.variants);
  }

  let defaultImage = '';

  if (data?.product?.images[0]?.url) {
    defaultImage = data?.product?.images[0]?.url;
  }

  const handleChangeImage = (imgUrl: string) => {
    setImage(imgUrl);
  };

  const onChangeVariant = (variantId: any) => {
    setSelectedItem(variantId);
  };

  const imageProps = {
    smallImage: {
      alt: 'Phasellus laoreet',
      isFluidWidth: true,
      src: image || defaultImage,
    },
    largeImage: {
      src: image || defaultImage,
      width: 1200,
      height: 1800,
    },
    enlargedImageContainerStyle: { background: '#fff', zIndex: 9 },
  };

  return (
    <>
      <MainContainer>
        <div className='product-section py-5'>
          <div className='container'>
            <nav id='breadcrumb-arrow' aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <Link href='/'>
                    <a href='#'>Home</a>
                  </Link>
                </li>
                <li className='breadcrumb-item'>
                  <Link
                    href={`/products?category=${data?.product?.category?.slug}`}>
                    <a href='#'>{data?.product?.category?.name}</a>
                  </Link>
                </li>
                <li className='breadcrumb-item active'>
                  {data?.product?.name}
                </li>
              </ol>
            </nav>
            <div className='row'>
              <div className='col-lg-7 col-md-7 col-ms-12 col-xs-12 pr--40'>
                <div className='row'>
                  <div className='col-md-3'>
                    {data?.product?.images?.map((el: any, i: any) => (
                      <img
                        key={i}
                        src={el.url}
                        onClick={() => handleChangeImage(el.url)}
                        className='w-100 other-img'
                        alt=''
                      />
                    ))}
                  </div>
                  <div className='col-md-9' id='document'>
                    {/* <img 
                      src={image || defaultImage} 
                      onMouseMove={onMouseMoveImage} 
                      onMouseDown={onMouseDownImage} 
                      onMouseUp={onMouseUpImage}
                      onWheel={onWheelImage}
                      className="w-100 img-zoom" 
                      alt="" /> */}
                    {/* <ReactImageMagnify {...imageProps} /> */}
                    <InnerImageZoom
                      src={image || defaultImage}
                      zoomSrc={image || defaultImage}
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-5 col-md-5 col-ms-12 col-xs-12 py-2'>
                <h3 className='product-name'>{data?.product?.name}</h3>
                <h4 className='product-price'>
                  {data &&
                    priceToString(
                      {
                        amount:
                          data?.product?.pricing?.priceRange?.start?.net
                            ?.amount || 0,
                        currency: 'RWF',
                      },
                      'RWF'
                    )}{' '}
                </h4>
                {data &&
                  data?.product?.metadata.filter(
                    (el: any) => el.key === 'color'
                  ).length > 0 && (
                    <div className='w-100p'>
                      <p className='option-title'>Colour</p>
                      <div className='product-colors'>
                        {data &&
                          data?.product?.metadata?.map((el: any, i: any) => {
                            if (el.key === 'color') {
                              return (
                                <span key={i} className=''>
                                  <input
                                    type='radio'
                                    name='color'
                                    // id="black"
                                    style={{ backgroundColor: `${el.value}` }}
                                    className='d-none show-check'
                                  />
                                  <label
                                    htmlFor='color'
                                    className='product-color'
                                    style={{
                                      backgroundColor: el.value,
                                      color: `${el.value}`,
                                    }}></label>
                                </span>
                              );
                            }
                            return null;
                          })}
                      </div>
                    </div>
                  )}
                <div className='w-100p'>
                  <p className='option-title'>Size</p>
                  <div className='d-flex-separetes min-width-350'>
                    <div className='product-sizes'>
                      {data?.product?.variants?.map((el: any, i: any) => {
                        return (
                          <>
                            {el?.attributes?.map((element: any, i: any) => {
                              if (el?.id === selectedItem) {
                                return (
                                  <span
                                    className='size'
                                    onClick={() => onChangeVariant(el?.id)}
                                    style={
                                      el?.id === selectedItem
                                        ? {
                                            backgroundColor: 'black',
                                            color: 'white',
                                          }
                                        : {}
                                    }>
                                    {/* <input
                                          type="radio"
                                          name="size"
                                          id="M"
                                          onClick={() => onChangeVariant(el?.id)}
                                          className={`d-none`}
                                          
                                        />
                                        <label htmlFor="M" className="size" style={el?.id === selectedItem ? {backgroundColor: 'black', color: 'white'} : {}}>{element?.values[0]?.name}</label> */}
                                    {element?.values[0]?.name}
                                  </span>
                                );
                              } else {
                                return (
                                  <span
                                    className='size'
                                    onClick={() => onChangeVariant(el?.id)}>
                                    {/* <input
                                          type="radio"
                                          name="size"
                                          id="M"
                                          onClick={() => onChangeVariant(el?.id)}
                                          className={`d-none`}
                                          
                                        />
                                        <label htmlFor="M" className="size" style={el?.id === selectedItem ? {backgroundColor: 'black', color: 'white'} : {}}>{element?.values[0]?.name}</label> */}
                                    {element?.values[0]?.name}
                                  </span>
                                );
                              }
                            })}
                          </>
                        );
                      })}
                    </div>
                    <a href='#' className='text-muted'>
                      SIZE GUIDE
                    </a>
                  </div>
                  <div className='py-3'>
                    {JSON.parse(data?.product?.description).blocks?.map(
                      (el: any, i: number) => (
                        <p key={i}>{el?.data.text}</p>
                      )
                    )}
                    {/* {console.log(JSON.parse(data?.product?.description).blocks[0].data.text)} */}
                  </div>
                  <div className='d-flex-start mt-3'>
                    <a
                      data-bs-toggle='offcanvas'
                      href='#offcanvasRight'
                      role='button'
                      aria-controls='offcanvasRight'
                      onClick={() => {
                        if (selectedItem) {
                          addItem(selectedItem, 1);
                          refetchProduct({
                            variables: {
                              id,
                            },
                          });
                        }
                      }}
                      className={`btn min-width-350 fw-600 ${
                        selectedItem === null ? 'disabled' : 'btn-dark'
                      }`}
                      id={`${selectedItem === null ? 'cart-disabled' : ''}`}
                      style={{ border: '1px solid grey' }}>
                      ADD TO CART
                    </a>
                    {/* <img
                      src="/assets/Icon feather-heart@2x.svg"
                      className="header-icon"
                      alt=""
                      srcSet=""
                    /> */}
                  </div>
                </div>
                <ProductAccord
                  description={JSON.parse(data?.product?.description).blocks}
                />
              </div>
            </div>
          </div>
          <div className='h5 pt-5 text-center text-uppercase'>
            Related Collection
          </div>
          <div className='row py-3'>
            <CollectionProduct
              dataSource={catData?.category?.products?.edges}
            />
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default ProductComponent;
