import { Box, Container, Grid } from '@mui/material';
import MigobucksCard from 'components/MigobucksCard';
import CategorySectionHeader from 'components/CategorySectionHeader';
import DottedStar from 'components/icons/DottedStar';
import RankBadge from 'components/icons/RankBadge';
import TopRatedCard from 'components/product-cards/TopRatedCard';
import TopRatedBrand from 'components/product-cards/TopRatedBrand';
import Link from 'next/link';
import React from 'react';

const TopRated = (props) => {
  const { topRatedBrands, topRatedList } = props;

  return (
    <Box mb={7.5}>
      <Container>
        <Grid container spacing={4}>
          <Grid item lg={6} xs={12}>
            <CategorySectionHeader
              icon={<RankBadge />}
              title='Top Ratings'
              seeMoreLink='#'
            />

            <MigobucksCard
              sx={{
                p: 2,
              }}
            >
              <Grid container spacing={4}>
                {topRatedList.map((item) => (
                  <Grid item md={3} sm={6} xs={6} key={item.title}>
                    <Link href={`/product/${item.id}`}>
                      <a>
                        <TopRatedCard {...item} />
                      </a>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </MigobucksCard>
          </Grid>

          <Grid item md={6} xs={12}>
            <CategorySectionHeader
              icon={<DottedStar />}
              title='Featured Brands'
              seeMoreLink='#'
            />

            <MigobucksCard
              sx={{
                p: 2,
              }}
            >
              <Grid container spacing={4}>
                {topRatedBrands.map((item) => (
                  <Grid item sm={6} xs={12} key={item.title}>
                    <Link href={item.productUrl || ''}>
                      <a>
                        <TopRatedBrand {...item} />
                      </a>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </MigobucksCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopRated;
