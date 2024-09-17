import React from 'react'
import InputLabel from '../../shared/InputLabel'
import Card from '../../shared/Card'
import Button from '../../shared/Button'
import { FaArrowLeft } from "react-icons/fa";

function NewStaff() {
  return (
    <div className=''>
          <h1>New Staff</h1>
          <FaArrowLeft />
            <Card>
        <div className='grid grid-cols-2 '>

              <div className='w-full'>      
                    <div>
                          <h1>First Name</h1>
                          <InputLabel>
                         </InputLabel>
                     </div>
                 
                    <div>  
                      <h1>Position</h1>
                      <InputLabel>
                      </InputLabel>
                    </div>
                             
                    <div>  
                      <h1>Email Address</h1>
                      <InputLabel>
                      </InputLabel>
                    </div>
                    <div>  
                      <h1>Residential Address</h1>
                      <InputLabel>
                     </InputLabel>
                    </div>
  
              </div>   

              <div>      
                    <div>
                          <h1>Last Name</h1>
                          <InputLabel>
                         </InputLabel>
                     </div>
                 
                    <div>  
                      <h1>Gender</h1>
                      <InputLabel>
                      </InputLabel>
                    </div>
                             
                    <div>  
                      <h1>Phone Number</h1>
                      <InputLabel>
                      </InputLabel>
                    </div>
                    <div>  
                      <h1>Year Employed</h1>
                      <InputLabel>
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
