import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Alert(theme) {
    const color=theme.palette.grey[300]
  return {
        MuiAlert: {
            styleOverrides: {
              root: {
                borderRadius: '10px',
              },
              standardInfo: {
                backgroundColor: theme.palette.info[100],
                border:`1px solid ${theme.palette.info.main}`,
                borderRadius: '10px',
              },
              standardSuccess: {
                backgroundColor: theme.palette.success[100],
                border:`1px solid ${theme.palette.success.main}`,
                borderRadius: '10px',
              },
              standardWarning: {
                backgroundColor: theme.palette.warning[100],
                border:`1px solid ${theme.palette.warning.main}`,
                borderRadius: '10px',
              },
              standardError: {
                backgroundColor: theme.palette.error[100],
                border:`1px solid ${theme.palette.error.main}`,
                borderRadius: '10px',
              },
            },
          },
}
}

