import {rotations} from './constants';

let placeOfPoint = 50;
let zeroCount = 0;

function solveDay01() {
    const arrayOfRotations = rotations.split('\n');
    
    arrayOfRotations.forEach((rotation) => {
        const side = rotation[0];
        const fullMovePoints = rotation.slice(1);
        const movePoints = Number(fullMovePoints.slice(-2));

        zeroCount += Math.floor(Number(fullMovePoints) / 100);

        const newPlaceOfPoint = placeOfPoint + (side === 'R' ? movePoints : -movePoints);

        if (newPlaceOfPoint > 99) {
            if (placeOfPoint !== 0) {
                zeroCount++;
            }

            placeOfPoint = newPlaceOfPoint % 100;
        } else if (newPlaceOfPoint < 0) {
            if (placeOfPoint !== 0) {
                zeroCount++;
            }

            placeOfPoint = 100 + newPlaceOfPoint;
        } else {
            placeOfPoint = newPlaceOfPoint;

            if (placeOfPoint === 0) {
                zeroCount++;
            }
        }
    })

    return zeroCount;
}

console.log('>>>zeroCount', solveDay01());
