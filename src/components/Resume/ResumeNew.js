// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import 'bootstrap/dist/css/bootstrap.min.css';


// // Set worker source directly
// pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

// function ResumeNew() {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [error, setError] = useState(null);
//   const pdf = `${process.env.PUBLIC_URL}/Passport_.pdf`; // Update to new PDF file

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <Container fluid className="resume-section">
//       <Particle />
      // <Row style={{ justifyContent: "center", position: "relative" }}>
      //   <Button
      //     variant="primary"
      //     href={pdf}
      //     target="_blank"
      //     style={{ maxWidth: "250px" }}
      //   >
      //     <AiOutlineDownload />
      //     &nbsp;Download CV
      //   </Button>
      // </Row>

      // <Row className="resume">
      //   <Document 
      //     file={pdf}
      //     onLoadError={error => setError(error)}
      //     className="d-flex justify-content-center"
      //   >
      //     <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
      //   </Document>
      //   {error && <p>Error loading PDF: {error.message}</p>}
      // </Row>

//       <Row style={{ justifyContent: "center", position: "relative" }}>
//         <Button
//           variant="primary"
//           href={pdf}
//           target="_blank"
//           style={{ maxWidth: "250px" }}
//         >
//           <AiOutlineDownload />
//           &nbsp;Download CV
//         </Button>
//       </Row>
//     </Container>
//   );
// }

// export default ResumeNew;
import React, { useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import pdf from "../../Assets/resume.pdf";

import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";


function ResumeNew() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <Container fluid className="resume-section">
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
      <br/>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} style={{ paddingBottom: "50px" }}> {/* Extra bottom padding */}
          {isLoading && (
            <div className="text-center mb-3">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          <iframe
            src={`${pdf}#toolbar=0`}
            width="80%"
            height="1058x" // Adjust height as needed
            title="Resume PDF"
            onLoad={handleLoad}
            style={{ 
              border: "none",
            }} 
          />
        </Col>
      </Row>
   </Container>
  );
}

export default ResumeNew;



// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Button, Spinner } from "react-bootstrap"; // Added Col here
// import Particle from "../Particle";
// import { AiOutlineDownload } from "react-icons/ai";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Pdf from "../../Assets/.pdf"; // Adjusted path if needed

// function ResumeNew() {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [isLoading, setIsLoading] = useState(true); // Loading state

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleLoad = () => {
//     setIsLoading(false); // Set loading to false when PDF is loaded
//   };

  // return (
  //   <Container fluid className="resume-section">
  //     <Particle />

  //     {/* Top Download Button */}
  //     <Row style={{ justifyContent: "center", position: "relative" }}>
  //       <Button
  //         variant="primary"
  //         href={Pdf}
  //         target="_blank"
  //         style={{ maxWidth: "250px" }}
  //       >
  //         <AiOutlineDownload />
  //         &nbsp;Download CV
  //       </Button>
  //     </Row>

//       {/* PDF Document Rendering */}
//       <Row className="justify-content-center"> {/* Centering the row */}
//         <Col xs={12} md={10} lg={8}> {/* Control column width on larger screens */}
//           {isLoading && (
//             <div className="text-center mb-3">
//               <Spinner animation="border" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </Spinner>
//             </div>
//           )}
//           <iframe
//             src={Pdf}
//             width="100%"
//             height="700" // Fixed height for scrolling
//             title="Resume PDF"
//             onLoad={handleLoad}
//             style={{ 
//               border: "none", 
//               borderRadius: "8px", 
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               marginBottom: "20px",
//               overflow: "auto", // Ensure overflow is handled
//               display: "block" // Ensure it behaves as a block element
//             }} 
//             scrolling="yes" // Enable scrolling
//           />
//         </Col>
//       </Row>

//       {/* Bottom Download Button */}
//       <Row style={{ justifyContent: "center", position: "relative" }}>
//         <Button
//           variant="primary"
//           href={Pdf}
//           target="_blank"
//           style={{ maxWidth: "250px" }}
//         >
//           <AiOutlineDownload />
//           &nbsp;Download CV
//         </Button>
//       </Row>
//     </Container>
//   );
// }

// export default ResumeNew;
