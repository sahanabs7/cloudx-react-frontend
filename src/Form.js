import React, {useState} from 'react'
import './Form.css'
import { useForm } from 'react-hook-form'
import Upload from './Upload'


const Form = () => {
  const [upload, setUpload] = useState(false)
    const { register, handleSubmit,  reset } = useForm();
    const onSubmit=()=>{
      setUpload(true)
    }
    return (
        <>{upload ? <Upload/> :
      <div className="login-box">
        <h2>CLOUD-X</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="user-box">
            <input
              type="text"
              name='username'
              autoComplete='off'
              ref={register({ required: true, minLength: 6 })}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name='email'
              autoComplete='off'
              ref={register({ required: true, minLength: 6 })}
            />
            <label>Email-ID</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name='password'
              autoComplete='off'
              ref={register({ required: true, minLength: 6 })}

            />
            <label>Password</label>
          </div>
          <a style={{marginLeft: '90px', cursor: 'pointer'}} onClick={handleSubmit(onSubmit)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
}
        </>
    )
}

export default Form