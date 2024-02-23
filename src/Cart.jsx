import React from 'react';
import './Cart.css';

const Cart = ({ data }) => {
  const openInGoogleMaps = () => {
    const { koordinat } = data;
    const [latitude, longitude] = koordinat.split(',').map(Number);
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <div className='cart'>
      <h2>{data.adi}</h2>
      <p>{`Adres: ${data.adres}`}</p>
      <p>{`Telefon: ${data.tel}`}</p>
      <p>{`Fax: ${data.fax}`}</p>
      <p>{`E-posta: ${data.mail}`}</p>
      <p>{`Web: ${data.web}`}</p>
      <button onClick={openInGoogleMaps}>Yol Tarifi Al</button>
    </div>
  );
};

export default Cart;