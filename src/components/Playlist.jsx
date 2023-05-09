import React from 'react';
import { getTop5Resources } from '../utilities';
import { getResourceByPath} from '../firebase.js'
import { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';

export default function Playlist(props) {
  const [resources, setResources] = useState([])

  console.log("INPUT", props.leastValues)
  
  useEffect(() => {
    async function fetchResources() {
      let fetched_resources = await getTop5Resources(props.leastValues);
      
      let data = []
      for (let i = 0; i < fetched_resources.length; i++) {
        const resource = await getResourceByPath(fetched_resources[i]);
        data.push(resource);
      }
      setResources(data);
      console .log("data", data, data.length)
    }
    fetchResources();
  }, [props.leastValues]);
  
  //console.log("outside", resources, resources.length)


  return (
    <div className="playlist">
    {resources.map((resource) => (
      <div className="resource">
        <h3>{resource.name}</h3>
      </div>
    ))}
    </div>

  )
}
