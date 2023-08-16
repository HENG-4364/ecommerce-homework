import React from 'react';
import CardProducts from '../Card';

export default function RelatedProduct(props: any) {
  return (
    <>
      <CardProducts category_id={props.category_id} />
    </>
  );
}
