import { useState, useEffect } from "react";
import axios from "axios";

const updateResource = resource => {
    
  const [resources, setResources] = useState([]);

  const fetchLists = async () => {
    console.log("resource", resource);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };

  useEffect(() => {
    fetchLists(resource);
  }, [resource]);

  return resources;
};

export default updateResource;