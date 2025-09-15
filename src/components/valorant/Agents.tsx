import React, { useEffect, useState } from 'react';
import axios from "axios";

function Agents() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    async function fetchAgents() {
      try {
        const response = await axios.get("https://valorant-api.com/v1/agents");
        setAgents(response.data.data);
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    }
    fetchAgents();
  }, []);


  return (
    <div>
      {agents.map(agent => (
        <div key={agent.uuid}>
          <img src={agent.displayIcon} alt={agent.displayName} width={50} />
          <p>{agent.displayName}</p>
        </div>
      ))}
    </div>
  );
}

export default Agents;