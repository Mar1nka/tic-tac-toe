class TicTacToe {
    constructor() {
        this.fieldSize = 3;
        this.currentSymbol = 'x';
        this.field = [];

        for(var i = 0; i  < this.fieldSize; i++) {
            var rowArray = [];

            for(var j = 0; j < this.fieldSize; j++) {
                rowArray.push(null);
            }

            this.field.push(rowArray);
        }
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {

        if(this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.currentSymbol;

            if(this.currentSymbol === 'x') {
                this.currentSymbol = 'o';
            } else if(this.currentSymbol === 'o') {
                this.currentSymbol = 'x';
            }
        }

    }

    isFinished() {
        return this.getWinner();
    }

    getWinner() {
        var counterX = 0;
        var counterO = 0;

        for (var i = 0; i < this.fieldSize; i++) {
            for (var j = 0; j < this.fieldSize; j++) {

                if (this.field[i][j] === 'x') {
                    ++counterX;
                } else if (this.field[i][j] === 'o') {
                    ++counterO;
                }
            }

            if (counterX === this.fieldSize) {
                return 'x'
            } else if (counterO === this.fieldSize) {
                return 'o';
            } else {
                counterX = 0;
                counterO = 0;
            }
        }


        for (var i = 0; i < this.fieldSize; i++) {
            for (var j = 0; j < this.fieldSize; j++) {
                if (this.field[j][i] === 'x') {
                    ++counterX;
                } else if (this.field[j][i] === 'o') {
                    ++counterO;
                }
            }
            if (counterX === this.fieldSize) {
                return 'x'
            } else if (counterO === this.fieldSize) {
                return 'o';
            } else {
                counterX = 0;
                counterO = 0;
            }
        }

        for (var i = 0; i < this.fieldSize; i++) {
            if (this.field[i][i] === 'x') {
                ++counterX;
            } else if (this.field[i][i] === 'o') {
                ++counterO;
            }
        }

        if (counterX === this.fieldSize) {
            return 'x'
        } else if (counterO === this.fieldSize) {
            return 'o';
        } else {
            counterX = 0;
            counterO = 0;
        }


        for (var i = 0, j = this.fieldSize - 1; i < this.fieldSize; i++, j--) {
            if (this.field[j][i] === 'x') {
                ++counterX;
            } else if (this.field[j][i] === 'o') {
                ++counterO;
            }

        if (counterX === this.fieldSize) {
            return 'x'
        } else if (counterO === this.fieldSize) {
            return 'o';
        } else {
            counterX = 0;
            counterO = 0;
        }
    }



    return null;

    }

    noMoreTurns() {

        for(var i = 0; i  < this.fieldSize; i++) {

            for(var j = 0; j < this.fieldSize; j++) {
                if(this.field[i][j] === null){
                    return false;
                }
            }
        }

        return true;
    }

    isDraw() {
        return (this.noMoreTurns() === true) && (this.getWinner() === null);
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;


function test () {
    var game = new TicTacToe ();
    game.nextTurn(0, 1);
    var s = game.getCurrentPlayerSymbol();


}


test();