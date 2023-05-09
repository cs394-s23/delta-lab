import React from 'react';
import { getTop5Resources } from '../utilities';
import { getResourceByPath} from '../firebase.js'
import { useEffect, useState } from 'react';

export default function Playlist(props) {
  const [resources, setResources] = useState([])
  
  useEffect(() => {
    async function fetchResources() {
      const fetched_resources = await getTop5Resources(["0", "1", "7"]);
      let data = []
      fetched_resources.map(async (resource) => {
        data.push(await getResourceByPath(resource))
      })
      setResources(data)
    }
    fetchResources()
    console.log("inside", resources)
  },[]) 
  
  
  console.log("outside", resources, resources.length)


  return (
    <div className = "playlist">
      {resources.length === 0 ? (
      <div>Loading...</div>
    ) : (
      resources.map((resource) => (
        <div>
          <div>{resource.name}</div>
          <div>{resource.link}</div>
        </div>
      ))
    )}
      hiiii
    </div>
  );
}
