import { useState } from 'react';
import Draggable from 'react-draggable';


const DraggableDiv = ({name,itemWidth,itemHeight}) => {

    const [rotation,setRotation]=useState(0)

    function handleRoate(){
        setRotation((prevRotation) => {
            const newRotation = (prevRotation + 45) % 360;
            return newRotation;
          });
    }
    
    
    
    return(
    <div className='container'>
    <Draggable bounds={{ left: -50, right: 250, top: 0, bottom: 200 }}  onStop={(e, data) => console.log('Stopped dragging:', data)}> 
        <div>
            <div style={{ width: itemWidth, height: itemHeight, backgroundColor: 'black', rotate:`${rotation}deg`}}>
                {name}
                <button onClick={handleRoate}>↺</button>
            </div>
        </div>
  </Draggable>
    </div>
)
}
;
export default DraggableDiv;