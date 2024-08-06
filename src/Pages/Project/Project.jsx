import { useState } from "react";
import List from "./List";
import Modal from './Modal'

const Projects = () => {

  const [selected, setSelected] = useState(null);

  return ( 
    <div className="bg-gray-100 pb-6">
      <List setSelected={setSelected} />
      <Modal selected={selected} setSelected={setSelected} />
    </div>
   );
}
 
export default Projects;
