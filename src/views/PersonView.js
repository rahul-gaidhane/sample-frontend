import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  makeStyles,
  MenuItem
} from '@material-ui/core';
import Page from '../components/Page'
import * as PersonApi from '../api/person';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              name: '',
              age: '',
              gender : ''
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().max(255).required('Name is required'),
              age: Yup.string().max(255).required('Age is required'),
              gender: Yup.string().max(255).required('Gender is required')
            })}
            onSubmit={(values) => {

              PersonApi.addPerson(values)
                .then((res) => {
                  console.log('res ', res);
                })
              /*LoginApi.authenticate(values)
                .then((res) => {
                  
                  LoginService.login(res.data)
                  //axiosConfig();
                  const entityType = res.data.entityType;

                  if(entityType === 'HOSPITAL') {
                    navigate('/hos');
                  } else if(entityType === 'DISTRIBUTOR') {
                    navigate('/dis');
                  } else if(entityType === 'ADMIN') { 
                    navigate('/app/dashboard');
                  }
                })
                .catch((err) => console.log('err : ', err))*/
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Add Person
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.name && errors.name)}
                  fullWidth
                  helperText={touched.name && errors.name}
                  label="Name"
                  margin="normal"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.age && errors.age)}
                  fullWidth
                  helperText={touched.age && errors.age}
                  label="Age"
                  margin="normal"
                  name="age"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.age}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.gender && errors.gender)}
                  fullWidth
                  helperText={touched.gender && errors.gender}
                  select
                  label="Gender"
                  margin="normal"
                  name="gender"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.gender}
                  variant="outlined"
                >
                  <MenuItem key="MALE" value="MALE">MALE</MenuItem>
                  <MenuItem key="FEMALE" value="FEMALE">FEMALE</MenuItem>
                  <MenuItem key="TRANS" value="TRANS">TRANS</MenuItem>
                </TextField>
                <Box my={2}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
