import React from 'react';
import { useHistory } from 'react-router-dom';
import sectiondata from '../../data/sections.json'; 

function Highlighted() {
    debugger
  const history = useHistory(); 
  let highlighted = sectiondata.highlighted; 
  let publicUrl = process.env.PUBLIC_URL + '/';
  let imgattr = 'image';
  let data = sectiondata.joblisting;
  return (
    <div className='job-highlight'>
      <div className='section-title style-four'>
        <h2
          className='title'
          dangerouslySetInnerHTML={{ __html: highlighted.job[0].sectiontitle }}
        ></h2>
      </div>
      <div
        key={1}
        className='single-job-list media'
        style={{ boxShadow: '1 1 5 5 #1b75bb' }}
      >
        <img src={publicUrl + highlighted.job[0].image} alt={imgattr} />
        <img src={publicUrl + highlighted.job[0].icon} alt={imgattr} />
        <div className='media-body'>
          <h6 
          >
            {highlighted.job[0].jobtitle}{' '}
            {highlighted.job[0].amount <= 0 && (
              <span>
                Free
              </span>
            )}
          </h6>
          <span>Start at { highlighted.job[0].date}</span>
        </div>
        <button
       
          onClick= {() => history.push({pathname:`/ojt/details/${highlighted.job[0].jobId}`,state: {
            type:"Executive Program" ,
          }})}
          className='job-highlight-btn'
        >
          {data.buttontext}
        </button>
      </div>
    </div>
  );
}

export default Highlighted;
