import React from "react";
import updateResource from "./updateResource";

const ResourceList = props => {
  
  const resources = updateResource(props.resource);

  return (
    <div>
      <ul>
        {resources.map(item => (
          <li key={item.id}>{item.title ? item.title : item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
