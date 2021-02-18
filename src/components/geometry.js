/*
  About the challange:
    There are many magic numbers floating around here. As this is a code
    challange, I've not taken the proper care to make the code beautiful,
    my objective was solely to fullfill the challange here.
*/

export const insideOrEdgePolygon = (x, y, polygon) => {
  /*
    Simple logic: if the point (x, y) is inside polygon, then
    it's to the same side (left or right) of all edge vectors from polygon

    ANNND you gave me a concave polygon to work with :/
    Keeping this as a reminder that I can never be too careful
  */
  const pl = polygon.length
  let dir = null
  for (let i = 0; i < pl; i++) {
    // polygon edge vector point A and B
    const a = polygon[i]
    const b = polygon[(i + 1) % pl]
    // center graph around point A
    const cx = x - a[0]
    const cy = y - a[1]
    const vx = b[0] - a[0]
    const vy = b[1] - a[1]

    const crossproduct = vy * cx - vx * cy
    
    if (crossproduct === 0) continue

    if (dir === null) dir = crossproduct / Math.abs(crossproduct)
    else {
      let current_dir = crossproduct / Math.abs(crossproduct)
      if (current_dir != dir) return false
    }
  }
  return true
}

export const raycastPointInsidePolygon = (x, y, polygon) => {
  /*
    https://en.wikipedia.org/wiki/Point_in_polygon#Ray_casting_algorithm
  */
  
}