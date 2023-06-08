import React from 'react';
import { getTop5Resources } from '../utilities';
import { getResourceByPath} from '../firebase.js'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faLaptop, faAngleUp, faAngleDown, faFileLines, faBookmark, faInfoCircle, faPodcast, faCheckToSlot} from '@fortawesome/free-solid-svg-icons'

export default function Playlist(props) {
  const [resources, setResources] = useState([])



  const threeSkills = props.leastValues
  console.log(threeSkills)
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

  const skillColors = ["#0d7a71",
  "#c90d7a",
  "#7ac90d",
  "#7a0d9c",
  "#9c7a0d",
  "#0d4a7a",
  "#7a3b0d",
  "#0d9c7a",
  "#7a0d28",
  "#bf3575",
  "#3b0d7a"]

  function Resource(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const resource = props.data;
    
    
    function handleClick() {
      setIsExpanded(!isExpanded);
    }
   

    return (
      
      <a href = {resource.link} className="resource" data-testid="resource" >

            <div className = "resource-icon">
              <FontAwesomeIcon icon={media_type[resource.media] ? media_type[resource.media] : media_type["misc"]} size="2x" color= "#5998c5"/>
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
 
      </a>   
   

    );
  }


  if (resources){
  return (
    <div className="playlist">

      
        <h2>Your Top 5 Resources</h2>
        <p>These resouces will help you improve in the 3 areas you are less proficient</p>

      
      {resources.map((resource) => (
        (resource &&
          <Resource data = {resource}/>
      )
      ))}
     
      
    </div>
  );
  }
}
