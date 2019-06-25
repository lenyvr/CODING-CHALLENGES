let occupiedDesks = [];

function SeatingStudents(arr) { 
    
    if(!validateInputArray(arr)) return 'arr must be a valid array and at least contains 1 element.';

    // code goes here  
    const totalDesks = arr[0];
    
    if(!validateKRange(totalDesks)) return 'K must be from 2 to 24 and a even number.';
    
    let waysToSeat = 0;
    let nextSeat, belowSeat;
  
    occupiedDesks = arr.slice(1);
    
    if(!validateOccupiedDesks(occupiedDesks, totalDesks)) return 'occupied desk must be from 0 to K.';
  
    for(i = 1; i <= totalDesks; i++) {
      
        if(isDeskOccupied(i)) continue;
      
        nextSeat = i + 1;
        belowSeat = i + 2;
      
        if(!isDeskOccupied(nextSeat) && (i%2) !== 0) {
            waysToSeat++;  
        }
      
        if(!isDeskOccupied(belowSeat) && (belowSeat) <= totalDesks) {
            waysToSeat++;  
        }
    }
  
    return waysToSeat; 
}

function isDeskOccupied(deskNumber) {
    return occupiedDesks.indexOf(deskNumber) !== -1;
}

function validateInputArray(inputArray) {
    return inputArray && Array.isArray(inputArray) && inputArray.length >= 1;
}

function validateKRange(KNumber) {
    return KNumber > 0 && KNumber <= 24 && KNumber % 2 === 0;
}

function validateOccupiedDesks(occupiedDesks, totalDesks) {
    
    let invalidOccupiedDesk = false;
    
    for(i = 0; i < occupiedDesks.length; i++) {
        if(occupiedDesks[i] < 0 || occupiedDesks[i] > totalDesks) { 
            invalidOccupiedDesk = true; 
            break;
        }
    }
    
    return !invalidOccupiedDesk;
}
   
// keep this function call here 
SeatingStudents(readline());
