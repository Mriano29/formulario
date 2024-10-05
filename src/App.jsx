import { useState } from 'React'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function App() {

  return (
    <>
      <Container>
        <Paper elevation={12} square={false}>
          <Box component='form'>
            <Grid container spacing={2}> 
              <Grid>
                  <TextField required label={'Nombre'}/>

              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  )
}

export default App
