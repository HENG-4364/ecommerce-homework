import Link from 'next/link';
import React from 'react';

export default function Menu(props:any) {
  return (
    <>
      <div className="p-3 ">
        <Link href={props.href} className="ms-1 " style={{textDecoration:"none",color:'black'}}>
          <span className="me-3">{props.icon}</span>
          <span>{props.menu_name}</span>
        </Link>
      </div>
    </>
  );
}
