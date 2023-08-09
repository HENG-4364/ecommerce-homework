import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout(props: any) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
