import React, { useState } from 'react';
import './waitlist.css';
import jsPDF from 'jspdf';

function Waitlist() {
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    countryCode: '+66',
    phone: '',
    position: '',
    company: '',
    website: '',
    industry: '',
    priceRange: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  function getFullPhone(countryCode, phone) {
    // Remove all non-digit characters
    let cleanPhone = phone.replace(/\D/g, '');
    // Remove leading zero if present
    if (cleanPhone.startsWith('0')) {
      cleanPhone = cleanPhone.slice(1);
    }
    return countryCode + cleanPhone;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullPhone = getFullPhone(form.countryCode, form.phone);

    // 1. Create JSON
    const jsonData = JSON.stringify({ ...form, phone: fullPhone }, null, 2);
    const jsonBlob = new Blob([jsonData], { type: 'application/json' });
    const jsonUrl = URL.createObjectURL(jsonBlob);
    const jsonLink = document.createElement('a');
    
    jsonLink.href = jsonUrl;
    jsonLink.download = 'sample_summary.json';
    document.body.appendChild(jsonLink);
    jsonLink.click();
    document.body.removeChild(jsonLink);
    URL.revokeObjectURL(jsonUrl);

    // 2. Create PDF (SoW)
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Statement of Work (SoW)', 14, 18);
    doc.setFontSize(12);
    let y = 30;
    const addLine = (label, value) => {
      doc.text(`${label}: ${value || '-'}`, 14, y);
      y += 10;
    };
    addLine('Email', form.email);
    addLine('First Name', form.firstName);
    addLine('Last Name', form.lastName);
    addLine('Country Code', form.countryCode);
    addLine('Phone', fullPhone);
    addLine('Position', form.position);
    addLine('Company', form.company);
    addLine('Website', form.website);
    addLine('Industry', form.industry);
    addLine('Price Range', form.priceRange);
    doc.text('Details:', 14, y);
    y += 8;
    doc.setFontSize(11);
    doc.text(form.details || '-', 18, y, { maxWidth: 170 });
    doc.save('statement-of-work.pdf');
  };

  return (
    <div className="waitlist-container">
      <h1>ลงทะเบียนรอใช้งาน</h1>
      <p>ด้วย AI ของเรา</p>
      <form className="waitlist-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-with-icon">
            <span className="input-icon">📧</span>
            <input type="email" name="email" placeholder="อีเมล" required value={form.email} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="input-with-icon">
            <span className="input-icon">👤</span>
            <input type="text" name="firstName" placeholder="ชื่อ" required value={form.firstName} onChange={handleChange} />
          </div>
          <div className="input-with-icon">
            <span className="input-icon">👤</span>
            <input type="text" name="lastName" placeholder="นามสกุล" required value={form.lastName} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
        <select className="country-select" name="countryCode" value={form.countryCode} onChange={handleChange}>
  <option value="+66">+66 (Thailand)</option>
  <option value="+61">+61 (Australia)</option>
  <option value="+855">+855 (Cambodia)</option>
  <option value="+1">+1 (Canada)</option>
  <option value="+86">+86 (China)</option>
  <option value="+33">+33 (France)</option>
  <option value="+49">+49 (Germany)</option>
  <option value="+852">+852 (Hong Kong)</option>
  <option value="+91">+91 (India)</option>
  <option value="+62">+62 (Indonesia)</option>
  <option value="+81">+81 (Japan)</option>
  <option value="+856">+856 (Laos)</option>
  <option value="+60">+60 (Malaysia)</option>
  <option value="+95">+95 (Myanmar)</option>
  <option value="+63">+63 (Philippines)</option>
  <option value="+65">+65 (Singapore)</option>
  <option value="+82">+82 (South Korea)</option>
  <option value="+886">+886 (Taiwan)</option>
  <option value="+44">+44 (United Kingdom)</option>
  <option value="+1">+1 (United States)</option>
</select>
          <div className="input-with-icon">
            <span className="input-icon">📞</span>
            <input type="tel" name="phone" placeholder="เบอร์โทรศัพท์" required value={form.phone} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <select name="position" value={form.position} onChange={handleChange}>
            <option value="">เลือกตำแหน่งของคุณ</option>
            {/* Add more options */}
          </select>
        </div>
        <div className="form-group">
          <div className="input-with-icon">
            <span className="input-icon">🏢</span>
            <input type="text" name="company" placeholder="ชื่อบริษัท" value={form.company} onChange={handleChange} />
          </div>
          <div className="input-with-icon">
            <span className="input-icon">🌐</span>
            <input type="url" name="website" placeholder="เว็บไซต์บริษัท (ไม่บังคับ)" value={form.website} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <select name="industry" value={form.industry} onChange={handleChange}>
            <option value="">เลือกอุตสาหกรรมของคุณ</option>
            {/* Add more options */}
          </select>
        </div>
        <div className="form-group">
          <select name="priceRange" value={form.priceRange} onChange={handleChange}>
            <option value="">ช่วงราคาที่คาดหวัง</option>
            {/* Add more options */}
          </select>
        </div>
        <div className="form-group">
          <textarea
            name="details"
            placeholder="บอกเราเกี่ยวกับความต้องการและความคาดหวังของคุณ (ไม่บังคับ)"
            value={form.details}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">ลงทะเบียน</button>
      </form>
      <p className="disclaimer">
        การลงทะเบียนนี้ถือว่าคุณยอมรับที่จะรับข่าวสารและอีเมลการตลาดจากเรา คุณสามารถยกเลิกการรับข่าวสารได้ตลอดเวลา
      </p>
    </div>
  );
}

export default Waitlist;
