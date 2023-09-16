// Code your solution in this file!
function distanceFromHqInBlocks (pickupLocation) { 
  
  if (pickupLocation > 42) {
    return pickupLocation - 42;
  } else {
    return 42 - pickupLocation;
  }

}

function distanceFromHqInFeet( pickupLocation) {
  if (pickupLocation > 42) { 
  return (pickupLocation - 42) * 264;
} else {
  return (42 - pickupLocation) *264;
}
}

function distanceTravelledInFeet (pickupLocation, blocksTraveled) { 
  if (pickupLocation > 42) {
    return (blocksTraveled - pickupLocation) * 264;
  } else {
    return (pickupLocation - blocksTraveled) * 264;
  }
}
 
function calculatesFarePrice(pickupLocation, dropOffLocation) {
 const feetTraveled = () => { if (pickupLocation > dropOffLocation) 
  {
    return (pickupLocation - dropOffLocation) * 264;
  } else {
    return (dropOffLocation - pickupLocation) * 264;
  }
}
  if (feetTraveled() <= 400) {
    return 0;
  } else if (feetTraveled() <= 2000) {
    const price = (feetTraveled() - 400) * 0.02;
    return price;
  } else if (feetTraveled() <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
calculatesFarePrice(44,43);
