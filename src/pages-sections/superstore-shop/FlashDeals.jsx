import { Box } from '@mui/material';
import Carousel from 'components/carousel/Carousel';
import CategorySectionCreator from 'components/CategorySectionCreator';
import Light from 'components/icons/Light';
import ProductCard from 'components/product-cards/ProductCard';
import useWindowSize from 'hooks/useWindowSize';
import React, { useEffect, useState } from 'react';

const FlashDeals = ({ flashDeals }) => {
  debugger;
  const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);
  return (
    <CategorySectionCreator
      icon={<Light color='primary' />}
      title='Flash Deals'
      seeMoreLink='#'
    >
      <Box mt={-0.5} mb={-0.5}>
        <Carousel
          totalSlides={flashDeals.length}
          visibleSlides={visibleSlides}
          infinite={true}
        >
          {flashDeals.map((item, ind) => (
            <Box py={0.5} key={ind}>
              <ProductCard
                imgUrl={
                  item.ImageUrl ||
                  'https://mibuploaddev.s3.ap-south-1.amazonaws.com/inbound/inventory/brand/BR1651736511090/P1651745595431/aa2e4e45-92aa-4166-956b-507d9f6724ad.jpg'
                }
                id={item.ProductId}
                title={item.Tittle}
                price={item.SellingPrice || 0}
                rating={item.Rating}
                hideRating={''}
                hoverEffect={''}
                discount={item.DiscountPercentage}
                showProductSize={''}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
};

export default FlashDeals;
