import AppLayout from '../src/components/layouts/AppLayout';
import MainCarousel from '../src/components/product-listing/MainCarousel';
import Categories from '../src/components/product-listing/Categories';
import MoreItems from '../src/components/product-listing/MoreItems';
import ShoppingOptions from '../src/components/product-listing/ShoppingOptions';
import BigDiscount from '../src/components/product-listing/BigDiscount';
import FlashDeals from '../src/components/product-listing/FlashDeals';
import TopCategory from '../src/components/product-listing/TopCategory';
import TopRated from '../src/components/product-listing/TopRated';
import NewArrivals from '../src/components/product-listing/NewArrivals';
import FlashPromo from '../src/components/product-listing/FlashPromo';
import api from '../src/utils/api/static-data';
import {
  getTopRatedProduct,
  getTopRatedBrand,
  getServiceList,
  getCategories,
  getTopCategories,
} from '../src/utils/api/static-data-helper';
import { getProducts } from '../src/utils/api/products';
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
      <MainCarousel carouselData={mainCarouselData} />
      <FlashDeals flashDeals={flashDealsData} />
      <TopCategory categoryList={topCategories} />
      {/* <TopRated
        topRatedList={topRatedProducts || []}
        topRatedBrands={topRatedBrands || []}
      /> */}
      <NewArrivals newArrivalsList={newArrivalsList} />
      <BigDiscount bigDiscountList={bigDiscountList} />
      {/* <Categories categories={bottomCategories} /> */}
      <FlashPromo />
      <MoreItems moreItems={moreItems} />
      <ShoppingOptions serviceList={serviceList} />
    </AppLayout>
  );
};

export async function getServerSideProps() {
  const { data } = await getProducts();

  const carList = []; //await api.getCarList();
  const carBrands = []; //await api.getCarBrands();
  // const moreItems = []; //await api.getMoreItems();
  const mobileList = []; //await api.getMobileList();
  const opticsList = []; //await api.getOpticsList();
  const mobileShops = []; //await api.getMobileShops();
  const opticsShops = []; //await api.getOpticsShops();
  const serviceList = await getServiceList();
  const mobileBrands = []; //await api.getMobileBrands();
  // const flashDealsData = await api.getFlashDeals();
  const opticsBrands = []; //await api.getOpticsBrands();
  const bottomCategories = await getCategories();
  const topCategories = await getTopCategories();
  const topRatedBrands = await getTopRatedBrand();
  // const mainCarouselData = []; //await api.getMainCarousel();
  // const newArrivalsList = await api.getNewArrivalList();
  // const bigDiscountList = await api.getBigDiscountList();
  const topRatedProducts = await getTopRatedProduct();
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
