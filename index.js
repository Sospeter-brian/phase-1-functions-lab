function distanceFromHqInBlocks(blocks){
if (blocks<42){
    return 42-blocks;
}else if (blocks>42){
    return blocks-42;
}
distanceFromHqInBlocks(43,50,34);
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264;
}
function distanceTravelledInFeet(start,destination){
    if (start<destination){
         return (destination-start) * 264;
     }else{
        return (start-destination) * 264;
 }
    //start = blocks
    //dest = blocks
    //disInB(st) 
    //disInB(des)
    
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start,destination);
        if(distance<=400){
            return 0;
        }else if(distance>400 && distance<=2000){
            return 0.02*(distance-400)
        }else if(distance>2000 && distance<=2500){
            return 25;
        }else{
            return "cannot travel that far";
        }
    }





