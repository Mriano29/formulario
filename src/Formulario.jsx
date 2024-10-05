import React from 'React'
import { useState } from 'React'
import './App.css'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function Formulario() {
  //Data
  const [data, setData] = useState({nombre:'', apellidos:'', edad:'', rating:0, gender:'', checked:false, lenguaje:''});

  //Dialog
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClickOpen();
    console.log(data)
 }

 //Evento limpiar
 const handleReset = () => {
  setData({nombre:'', apellidos:'', edad:'', rating:0, gender:'', checked:false, lenguaje:''});
  console.log("Reinicio de datos")
};

  // Eventos select
  const handleLenguaje= (e) => {
    setData({
      ...data,
      lenguaje: e.target.value
  })
  console.log('Lenguaje: ' + e.target.value)
}

  //Evento checkbox
  const handleCheck= (e) => {
    setData({
      ...data,
      checked: e.target.checked
  })
  console.log('Términos y condiciones: ' + e.target.value)
}

  //Radio
  const handleChange = (e) => {
    setData({
      ...data,
      gender: e.target.value
  })
  console.log('Genero: ' + e.target.value)
}

//Rating
  const handleRatingChange = (e) => {
    setData({
      ...data,
      rating: parseInt(e.target.value)
  })
  console.log('Rating: ' + e.target.value)
}

//Textfields
    const handleChangeName = (e) =>{
      setData({
          ...data,
          nombre: e.target.value
      })
      console.log('Nombre: ' + e.target.value)
  }
  const handleChangeSurname = (e) =>{
    setData({
        ...data,
        apellidos: e.target.value
    })
    console.log('Apellido: ' + e.target.value)
}
const handleChangeAge = (e) =>{
  setData({
      ...data,
      edad: e.target.value
  })
  console.log('Edad: ' + e.target.value)
}

  return (
    <>
        <Paper elevation={12} square={false} sx={{padding: 2}}>
          <Box component='form'>
            {/* Grid superior con los 3 Textfields */}
            <Grid container spacing={2} justifyContent='center' direction={{xs: 'column', sm: 'row'}}> 
              <Grid>
                  <TextField required label='Nombre' variant='outlined' onChange={handleChangeName}/>
              </Grid>
              <Grid>
                <TextField required label='Apellidos' onChange={handleChangeSurname}/>
              </Grid>
              <Grid>
                <TextField required type='number' label='Edad' onChange={handleChangeAge}/>
              </Grid>
            </Grid>
             {/* Grid que contiene los radiobuttons*/}
            <Grid container spacing={2} sx={{padding: 2}}  justifyContent='center' direction={{xs: 'column', sm: 'row'}}>
                <Grid>
                    <FormControl>
                        <FormLabel>Genero</FormLabel>
                        <RadioGroup value={data.gender} onChange={handleChange} sx={{flexDirection: { xs: 'column', sm: 'row' }}}>
                        <FormControlLabel name= "radio" value="Masculino" control={<Radio />} label="Masculino"/>
                        <FormControlLabel name= "radio" value="Femenino" control={<Radio />} label="Femenino" required/>
                        <FormControlLabel name= "radio" value="Otro" control={<Radio />} label="Otro" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid>
                  <Box sx={{ minWidth: 300}}>
                    <FormControl fullWidth>
                      <InputLabel>Lenguaje</InputLabel>
                      <Select  value={data.lenguaje}  label="Lenguaje" onChange={handleLenguaje} required>
                        <MenuItem value={'Java'}>Java</MenuItem>
                        <MenuItem value={'Python'}>Python</MenuItem>
                        <MenuItem value={'C++'}>C++</MenuItem>
                        <MenuItem value={'Kotlin'}>Kotlin</MenuItem>
                        <MenuItem value={'Assembly'}>Assembly</MenuItem>
                      </Select>
                    </FormControl>
                    </Box>
                </Grid>
            </Grid> 
            {/* Divider */}
            <Divider/>
            {/* Grid que contiene el rating */}
            <Grid container spacing={2} padding={2} value={data.rating} justifyContent={{xs:'center', md:'left'}} direction={{xs: 'column', sm: 'row'}}>
              <Grid>
                <Typography component="legend">Puntúa esta encuesta</Typography>
              </Grid>
              <Grid>
                <Rating name="simple-controlled"  value={data.rating}   onChange={handleRatingChange} />
              </Grid>
            </Grid>
            {/* Grid que contiene la checkbox*/}
            <Grid container spacing={2} padding={2} justifyContent={{xs:'center', md:'left'}}>
                <FormControlLabel control={<Checkbox checked={data.checked} onChange={handleCheck}/>} label="He leido los términos y condiciones"/>
            </Grid>
            {/* Grid que contiene los botones */}
            <Grid container spacing={2} padding={2} justifyContent={'center'}>
                    <Grid sx={{flex:1}}>
                      <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleSubmit} disabled={!data.checked}>
                        Enviar
                      </Button>
                      <Dialog open={open}  onClose={handleClose}  aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                            <DialogTitle>
                              {"Confirmación"}
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                ¿Estás seguro que quieres enviar el formulario?
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose}>Rechazar</Button>
                              <Button onClick={handleClose} autoFocus>Aceptar</Button>
                            </DialogActions>
                          </Dialog>
                    </Grid>
                    <Grid sx={{flex:1}}>
                      <Button type="reset" variant="outlined" color="error" fullWidth onClick={handleReset}>
                        Limpiar
                      </Button>
                    </Grid>
              </Grid>
          </Box>
        </Paper>
    </>
  )
}