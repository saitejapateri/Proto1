import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {Typography, Stack, Grid, Box} from '@mui/material'
import CustomCard from '../../../components/common/CustomCard';
import { pdfActions } from '../../../store';

function ContinueReading({continue_reading}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePdfClick = (url,name) => {
    dispatch(pdfActions.setPdf({
      isOpen : true,
      pdfUrl : url,
      pdfName : name
    }))
    navigate(`/pdf`)
  }

  return <Grid item md={10} sx={{marginLeft : '3.5rem', marginTop : '2.93rem'}}>
    <Typography variant='h5'>Continue Reading</Typography>
    <Box sx={{display : 'flex', gap : '1.375rem', marginTop : '0.75rem'}}>
        {
            continue_reading.map((pdf) => (
                <Stack key={pdf.id}>
                    <CustomCard name={pdf.name} onClick={()=>handlePdfClick(pdf.url, pdf.name)}/>
                </Stack>
            ))
        }
    </Box>
  </Grid>
}

export default ContinueReading