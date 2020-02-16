import React from 'react';

import './PlayApp.css';

function PlayApp(props) {
  return (
    <div 
      className="PlayApp"
    >
      <h2>
        { props.App }
      </h2>
      <div 
        className="PlayApp_category"
      >
        <span
          className="bold"
        >
          Genre:&nbsp;
        </span>
        { props.Genres
          .split(';')
          .join(', ')
        }
      </div>
      <div 
        className="PlayApp_rating"
      >
        <span
          className="bold"
        >
          Rating:&nbsp;
        </span>
        { props.Rating }
      </div>
      <div
        className="PlayApp_last-updated"
      >
        <span
          className="bold"
        >
          Last Updated:&nbsp;
        </span>
        {props["Last Updated"]}
      </div>
      <div 
        className="PlayApp_size"
      >
        <span
          className="bold"
        >
          Size:&nbsp;
        </span>
        { props.Size }
      </div>
      <div 
        className="PlayApp_version"
      >
        <span
          className="bold"
        >
          Current Version:&nbsp;
        </span>
        {props["Current Ver"]}
      </div>
      <div
        className="PlayApp_Supported-OS"
      >
        <span
          className="bold"
        >
          Android Version:&nbsp;
        </span>
        {props["Android Ver"]}
      </div>
    </div>
  );
}

export default PlayApp;