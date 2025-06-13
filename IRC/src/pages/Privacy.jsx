import React from 'react';
import './Privacy.css'; // Add a CSS file for styling

function Privacy() {
  return (
    <div className="privacy-container min-h-screen">
      <header className="privacy-header">
        
        <h1>Privacy Policy</h1>
      </header>
      <div className="privacy-content">
        <h2>1. Introduction</h2>
        <p>
          At iReadCustomer, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>2.1 Google Sign-In Data</h3>
        <p>When you sign in using Google, we collect:</p>
        <ul>
          <li>Your Google account email address</li>
          <li>Your Google account name</li>
          <li>Your Google profile picture (if available)</li>
          <li>Your Google account ID</li>
        </ul>
        <h3>2.2 Usage Data</h3>
        <p>We also collect:</p>
        <ul>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages visited and features used</li>
          <li>Time and date of access</li>
          <li>IP address</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information for:</p>
        <ul>
          <li>Account authentication and management</li>
          <li>Providing and maintaining our service</li>
          <li>Improving user experience</li>
          <li>Communicating with you about service updates</li>
          <li>Analyzing usage patterns to enhance our service</li>
          <li>Preventing fraud and maintaining security</li>
        </ul>

        <h2>4. Data Storage and Security</h2>
        <p>
          We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>5. Data Sharing and Disclosure</h2>
        <p>We do not sell your personal information. We may share your information with:</p>
        <ul>
          <li>Service providers who assist in operating our service</li>
          <li>Law enforcement when required by law</li>
          <li>Third parties with your explicit consent</li>
        </ul>

        <h2>6. Your Data Protection Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to data processing</li>
          <li>Request data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>

        <h2>7. Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies to improve user experience and collect usage data. You can control cookie settings through your browser preferences.
        </p>

        <h2>8. Children's Privacy</h2>
        <p>
          Our service is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13.
        </p>

        <h2>9. International Data Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2>11. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <ul>
          <li>Email: support@ireadcustomer.com</li>
          <li>Address: Bangkok, Thailand</li>
        </ul>
      </div>
    </div>
  );
}

export default Privacy;