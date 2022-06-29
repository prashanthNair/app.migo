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
import FlashPromo from 'pages-sections/superstore-shop/FlashPromo';
import api from 'utils/api//superstore-shop';
// import useSWR from 'swr';
// import axios from 'axios';

const IndexPage = (props) => {
  const {
    moreItems,
    serviceList,
    topCategories,
    flashDealsData,
    topRatedBrands,
    newArrivalsList,
    bigDiscountList,
    mainCarouselData,
    topRatedProducts,
    bottomCategories,
  } = props;
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
      <FlashPromo />
      <MoreItems moreItems={moreItems} />
      <ShoppingOptions serviceList={serviceList} />
    </AppLayout>
  );
};

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
  const bottomCategories = await api.getCategories();
  const topCategories = await api.getTopCategories();
  const topRatedBrands = await api.getTopRatedBrand();
  const mainCarouselData = []; //await api.getMainCarousel();
  // const newArrivalsList = await api.getNewArrivalList();
  // const bigDiscountList = await api.getBigDiscountList();
  const topRatedProducts = await api.getTopRatedProduct();
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
      topCategories: topCategories || [],
      flashDealsData: data?.FlashDeals || [],
      topRatedBrands: topRatedBrands || [],
      newArrivalsList: data?.NewArrivals?.slice(0, 6) || [],
      bigDiscountList: data?.BigDiscount || [],
      mainCarouselData: data?.CarouselData,
      topRatedProducts: topRatedProducts,
      bottomCategories,
    },
  };
}
export default IndexPage;
