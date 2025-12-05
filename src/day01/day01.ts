import {rotations} from './constants'; 

let placeOfPoint = 50;
let zeroCount = 0;

function solveDay01() {
    const arrayOfRotations = rotations.split('\n');
    
    arrayOfRotations.forEach((rotation) => {
        const side = rotation[0];
        const movePoints = Number(rotation.slice(1).slice(-2));

        const newPlaceOfPoint = placeOfPoint + (side === 'R' ? movePoints : -movePoints);

        if (newPlaceOfPoint > 99) {
            placeOfPoint = newPlaceOfPoint % 100;
        } else if (newPlaceOfPoint < 0) {
            placeOfPoint = 100 + newPlaceOfPoint;
        } else {
            placeOfPoint = newPlaceOfPoint;
        }

        if (placeOfPoint === 0) {
            zeroCount++;
        }
    })

    return zeroCount;
}

console.log('>>>zeroCount', solveDay01());
