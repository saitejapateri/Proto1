import React, {useState} from 'react'
import {Typography, Stack, Grid, Box} from '@mui/material'
import CustomCard from '../../../components/common/CustomCard';
import MuiCustomPdfModal from '../../../components/common/MuiCustomPdfModal';

function ContinueReading({continue_reading}) {

  const [pdfPopper,setPdfPopper] = useState(false);


  const handlePdfClick = (url) => {
    console.log("pdf clicked ",url);
    setPdfPopper(true);
  }

  const handlePdfClose = () => {
    setPdfPopper(false);
  }

  return <Grid item md={10} sx={{marginLeft : '3.5rem', marginTop : '2.93rem'}}>
    <Typography variant='h5'>Continue Reading</Typography>
    <Box sx={{display : 'flex', gap : '1.375rem', marginTop : '0.75rem'}}>
        {
            continue_reading.map((pdf) => (
                <Stack key={pdf.id}>
                    <CustomCard name={pdf.name} onClick={()=>handlePdfClick(pdf.url)}/>
                    <MuiCustomPdfModal pdfPopper={pdfPopper} handleClose={handlePdfClose} url={pdf.url} />
                </Stack>
            ))
        }
    </Box>
  </Grid>
}

export default ContinueReading