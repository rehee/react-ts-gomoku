import * as React from 'react';
import { PieceState, PieceProp } from './PieceItem';
import './piece.css';
class Piece extends React.Component<PieceProp, PieceState> {
    state: PieceState = new PieceState(0, 0);
    props: PieceProp;
    constructor(item: PieceProp) {
        super(item);
    }
    render() {
        return (
            <div className="Piece" onClick={this.props.buttonClick} >
                <span className={'PieceBlack' + String(this.props.isBlack) + ' ' + 'Checked' + String(this.props.checked)}>
                    X
                </span>
            </div>
        );
    }
}

export default Piece;