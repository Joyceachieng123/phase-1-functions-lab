function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const block = distanceFromHqInBlocks(pickupLocation);
    const feet = block * 264;
    return feet
  }
  
  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(start - destination);
    const feet = blocks * 264;
    return feet
  }
  function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination);
    
    if (feet <= 400) {
      return 0;
    } else if (feet > 400 && feet <= 2000) {
      return (feet - 400) * 0.02;
    } else if (feet > 2000 && feet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  

  