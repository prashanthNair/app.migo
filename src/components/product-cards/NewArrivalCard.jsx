import { Box, styled } from '@mui/material';
import HoverBox from 'components/HoverBox';
import LazyImage from 'components/LazyImage';
import { H4 } from 'components/Typography';
import Link from 'next/link';
const ContentWrapper = styled(Box)(() => ({
  padding: '1rem',
  '& .Tittle, & .categories': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}));
const NewArrivalCard = (props) => {
  const { ImageUrl, Tittle, SellingPrice, ProductId } = props;
  return (
    <Link href={`/product/${ProductId}`}>
      <a>
        <HoverBox borderRadius='8px' mb={1}>
          <LazyImage
            src={ImageUrl || ''}
            width={0}
            height={0}
            layout='responsive'
            alt={Tittle}
          />
        </HoverBox>

        <ContentWrapper>
          <H4
            mb={1}
            title={Tittle}
            fontSize='14px'
            fontWeight='600'
            className='Tittle'
            color='text.secondary'
          >
            {Tittle}
          </H4>
          <H4 fontSize={14} color='primary.main'>
            ${Math.ceil(SellingPrice).toLocaleString()}
          </H4>
        </ContentWrapper>
      </a>
    </Link>
  );
};

export default NewArrivalCard;
