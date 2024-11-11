import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Features() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pembayaran berhasil dengan metode ${paymentMethod}!`);
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Form Pembayaran</h2>
          <Form onSubmit={handleSubmit} className="p-4 rounded shadow" style={{ backgroundColor: '#f8f9fa' }}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Nama</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Masukkan Nama" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Masukkan Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Alamat</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Masukkan Alamat" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formPaymentMethod" className="mb-3">
              <Form.Label>Metode Pembayaran</Form.Label>
              <div>
                <Form.Check 
                  type="radio" 
                  label="Kartu Kredit/Debit" 
                  name="paymentMethod" 
                  value="credit-card" 
                  checked={paymentMethod === 'credit-card'} 
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <Form.Check 
                  type="radio" 
                  label="Transfer Bank" 
                  name="paymentMethod" 
                  value="bank-transfer" 
                  checked={paymentMethod === 'bank-transfer'} 
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <Form.Check 
                  type="radio" 
                  label="E-Wallet (OVO, GoPay, Dana)" 
                  name="paymentMethod" 
                  value="e-wallet" 
                  checked={paymentMethod === 'e-wallet'} 
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </div>
            </Form.Group>

            {paymentMethod === 'credit-card' && (
              <>
                <Form.Group controlId="formCardNumber" className="mb-3">
                  <Form.Label>Nomor Kartu</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Masukkan Nomor Kartu" 
                    value={cardNumber} 
                    onChange={(e) => setCardNumber(e.target.value)} 
                    required 
                  />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formExpiryDate" className="mb-3">
                      <Form.Label>Expiry Date</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="MM/YY" 
                        value={expiryDate} 
                        onChange={(e) => setExpiryDate(e.target.value)} 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formCVV" className="mb-3">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="123" 
                        value={cvv} 
                        onChange={(e) => setCvv(e.target.value)} 
                        required 
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </>
            )}

            <Button variant="primary" type="submit" className="w-100">
              Bayar Sekarang
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
