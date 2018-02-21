export class PieceProp {
    checked: boolean = false;
    isBlack: boolean = false;
    x: number;
    y: number;
    constructor(x: number, y: number, click: any) {
        this.x = x;
        this.y = y;
        this.buttonClick = click;
    }
    buttonClick = () => {
        return;
    }
}

export class PieceState {
    checked: boolean = false;
    isBlack: boolean = false;
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
export class GameState {
    items: PieceProp[][];
    isBlack: boolean = true;
}
export class BorderRowProp {
    items: PieceProp[];
    constructor(items: PieceProp[]) {
        this.items = items;
    }
}
export class BorderRowState {
    items: PieceState[];
    constructor(items: PieceState[]) {
        this.items = items;
    }
}