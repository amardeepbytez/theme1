import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Topbar = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box>
            <LocationOnIcon />
          </Box>
          <Typography>apricot</Typography>
        </Grid>
        <Grid item xs={3}>cradle</Grid>
        <Grid item xs={3}>alpine</Grid>
        <Grid item xs={3}>labyrinth</Grid>
      </Grid>
    </>
  )
}

export default Topbar