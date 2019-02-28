import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  
  const [resource, setResource] = useState("posts");

  const resourceList = [
    { id: 1, name: "todos" },
    { id: 2, name: "posts" },
    { id: 3, name: "users" },
    { id: 4, name: "comments" },
  ];

  return (
    <div>
      {resourceList.map(item => (
        <button key={item.id} onClick={() => setResource(item.name)}>
          {item.name}
        </button>
      ))}
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
