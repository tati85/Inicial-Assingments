//obj
let Rover={
  direction:"N",
  position:{x:0,y:0},
  travelLog:[{x:0,y:0}]
};

//function to turn left the rover
function turnLeft(rover){
   switch(rover.direction)
   {
     case "N": rover.direction="W";
     break;
     case "W": rover.direction="S";
     break;
     case "S": rover.direction="E";
     break;
     case "E": rover.direction="N";
     break;
   }  
}
//function to turn right the rover
function turnRight(rover){
  switch(rover.direction)
   {
     case "N": rover.direction="E";
     break;
     case "E": rover.direction="S";
     break;
     case "S": rover.direction="W";
     break;
     case "W": rover.direction="N";
     break;
   } 
}

//function to move foward the rover
function moveForward(rover){
  let outBoundaries=false;  
   
  switch(rover.direction){  
    case "N":
    { 
        if(rover.position.y===0)
          outBoundaries=true;
        else
        {
          rover.position.y--;        
          rover.travelLog.push({x:rover.position.x,y:rover.position.y});
        }
        
    }
    break;
    case "W":
    {
         if(rover.position.x===0)
          outBoundaries=true;
        else
        {
          rover.position.x--;         
          rover.travelLog.push({x:rover.position.x,y:rover.position.y});
        } 
         
    }
    break;
    case "S":
    { 
        if(rover.position.y===9)
          outBoundaries=true;
        else
        {
          rover.position.y++;      
          rover.travelLog.push({x:rover.position.x,y:rover.position.y});
        }  
        
    }
    break;
    case "E":
    {
        if(rover.position.x===9)
          outBoundaries=true;
        else
        {
          rover.position.x++;        
          rover.travelLog.push({x:rover.position.x,y:rover.position.y});
        }                
    }
    break;
    } 

  if(outBoundaries)
    console.log("You can't place player outside of the board!");

}


//fuction move backward
function moveBackward(rover)
{
   let outBoundaries=false;  
   
  switch(rover.direction){  
    case "N":
    { 
        if(rover.position.y===9)
          outBoundaries=true;
        else
        {
          rover.position.y++;        
          rover.travelLog.push({x:rover.position.x,y:rover.position.y});
        }
        
    }
    break;
    case "W":
    {
         if(rover.position.x===9)
          outBoundaries=true;
        else
        {
          rover.position.x++;         
          rover.travelLog.push({x:rover.position.x,y:rover.position.y});
        } 
         
    }
    break;
    case "S":
    { 
        if(rover.position.y===0)
          outBoundaries=true;
        else
        {
          rover.position.y--;      
          rover.travelLog.push({x:rover.position.x,y:rover.position.y});
        }  
        
    }
    break;
    case "E":
    {
        if(rover.position.x===0)
          outBoundaries=true;
        else
        {
          rover.position.x--;        
          rover.travelLog.push({x:rover.position.x,y:rover.position.y});
        }                
    }
    break;
    } 

  if(outBoundaries)
    console.log("You can't place player outside of the board!");
}

//function to get the array of moves
function commands(movement,Rover)
{
  //validation
  for(let i=0;i<movement.length;i++)
  { 
    let l=movement.charAt(i).toLowerCase();
    if(l==="f"|| l==="b"||l==="l"||l==="r")
    { 
      switch(l)
      {
      case "f":moveForward(Rover);
      break;
      case "r":turnRight(Rover);
      break;
      case "l":turnLeft(Rover);
      break;
      case "b":moveBackward(Rover);
      break;
      }
    }    
  } 
}
commands("RFFrfflfrbferbbbf",Rover);

console.log(Rover.travelLog);
