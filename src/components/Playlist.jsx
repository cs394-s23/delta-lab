import React from 'react';
import { getTop5Resources } from '../utilities';
import { getResourceByPath} from '../firebase.js'
import { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faLaptopFile, faAngleUp, faAngleDown, faFileLines, faBookmark} from '@fortawesome/free-solid-svg-icons'

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

  const media_type = {
    "book": faBook,
    "online-course": faLaptopFile,
    "article": faFileLines,
  }

  const skillColors = ['#FA7979', '#71E98C', '#798DFA', '#E67F0D', '#FA7979', '#71E98C', '#798DFA', '#E67F0D', '#FA7979', '#71E98C', '#798DFA', '#E67F0D'];

  function Resource(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const resource = props.data;
    
    function handleClick() {
      setIsExpanded(!isExpanded);
    }

    function skillsColor(bool, index) {
      if (bool) {
        // If the item has the current skill, return a bookmark icon with the corresponding color
        console.log("u got her")
        return <FontAwesomeIcon icon={faBookmark} style={{ color: skillColors[index] }} size = "2x"/>;
      } else {
        return null;
      }
    }
    return (
      <div className="resource">
        <div className = "wrap-left">
          <div className = "resource-icon">
            <FontAwesomeIcon icon={media_type[resource.media]} size="2x"/>
          </div>
          <div className = "resource-name" >
            <p>{resource.name}</p>
          </div>
        </div>
        <div className = "wrap-right">
          <div className = "container">
            {resource.skills.map((bool, index) => (
              <div className="bookmark">
                {skillsColor(bool, index)}
              </div> 
            ))}
          </div>
          
          <button className = "expand-btn" onClick = {handleClick}>
            <FontAwesomeIcon icon={isExpanded ? faAngleDown : faAngleUp} size="2x"/>
          </button>
        </div>       
      </div>
    );
  }


  if (resources){
  console.log(resources)
  return (
    <div className="playlist">
      <div>
        <h1>Here are your 3 areas of focus...</h1>
      </div>
      <div>
        {props.leastValues.map((area) => (
          <div className = "skill" style={{ backgroundColor: skillColors[area] }}>
            {skills[area]}
          </div>
        ))}
      </div>
      <div className = "playlist-header">
        <h1>Here are your top 5 resources...</h1>
      </div>
      {/* <hr/> */}
      {resources.map((resource) => (
        (resource &&
        <Resource data = {resource}/>
      )))}
    </div>
  );
  }
}
