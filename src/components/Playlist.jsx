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
  
  const skills = [
    "Professionalism",
    "Integrity/Trustworthiness",
    "Treat others with respect/courtesy",
    "Listen Attentively & Respectfully",
    "Respond Promptly",
    "Multitasking",
    "Using & Evaluating Tech Tools",
    "Adapting Work Habits",
    "Legal Research",
    "Identity & Gather Facts and Legal Issues",
    "Draft Pleadings Motions Briefs",
    "Request/Produce Discovery",
  ]


  if (resources){
  console.log(resources)
  return (
    <div className="playlist">
    <div className = "playlist-header resources">
      <p>Resource</p>
      <p>Skills</p>
      <p>Media Type</p>
    </div>
    <hr/>
    {resources.map((resource) => (
      (resource &&
      <div className="resources">
        <div className = "resource-name" >
          <a href = {resource.link}>
            <p>{resource.name}</p>
          </a>   
        </div>
        <ul className="resource-skills">
          {resource.skills.map((bool, index) => (
            <li className="skills-checkbox">
              {bool ? skills[index] : ''}
            </li>
          ))}
        </ul>
        <div>{resource.media}</div>
      </div>)
    ))}
    </div>
  );
        }
}
