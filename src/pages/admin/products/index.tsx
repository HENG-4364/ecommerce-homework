import { Title } from '@/components/Title';
import Dasboard from '@/screen/Dasboard';
import TableAllProducts from '@/screen/Tables';
import React from 'react';

export default function Products() {
  return (
    <>
      <Dasboard>
        <Title title={'All Products'} />
        <div className='p-3'>
          <TableAllProducts />
        </div>
      </Dasboard>
    </>
  );
}
