import React from 'react';

const page = () => {
  return (
    <>
      <h1>PDF Example</h1>
      <DownloadPDF />
      <ViewPDF />
    </>
  );
};
const ViewPDF = () => {
  return (
    <div>
      {/* Buka PDF di tab baru */}
      <a
        href="/pdf/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          borderRadius: '5px',
        }}
      >
        View PDF
      </a>

      {/* Atau tampilkan di dalam halaman dengan iframe */}
      <div style={{ marginTop: '20px', border: '1px solid #ddd' }}>
        <iframe
          src="/pdf/CV.pdf"
          width="100%"
          height="500px"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

const DownloadPDF = () => {
  return (
    <div>
      <a
        href="/pdf/CV.pdf"
        download="CV-Rama.pdf" // Nama file yang akan didownload
        style={{
          textDecoration: 'none',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          borderRadius: '5px',
        }}
      >
        Download PDF
      </a>
    </div>
  );
};

export default page;
