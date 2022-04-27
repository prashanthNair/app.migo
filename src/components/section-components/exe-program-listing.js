import React from 'react';
import { useHistory } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import Highlighted from './highlighted'; 
import Alert from '@mui/material/Alert'; 

function ExeProgramListing(props) {
  const history = useHistory();

  let publicUrl = process.env.PUBLIC_URL + '/';
  let imgattr = 'image';
  let data = sectiondata.joblisting;
  let customclass = props.customclass ? props.customclass : '';

  return (
    <div>
      
      <div className={'job-listing-page ' + customclass}>  
      
        <div className='container'>
      <Alert variant="filled" severity="info">
        <span>If you already registered with us we request you to click on this <a href='' style={{color:"darkblue"}}>link</a> and proceed for the further onboarding process</span>
      </Alert>
          <div className='job-position-area'>
            <div className='row justify-content-center'>
              <div className='col-xl-8'>
                <Highlighted></Highlighted> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExeProgramListing;
