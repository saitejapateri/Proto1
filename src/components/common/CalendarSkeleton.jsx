import React from 'react'
import {Skeleton, Stack} from '@mui/material'

function CalendarSkeleton() {
  return <Stack sx={{gap : '1rem', marginTop : '1rem'}}>
    <Stack direction='row' justifyContent={'space-evenly'}>
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
    </Stack>
    <Stack direction='row' justifyContent={'space-evenly'}>
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
    </Stack>
    <Stack direction='row' justifyContent={'space-evenly'}>
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
    </Stack>
    <Stack direction='row' justifyContent={'space-evenly'}>
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
    </Stack>
    <Stack direction='row' justifyContent={'space-evenly'}>
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
        <Skeleton animation="wave" variant="circular" width={10} height={10} />
    </Stack>
  </Stack>
}

export default CalendarSkeleton
