import { Container, Grid } from '@mui/material';
import CategorySectionHeader from 'components/CategorySectionHeader';
import ProductCard from 'components/product-cards/ProductCard';

const MoreItems = ({ moreItems }) => {
  return (
    <Container
      sx={{
        mb: '70px',
      }}
    >
      <CategorySectionHeader title='More For You' seeMoreLink='#' />

      <Grid container spacing={3}>
        {moreItems.map((item, ind) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
            <ProductCard
              off={25}
              hoverEffect
              imgUrl={
                item.ImageUrl ||
                'https://mibuploaddev.s3.ap-south-1.amazonaws.com/inbound/inventory/brand/BR1651736511090/P1651745595431/aa2e4e45-92aa-4166-956b-507d9f6724ad.jpg'
              }
              id={item.ProductId}
              tittle={item.Title}
              price={item.SellingPrice || 0}
              rating={item.Rating}
              {...item}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MoreItems;
