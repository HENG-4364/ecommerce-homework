import { Title } from '@/components/Title';
import Dasboard from '@/screen/Admin/Dasboard';
import TableAllProducts from '@/screen/Admin/Tables';
import React from 'react';

export default function Products() {
  return (
    <>
      <Dasboard>
        <Title title={'All Products'} />
        <div className="p-3">
          <TableAllProducts />
        </div>
      </Dasboard>
    </>
  );
}
