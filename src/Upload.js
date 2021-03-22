import React from 'react'
import './Form.css'
import { useForm } from 'react-hook-form'
const Upload = () => {
    
    const { register,  reset } = useForm();
    return (
        <div>
      <div className="login-box">
        <h2>CLOUD-X</h2>
        <form >
          <div className="user-box">
            <input
              type="text"
              name='username'
              autoComplete='off'
              ref = {register}
            />
            <label>Upload</label>
          </div>
          <a style={{marginLeft: '60px', cursor:'pointer'}} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Choose File
          </a>
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
        </div>
    )
}

export default Upload
