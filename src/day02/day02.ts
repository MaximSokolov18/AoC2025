import {ID_RANGES} from './constants';

function solveDay02() {
    let sumOfInvalidIds = 0;
    const arrayOfIdRanges = ID_RANGES
        .split(',')
        .map((range) => range.split('-'));

    for (const [from, to] of arrayOfIdRanges) {
        for (let i = Number(from); i <= Number(to); i++) {
            const strId = String(i);

            let str = '';
            for (const char of strId) {
                str += char;
                const matchTimes = strId.split(str).length - 1;

                const isAllNumbersSame = str.length === 1 && matchTimes === strId.length;
                const isSequenceRepeat = str.length !== 1 && strId.length / str.length === matchTimes;

                if (matchTimes > 1 && (isAllNumbersSame || isSequenceRepeat)) {
                    sumOfInvalidIds += i;
                    break;
                }
            }
        }
    }

    console.log('>>>sumOfInvalidIds', sumOfInvalidIds);
}

const start = performance.now();
solveDay02();
const end = performance.now();
console.log(`Execution time: ${end - start} milliseconds`);