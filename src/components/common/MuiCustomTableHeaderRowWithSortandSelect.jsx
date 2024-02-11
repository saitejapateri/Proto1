import React from 'react'
import { TableRow } from '@mui/material'
import { useTheme } from '@mui/styles'
import MuiCustomTableHeaderCellWithSortandSelect from './MuiCustomTableHeaderCellWithSortandSelect'
import palette from '../../theme/palette'

const MuiCustomTableHeaderRowWithSortandSelect = ({
  headerArray,
  sortHandler,
  selectHandler,
}) => {
  const theme = useTheme()
  return (
    <TableRow
      sx={{
        background: theme.palette.grey[100],
        height: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        color: palette.grey[100],
        padding: '0px',
        margin: '0px',
        borderRadius: '10px',
      }}
    >
      {headerArray?.map((header, i) => {
        return (
          <MuiCustomTableHeaderCellWithSortandSelect
            itemData={header}
            index={i}
            isSortable={header.isSortable}
            isSelectable={header.isSelectable}
            arrayLength={headerArray.length}
            sortHandler={sortHandler}
            selectHandler={selectHandler}
          />
        )
      })}
    </TableRow>
  )
}

export default MuiCustomTableHeaderRowWithSortandSelect
