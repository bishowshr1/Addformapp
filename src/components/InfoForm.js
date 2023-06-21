import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from 'formik';

const InfoForm = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },

    onSubmit: (values) => {
      console.log(values);
    }
  })

  return (
    <div className='flex justify-center  py-5 my-5'>
      <Card color="transparent" shadow={false}>

        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 text-center " onSubmit={formik.handleSubmit}>
          <div className="mb-4 flex flex-col gap-6 grip">
            <Input size="lg" label="Name" name='name' value={formik.values.name} onChange={formik.handleChange} />
            <Input size="lg" label="Email" name='email' value={formik.values.email} onChange={formik.handleChange} />
            <Input type="password" size="lg" label="Password" name='password' value={formik.values.password} onChange={formik.handleChange} />
          </div>
          <div className="flex w-max gap-4 ">
            <Checkbox color="blue" defaultChecked />
            <Checkbox color="red" defaultChecked />
            <Checkbox color="green" defaultChecked />
            <Checkbox color="amber" defaultChecked />
            <Checkbox color="teal" defaultChecked />
            <Checkbox color="indigo" defaultChecked />
            <Checkbox color="purple" defaultChecked />
            <Checkbox color="pink" defaultChecked />
          </div>

          <Button className="mt-6" fullWidth type='submit'>
            submit
          </Button>

        </form>

      </Card>
    </div>
  );
}



export default InfoForm
