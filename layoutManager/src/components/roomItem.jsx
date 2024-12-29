import { useState } from 'react';
import Draggable from 'react-draggable';


const DraggableDiv = ({name,itemWidth,itemHeight}) => {

    const [bedRotation,setBedRotation]=useState(0)
    const [TVRotation,setTVRotation]=useState(0)

    function handleBedRoate(){
        setBedRotation((prevRotation) => {
            const newRotation = (prevRotation + 45) % 360;
            return newRotation;
          });
    }
    function handleTVRoate(){
        setTVRotation((prevRotation) => {
            const newRotation = (prevRotation + 45) % 360;
            return newRotation;
          });
    }
    
    
    
    return(
    <div className='container'>
    <Draggable  bounds={{ left: -0, right: 350, top: -15, bottom: 225 }}  onStop={(e, data) => console.log('Stopped dragging:', data)}> 
        <div className='contain'>
            <div className='bed'  style={{backgroundPosition:"center",backgroundRepeat:'no-repeat',border:"solid",backgroundSize:"contain", backgroundImage:"url(https://cdn-icons-png.freepik.com/512/11265/11265857.png)", width: 120, height: 160,  rotate:`${bedRotation}deg`}}>
                <img src=''></img>
                <button className="rotateButton" onClick={handleBedRoate}>↺</button>
            </div>
        </div>

        
  </Draggable>
  <Draggable  bounds={{ left: -40, right: 335, top: -180, bottom: 100 }}  onStop={(e, data) => console.log('Stopped dragging:', data)}> 
        <div className='contain'>
            <div style={{backgroundPosition:"center",backgroundRepeat:'no-repeat',border:"solid",backgroundSize:"contain", backgroundImage:"url(https://imgs.search.brave.com/a6VJPs5b5adz-xrjAoHcdszfYoTcl-gpMSdmRAeNAMU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3Lzc2LzQ5Lzcy/LzM2MF9GXzc3NjQ5/NzIzNl8yWkk2NGFS/YU96NjNIZVMxREph/U2FuVjJ0MVgzU3dl/ai5qcGc)", width: 94.4, height:27 ,  rotate:`${TVRotation}deg`}}>
                
                <button className="rotateButton" onClick={handleTVRoate}>↺</button>
            </div>
        </div>

        
  </Draggable>
    </div>
)
}
;
export default DraggableDiv;