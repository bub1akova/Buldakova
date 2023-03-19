const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (locations, currentPoint) => {
  if (locations.length == 0) return null;
  let dis = 123456789, coordination, location = '';
  for (let i of locations) {
      let [name, coordinate] = i;
      if (getDistance(coordinate, currentPoint) <= dis) {
          dis = getDistance(coordinate, currentPoint);
          coordination = coordinate;
          location = name;
      }
  }
  return [location, coordination]
}
// END
