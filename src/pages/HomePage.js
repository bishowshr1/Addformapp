import { useFormik } from 'formik'
import React, { useState } from 'react'

const HomePage = () => {

  const [data, setData] = useState([]);
  const oldData = [22, 55, 77];


  const formik = useFormik({
    initialValues: {
      todo: '',

    },
    onSubmit: (val, { resetForm }) => {
      setData([...data, val.todo]);
      resetForm();
    }

  });
  return (


    <div>
      <h1 className='text-2xl'> sample todo App</h1>
      <form>
        <div className='p-5'>
          <label htmlFor="">Add Todo Activities</label>
          <br />
          <input
            name='todo'
            type='text'
            className='border border-black outline-none px-2 py-1'>

          </input>
          <div>
            <button className='box-border border-solid'>delete</button>
          </div>

        </div>
      </form>



    </div>

  )
}

export default HomePage
