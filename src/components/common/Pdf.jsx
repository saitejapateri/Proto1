import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Stack, Typography, Divider, Grid } from "@mui/material";
import { useState } from "react";
import { Document, Page, Thumbnail, pdfjs } from "react-pdf";
import { useSelector } from "react-redux";
import './Pdf.css'
import PdfHeader from "./PdfHeader";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const options = {
  standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
};

function Pdf() {
  const navigate = useNavigate();
  const { pdfUrl } = useSelector((state) => state.pdf);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [rotationAngle,setRotationAngle] = useState(0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleClose = () => {
    window.history.go(-1);
  };

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(0.5, prevScale - 0.1));
  };

  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(2, prevScale + 0.1));
  };

  const handleRotation = () => {
    setRotationAngle(prevState => prevState + 90);
  }

  return (
    <>
      <Box
        sx={{
          boxShadow: "10px 10px 32px rgba(22, 22, 22, 0.04)",
          padding: "1rem",
          display: "flex",
          gap: "6.18rem",
        }}
      >
        <PdfHeader
          scale={scale}
          pageNumber={pageNumber}
          numPages={numPages}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          handleClose={handleClose}
          handleRotation={handleRotation}
        />
      </Box>

      {/* pdf */}
      <Box
        sx={{
          padding: "10px",
        }}
      >
        <Document
          className="document"
          file={pdfUrl}
          options={options}
          onLoadSuccess={onDocumentLoadSuccess}
          style={{ display: "flex" }}
        >
          <Page className="page" pageNumber={pageNumber} scale={scale} rotate={rotationAngle} />
          <Stack
            sx={{
              overflowY: "auto",
              maxHeight: "520px",
              marginTop: "2rem",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none",
              scrollbarWidth: "none",
              gap: "20px",
            }}
          >
            {[...Array(numPages).keys()].map((pageIndex) => (
              <Thumbnail
                key={pageIndex}
                className="thumbnail"
                pageNumber={pageIndex + 1}
                width={100}
                onClick={() => setPageNumber(pageIndex + 1)}
              >
                <Typography sx={{ marginLeft: "50%", textDecoration: "none" }}>
                  {pageIndex + 1}
                </Typography>
              </Thumbnail>
            ))}
          </Stack>
        </Document>
      </Box>
    </>
  );
}

export default Pdf;
