import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { bakso } from '../../Image'; // Ganti dengan import gambar Bakso Ayam

const BaksoAyam = () => {
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
          {/* Menampilkan Gambar Bakso Ayam */}
          <img 
            src={bakso} 
            alt="Bakso Ayam" 
            style={{ width: '100%', borderRadius: '15px', objectFit: 'cover', height: '400px' }} 
          />
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginTop: '20px' }}>Bakso Ayam</h2>
          <p style={{ fontSize: '18px', color: '#ccc' }}>Rp. 10.000</p>
          <p style={{ fontSize: '18px', marginTop: '20px' }}>
            Bakso Ayam adalah hidangan khas Indonesia yang terbuat dari daging ayam cincang dengan bumbu rempah yang kaya. Nikmati kelezatannya dalam setiap gigitan!
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

export default BaksoAyam;
