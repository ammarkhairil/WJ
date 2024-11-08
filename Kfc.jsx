import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { kfc } from '../../Image'; // Ganti dengan import gambar KFC

const KFC = () => {
  // State untuk melacak apakah tombol sudah diklik
  const [isOrdered, setIsOrdered] = useState(false);

  // Fungsi untuk menangani klik tombol
  const handlePreOrder = () => {
    setIsOrdered(true);  // Set state menjadi true setelah tombol diklik
  };

  return (
    <div className="container" style={{ marginTop: '50px', backgroundColor: 'rgb(40, 40, 40)', color: 'white' }}>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          {/* Menampilkan Gambar KFC */}
          <img 
            src={kfc} 
            alt="KFC" 
            style={{ width: '100%', borderRadius: '15px', objectFit: 'cover', height: '400px' }} 
          />
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginTop: '20px' }}>KFC</h2>
          <p style={{ fontSize: '18px', color: '#ccc' }}>Rp. 10.000</p>
          <p style={{ fontSize: '18px', marginTop: '20px' }}>
            KFC menawarkan ayam goreng renyah dengan bumbu khas yang sudah terkenal. Nikmati kelezatannya yang memanjakan lidah!
          </p>
          
          {/* Tombol untuk melakukan pre-order, dengan perubahan setelah diklik */}
          <Button 
            variant={isOrdered ? "dark" : "primary"}  // Ubah warna tombol setelah klik
            style={{ marginTop: '20px' }}
            onClick={handlePreOrder}  // Fungsi untuk menangani klik tombol
          >
            {isOrdered ? "Sudah Dipesan" : "Pre Order Now"}  {/* Ubah teks tombol setelah klik */}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KFC;
