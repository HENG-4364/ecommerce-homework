import React from 'react';
import style from './sidebar.module.scss';
import Link from 'next/link';
import Menu from './Menu';
export default function Sidebar() {
  return (
    <>
      <div className={`bg-body-tertiary  ${style.sidebar}`}>
        <div className={` ${style.logo}`}>
          <img src="/logo.png" alt="" />
        </div>
        <hr style={{margin:"0"}}/>
        <div className={` ${style.content}`}>
          <Menu menu_name={"Dasboard"} href={"/"} icon={"icon"}/>
          <Menu menu_name={"Products"} href={"/admin/products"} icon={"icon"}/>
        </div>
      </div>
    </>
  );
}
