import React from 'react';
import logo from '../../../assets/images/main-logo.png'; // Đảm bảo bạn đã import hình ảnh

function Footer() {
  return (
    <footer className="footer">
      {/* Nội dung footer */}
      <img src={logo} alt="Logo" className="footer-logo" />
      {/* Các thông tin khác */}
    </footer>
  );
}

export default Footer;
