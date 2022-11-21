import { MajorColorNames, MinorColorNames } from './colorPair.js';
import { getColorFromPairNumber } from './colorPairFunctions.js';

export function colorCodeReferenceManual() {
    let referenceManual = ` 
    | Pair No. | MajorColor | MinorColor |
    --------------------------------------`;
    let totalPairNums = MajorColorNames.length * MinorColorNames.length;
    for (let x = 1; x <= totalPairNums; x++) {
        let pair = getColorFromPairNumber(x);
        let row = "    | ";
        row += x;
        if (x < 10) {
            row += "        | ";
        } else {
            row += "       | ";
        }
        row += pair.majorColor;
        //introducing space based on header length
        for (let i = 0; i < 10 - pair.majorColor.length; i++) {
            row += " ";
        }
        row += " | ";
        row += pair.minorColor;
        //introducing space based on header length
        for (let j = 0; j < 10 - pair.minorColor.length; j++) {
            row += " ";
        }
        row += " |";
        referenceManual += "\n" + row;
    }
    return referenceManual;
}