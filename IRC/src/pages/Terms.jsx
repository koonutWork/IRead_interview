import React from 'react';
import './Terms.css'; // Add a CSS file for styling

function Terms() {
  return (
    <div className="terms-container">
      <header className="terms-header">
        <h1>Terms of Service</h1>
      </header>
      <div className="terms-content">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using iReadCustomer services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>

        <h2>2. Google Sign-In</h2>
        <p>
          Our service uses Google Sign-In for authentication. By using Google Sign-In, you agree to:
        </p>
        <ul>
          <li>Provide accurate and complete Google account information</li>
          <li>Protect your Google account credentials and not share them with others</li>
          <li>Accept Google's Terms of Service and Privacy Policy</li>
          <li>Allow us to access your basic Google profile information for authentication purposes</li>
        </ul>

        <h2>3. Use of Service</h2>
        <p>
          Our services are designed to help businesses understand their customers better through data analysis and insights. You agree to use these services only for lawful purposes and in accordance with these Terms.
        </p>
        <p>You must not:</p>
        <ul>
          <li>Use the service for any illegal or unauthorized purpose</li>
          <li>Violate any laws in your jurisdiction</li>
          <li>Interfere with or disrupt the service or servers</li>
          <li>Collect or track personal information of other users</li>
        </ul>

        <h2>4. Privacy and Data Protection</h2>
        <p>
          We take your privacy seriously. All data collection and processing activities are conducted in compliance with applicable data protection laws including GDPR and CCPA where applicable. For detailed information about how we collect, use, and protect your data, please refer to our Privacy Policy.
        </p>

        <h2>5. Account Security</h2>
        <p>
          You are responsible for:
        </p>
        <ul>
          <li>Maintaining the confidentiality of your account credentials</li>
          <li>All activities that occur under your account</li>
          <li>Notifying us immediately of any unauthorized access</li>
          <li>Ensuring your account information is accurate and up-to-date</li>
        </ul>

        <h2>6. Service Modifications</h2>
        <p>
          We reserve the right to modify or discontinue our services at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
        </p>

        <h2>7. Intellectual Property</h2>
        <p>
          The service and its original content, features, and functionality are owned by iReadCustomer and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, iReadCustomer shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of Thailand, without regard to its conflict of law provisions.
        </p>

        <h2>10. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <ul>
          <li>Email: support@ireadcustomer.com</li>
          <li>Address: Bangkok, Thailand</li>
        </ul>
      </div>
    </div>
  );
}

export default Terms;