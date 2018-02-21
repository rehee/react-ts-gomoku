import * as React from 'react';
import { PieceProp, GameState } from './PieceItem';
import BorderRow from './border-row';
import { CheckColorInLines } from '../services/check-link';
const getBord = (x: number, y: number, click: any): PieceProp[][] => {
    const result: PieceProp[][] = [];
    for (let i = 0; i < y; i++) {
        const row: PieceProp[] = [];
        for (let r = 0; r < x; r++) {
            row.push(new PieceProp(r, i, click(i, r)));
        }
        result.push(row);
    }
    return result;
};
const clickFunction = (that: Game) => {
    return (x: number, y: number, ) => {
        return () => {
            if (that.state.isFinished) {
                return;
            }
            let i = that.state.items;
            if (i[x][y].checked) {
                return;
            }

            i[x][y].checked = true;
            i[x][y].isBlack = that.state.isBlack;
            that.setState({ items: i });
            let finished = CheckColorInLines(3, that.state.isBlack, that.state.items);
            if (finished) {

                that.setState({ isFinished: true });
                return;
            }
            that.setState({ isBlack: !that.state.isBlack });

        };
    };
};
class Game extends React.Component<{}, GameState> {
    public x: number = 3;
    public y: number = 3;
    public state: GameState = {
        items: getBord(this.x, this.y, clickFunction(this)),
        isBlack: true,
        isFinished: false
    };
    render() {
        return (
            <div>
                <h1>
                    this is a game
                </h1>
                <h2>
                    {this.state.isBlack && <span>black turn</span>}
                    {!this.state.isBlack && <span>red turn</span>}
                    {this.state.isFinished && <span>game finished</span>}
                </h2>
                <div>
                    {this.state.items.map((b, i) => <BorderRow key={i + '_row'} {...{ items: b }} />)}
                </div>

            </div>
        );
    }
}

export default Game;