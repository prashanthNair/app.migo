import AppLayout from 'components/layouts/AppLayout';
import Section1 from 'pages-sections/superstore-shop/Section1';
import Categories from 'pages-sections/superstore-shop/Categories';
import MoreItems from 'pages-sections/superstore-shop/MoreItems';
import ShoppingOptions from 'pages-sections/superstore-shop/ShoppingOptions';
import BigDiscount from 'pages-sections/superstore-shop/BigDiscount';
import FlashDeals from 'pages-sections/superstore-shop/FlashDeals';
import TopCategory from 'pages-sections/superstore-shop/TopCategory';
import TopRated from 'pages-sections/superstore-shop/TopRated';
import NewArrivals from 'pages-sections/superstore-shop/NewArrivals';
import Highlighted from 'pages-sections/superstore-shop/Highlighted';
import FlashPromo from 'pages-sections/superstore-shop/FlashPromo';
import api from 'utils/api//superstore-shop';
// import useSWR from 'swr';
// import axios from 'axios';

const IndexPage = (props) => {
  const {
    moreItems,
    mobileList,
    opticsList,
    serviceList,
    mobileShops,
    opticsShops,
    mobileBrands,
    opticsBrands,
    topCategories,
    flashDealsData,
    topRatedBrands,
    newArrivalsList,
    bigDiscountList,
    mainCarouselData,
    topRatedProducts,
    bottomCategories,
  } = props;

  // const url =
  //   'https://api.dev.migobucks.com/inventory/products?Status=PUBLISHED';
  // const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  // const { data, error } = useSWR(url, fetcher);

  // if (error) return <div>Failed to load users</div>;
  // if (!data) {
  //   return <h1>Loading...</h1>;
  // } else {
  //   alert(JSON.stringify(data));
  // }

  return (
    <AppLayout>
      <Section1 carouselData={mainCarouselData} />
      <FlashDeals flashDeals={flashDealsData} />
      <TopCategory categoryList={topCategories} />
      <TopRated
        topRatedList={topRatedProducts || []}
        topRatedBrands={topRatedBrands || []}
      />
      <NewArrivals newArrivalsList={newArrivalsList} />
      <BigDiscount bigDiscountList={bigDiscountList} />

      <Categories categories={bottomCategories} />
      <Highlighted
        shops={mobileShops}
        brands={mobileBrands}
        title='Mobile Phones'
        productList={mobileList}
      />

      <FlashPromo />

      <Highlighted
        shops={opticsShops}
        brands={opticsBrands}
        title='Optics / Watch'
        productList={opticsList}
      />

      {/* <MoreItems moreItems={moreItems} /> */}
      <ShoppingOptions serviceList={serviceList} />

      {/* <Setting /> */}
    </AppLayout>
  );
};

// export const getServerSideProps = async () => {
//
//   const res = await apiInstance.get(`/inventory/products`, {
//     params: {
//       Status: 'PUBLISHED',
//     },
//   });
//   const product = await res.json();

//   return {
//     props: {
//       product,
//     },
//   };
// };

export async function getStaticProps() {
  const { data } = await api.getProducts();

  const carList = []; //await api.getCarList();
  const carBrands = []; //await api.getCarBrands();
  // const moreItems = []; //await api.getMoreItems();
  const mobileList = []; //await api.getMobileList();
  const opticsList = []; //await api.getOpticsList();
  const mobileShops = []; //await api.getMobileShops();
  const opticsShops = []; //await api.getOpticsShops();
  const serviceList = await api.getServiceList();
  const mobileBrands = []; //await api.getMobileBrands();
  // const flashDealsData = await api.getFlashDeals();
  const opticsBrands = []; //await api.getOpticsBrands();
  const bottomCategories = []; //await api.getCategories();
  // const topCategories = await api.getTopCategories();
  // const topRatedBrands = await api.getTopRatedBrand();
  const mainCarouselData = []; //await api.getMainCarousel();
  // const newArrivalsList = await api.getNewArrivalList();
  // const bigDiscountList = await api.getBigDiscountList();
  // const topRatedProducts = await api.getTopRatedProduct();
  return {
    props: {
      carList,
      carBrands,
      moreItems: data?.Products || [],
      mobileList,
      opticsList,
      serviceList,
      mobileShops,
      opticsShops,
      mobileBrands,
      opticsBrands,
      topCategories: data?.TopCategories || [],
      flashDealsData: data?.FlashDeals || [],
      topRatedBrands: data?.TopRated || [],
      newArrivalsList: data?.NewArrivals || [],
      bigDiscountList: data?.BigDiscount || [],
      mainCarouselData,
      topRatedProducts: [],
      bottomCategories,
    },
  };
}
export default IndexPage;
