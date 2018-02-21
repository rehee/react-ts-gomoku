import { PieceProp } from '../components/PieceItem';
export function GetCheckList(isBlack: boolean, pieceLine: PieceProp[]): boolean[] {
    return pieceLine.map(b => b.isBlack === isBlack && b.checked === true);
}
export function CheckLinkInLine(linkNumber: number, checkQue: boolean[]): boolean {
    if (checkQue === null || checkQue.length < linkNumber) {
        return false;
    }

    for (let i = 0; i <= (checkQue.length - linkNumber); i++) {
        let count = checkQue.slice(i, i + linkNumber).filter(b => b === true).length === linkNumber;
        if (count) {
            return true;
        }
    }
    return false;
}
export function GetPieceLists(lineAngel: number, bord: PieceProp[][]): PieceProp[][] {
    let result: PieceProp[][] = [];
    switch (lineAngel) {
        case 90:
            for (let i = 0; i < bord[0].length; i++) {
                let line: PieceProp[] = [];
                for (let l = 0; l < bord.length; l++) {
                    line.push(bord[l][i]);
                }
                result.push(line);
            }
            break;
        case 45:
            for (let startPoint = bord[0].length - 1; startPoint >= 0; startPoint--) {
                let x = startPoint;
                let line: PieceProp[] = [];
                let y: number = 0;
                do {
                    line.push(bord[y][x]);
                    x++;
                    y++;
                } while (x < bord[0].length && y < bord.length && x >= 0 && y >= 0);
                result.push(line);
            }
            for (let startPoint = 1; startPoint < bord.length; startPoint++) {
                let line: PieceProp[] = [];
                let x: number = 0;
                let y = startPoint;
                do {
                    line.push(bord[x][y]);
                    x++;
                    y++;
                } while (x < bord[0].length && y < bord.length && x >= 0 && y >= 0);
                result.push(line);
            }
            break;
        case 135:
            for (let startPoint = 0; startPoint < bord[0].length; startPoint++) {
                let line: PieceProp[] = [];
                let x = startPoint;
                let y: number = 0;
                do {
                    line.push(bord[y][x]);
                    x--;
                    y++;
                } while (x < bord[0].length && y < bord.length && x >= 0 && y >= 0);
                result.push(line);
            }
            for (let startPoint = 1; startPoint < bord.length; startPoint++) {
                let line: PieceProp[] = [];
                let x: number = bord.length - 1;
                let y = startPoint;
                do {
                    line.push(bord[x][y]);
                    x--;
                    y++;
                } while (x < bord[0].length && y < bord.length);
                result.push(line);
            }
            console.log(result);
            break;
        default:
            result = bord.map(b => b);
            break;
    }
    return result;
}
export function CheckColorInLines(linkNumber: number, isBlack: boolean, bord: PieceProp[][]): boolean {
    for (let i = 0; i < 4; i++) {
        let pList: PieceProp[][] = GetPieceLists(45 * i, bord);
        let checkColorList = pList.filter(b => b.length >= linkNumber)
            .map(b => GetCheckList(isBlack, b));

        let isok = checkColorList
            .map(b => CheckLinkInLine(linkNumber, b))
            .filter(b => b === true)
            .length > 0;
        if (isok) {
            return true;
        }
    }
    return false;
}
