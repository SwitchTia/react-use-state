import { useState } from "react";
import Button from "./Button";

export default function Main({ languages }) {
  const [selectedIndex, setSectedIndex] = useState(0)
    
  return (
    <main>
      <div className="container">
    
        <div className="flex">

          {languages.map((language, index) => (

            <Button 
            key={language.id} 
            language={language}

            onClick={() => setSectedIndex(index)} 
            />
          ))}
        </div>
        
        <div className="box">
          <p>{languages[selectedIndex].description}</p>
        </div>
      </div>
    </main>
  );
}