import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Document, Page, pdfjs } from 'react-pdf';
import { Box, Typography, Stack } from '@mui/material';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './ReactPdf.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const options = {
    standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
};

function ReactPdf() {
    const { pdfUrl } = useSelector(state => state.pdf);
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleNextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    const handlePrevPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    return (
        <Box sx={{ backgroundColor: 'success.light', justifyContent: 'center', marginTop: '1.31rem', padding: '10px' }}>
            <Document file={pdfUrl} options={options} onLoadSuccess={onDocumentLoadSuccess}>
                <Page className='page' pageNumber={pageNumber} />
            </Document>
            <Stack direction="row" justifyContent="center" alignItems="center" sx={{ marginTop: '10px' }}>
                <Typography variant="body1">{pageNumber} / {numPages}</Typography>
                <Box>
                    <button onClick={handlePrevPage}>Previous</button>
                    <button onClick={handleNextPage}>Next</button>
                </Box>
            </Stack>
        </Box>
    );
}

export default ReactPdf;
