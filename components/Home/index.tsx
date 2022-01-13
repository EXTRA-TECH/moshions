import Head from 'next/head';
import Header from './components/header';
import SingleImage from './components/singleImage';
import Loader from '../Loader';
import SingleImageTextLeft from './components/singleImageTextLeft';
import SingleImageTextRight from './components/singleImageTextRight';
import DynamicCollection from './components/DynamicCollection';
import Footer from '../Footer';
import { COLLECTIONS } from './queries';
import { CATEGORIES } from '../MainMenu/queries';
import { useQuery } from '@apollo/react-hooks';
import CategoryCards from './components/CategoryCards';
import ProductCarousel from './components/ProductCarousel';

const Home = () => {
  const { data, error, loading } = useQuery(COLLECTIONS);

  const { data: categoryData, loading: categoryLoading } = useQuery(CATEGORIES);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='wrapper'>
        <Header categorySource={categoryData} loading={categoryLoading} />
        {/* <SingleImage /> */}
        <ProductCarousel />
        <CategoryCards />
        {/* <SingleImageTextLeft />
        <SingleImageTextRight /> */}
        {/* {data &&
          data?.collections?.edges?.map((el: any, i: number) => (
            <DynamicCollection
              key={i}
              dataSource={el}
              row={i}
              categorySource={categoryData}
              loading={categoryLoading}
            />
          ))} */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
