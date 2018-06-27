function generateSpiralMatrix(length) {
  const result = Array.from({length}, () => []);
  const vector = {x : 0, y : 1};
  let dx = 1, dy = -1;
  let position = 1, xCoords = 0, yCoords = 0;

  const updateVector = () => {
      vector.x += dx;
      vector.y += dy;
      dx = vector.x ? -dx : dx;
      dy = vector.y ? -dy : dy;
  };

  while (position <= length*length) {
    const newXCoords = (length + xCoords + vector.x) % length;
    const newYCoords = (length + yCoords + vector.y) % length;

    result[xCoords][yCoords] = position++;

    if (result[newXCoords][newYCoords] > 0) {
      updateVector();
    }

    xCoords += vector.x;
    yCoords += vector.y;
  }
  return result;
}

function printSpiralMatrix(length) {
  const spiralMatrix = generateSpiralMatrix(length);
  console.log('Spiral matrix size: ' + length);
  for (const row of spiralMatrix) {
    console.log(row);
  }
}

printSpiralMatrix(5);
