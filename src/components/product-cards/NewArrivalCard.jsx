import HoverBox from 'components/HoverBox';
import LazyImage from 'components/LazyImage';
import { H4 } from 'components/Typography';
import Link from 'next/link';
import React from 'react'; // ==========================================================

// ==========================================================
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
        <H4 fontSize={14} mb={0.5}>
          {Tittle}
        </H4>
        <H4 fontSize={14} color='primary.main'>
          ${Math.ceil(SellingPrice).toLocaleString()}
        </H4>
      </a>
    </Link>
  );
};

export default NewArrivalCard;
