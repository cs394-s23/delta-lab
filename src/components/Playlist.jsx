import React from 'react';
import { getTop5Resources } from '../utilities';
import { getResourceByPath} from '../firebase.js'
import { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faLaptop, faAngleUp, faAngleDown, faFileLines, faBookmark, faInfoCircle, faPodcast, faCheckToSlot} from '@fortawesome/free-solid-svg-icons'

export default function Playlist(props) {
  const [resources, setResources] = useState([])

  // console.log("INPUT", props.leastValues)
  const threeSkills = props.leastValues
  useEffect(() => {
    async function fetchResources() {
      let fetched_resources = await getTop5Resources(props.leastValues);
      
      let data = []
      for (let i = 0; i < fetched_resources.length; i++) {
        const resource = await getResourceByPath(fetched_resources[i]);
        data.push(resource);
      }
      setResources(data);
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

  const media_type = {
    "book": faBookOpen,
    "online course": faLaptop,
    "collection of articles": faFileLines,
    "podcase": faPodcast,
    "assessment": faCheckToSlot,
    "misc": faInfoCircle,
  }

  const skillColors = ['#FA7979', '#71E98C', '#798DFA', '#E67F0D', '#FA7979', '#71E98C', '#798DFA', '#E67F0D', '#FA7979', '#71E98C', '#798DFA', '#E67F0D'];

  function Resource(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const resource = props.data;
    console.log("data", resource)
    
    function handleClick() {
      setIsExpanded(!isExpanded);
    }
    console.log("threeSkills", threeSkills)

    return (
      <a href = {resource.link} className="resource">

            <div className = "resource-icon">
              <FontAwesomeIcon icon={media_type[resource.media] ? media_type[resource.media] : media_type["misc"]} size="2x"/>
            </div>
            <div className = "resource-info">
              <p>{resource.name}</p>
              <div className = "resource-tags">
              {threeSkills.map((area) => (
              resource.skills[area] && (
              <span>{skills[area]}</span>
              )
            ))}
              
              
              
          

    
              </div>
            
            </div>
        
        
          {/* <button className = "expand-btn" onClick = {handleClick}>
            <FontAwesomeIcon icon={isExpanded ? faAngleDown : faAngleUp} size="2x"/>
          </button> */}
 
      </a>    
    );
  }


  if (resources){
  return (
    <div className="playlist">
      
        <h2>Your Top 5 Resources</h2>
     
      {resources.map((resource) => (
        (resource &&
          <Resource data = {resource}/>
      )
      ))}
      <a >
      More </a>
    </div>
  );
  }
}
