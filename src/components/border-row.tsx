import * as React from 'react';
import { BorderRowProp, BorderRowState } from './PieceItem';
import Piece from './piece';
class BorderRow extends React.Component<BorderRowProp> {
    props: BorderRowProp;
    state: BorderRowState;
    constructor(item: BorderRowProp) {
        super(item);
    }
    render() {
        return (
            <div>
                {this.props.items.map((b, i) => <Piece key={i + '_item'} {...b} />)}
            </div>
        );
    }
}

export default BorderRow;