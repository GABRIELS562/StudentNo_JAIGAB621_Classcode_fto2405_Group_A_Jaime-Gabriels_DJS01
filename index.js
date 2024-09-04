/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

function calculateNewVelocity(initialVelocity, acceleration, timeInSeconds) {
  if (acceleration <= 0) {
    throw new Error("Acceleration must ve a positive number in m/s");
  }
  if (timeInSeconds <= 0) {
    throw new "Time must be a positive number in seconds"();
  }

  const velocityInMetersPerSecond = initialVelocity * 3.6; // 1000/3600

  const newVelocityInMetersPerSecond =
    velocityInMetersPerSecond + acceleration * timeInSeconds; //calculate new velocity in ms/s

  const newVelocityInKilometersPerHour = newVelocityInMetersPerSecond * 3.6; //convert back to km/h

  return newVelocityInKilometersPerHour;
}

// Calculate new distance
const newDistance = initialDistance + initialVelocity * (timeInSeconds / 3600); // Convert time to hours

// Calculate remaining fuel
const remainingFuel = initialFuel - fuelBurnRate * timeInSeconds;

/// Calculate new velocity
const newVelocity = calculateNewVelocity(
  initialVelocity,
  acceleration,
  timeInSeconds
);

// Display the results
console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);
