import {ID_RANGES} from './constants';


function solveDay02() {
    let sumOfInvalidIds = 0;
    const arrayOfIdRanges = ID_RANGES
        .split(',')
        .map((range) => range.split('-'));

    for (const [from, to] of arrayOfIdRanges) {
        for (let i = Number(from); i <= Number(to); i++) {
            const strId = String(i);
            const middleIndex = Math.floor(strId.length / 2);

            const firstHalf = strId.slice(0, middleIndex);
            const secondHalf = strId.slice(middleIndex);
            if (firstHalf === secondHalf) {
                sumOfInvalidIds += i;
            }
        }
    }

    console.log('>>>sumOfInvalidIds', sumOfInvalidIds);
}

solveDay02();
