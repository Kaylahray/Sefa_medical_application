import React from 'react'
import InputLabel from '../../Components/shared/InputLabel';
import Card from '../../Components/shared/Card';
import Button from '../../Components/shared/Button';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function NewStaff() {

  const style  = {
    width : 'md:w-[70%]'
  }


  return (
    <div className=''>
          <h1>New Staff</h1>
          <Link to={'/'} ><FaArrowLeft /></Link>
            <Card>
        <div className='grid grid-cols-2 px-3 '>

              <div className=''>      
                    <div>
                          <h1 className='text[10px]'>First Name</h1>
                          <InputLabel style={style.width} >
                         </InputLabel>
                     </div>
                 
                    <div>  
                      <h1>Position</h1>
                      <InputLabel style={style.width}>
                      </InputLabel>
                    </div>
                             
                    <div>  
                      <h1>Email Address</h1>
                      <InputLabel style={style.width}>
                      </InputLabel>
                    </div>
                    <div>  
                      <h1>Residential Address</h1>
                      <InputLabel style={style.width}>
                     </InputLabel>
                    </div>
  
              </div>   

              <div>      
                    <div>
                          <h1>Last Name</h1>
                          <InputLabel  style={style.width}>
                         </InputLabel>
                     </div>
                 
                    <div>  
                      <h1>Gender</h1>
                      <InputLabel style={style.width}>
                      </InputLabel>
                    </div>
                             
                    <div>  
                      <h1>Phone Number</h1>
                      <InputLabel style={style.width}>
                      </InputLabel>
                    </div>
                    <div>  
                      <h1>Year Employed</h1>
                      <InputLabel style={style.width}>
                     </InputLabel>
                    </div>

                    <Button >Create Profile</Button>
  
              </div>           
        </div>
            </Card>
    </div>
  )
}

export default NewStaff
