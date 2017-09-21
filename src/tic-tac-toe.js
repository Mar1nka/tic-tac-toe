
class TicTacToe {
    constructor() {
        this.fieldSize = 3;
        this.symbolO = 'o';
        this.symbolX = 'x';
        this.currentPlayerSymbol = this.symbolX;

        this.field = [];
        for (var i = 0; i < this.fieldSize; i++) {
            var rowArray = [];

            for (var j = 0; j < this.fieldSize; j++) {
                rowArray.push(null);
            }

            this.field.push(rowArray);
        }
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }


    nextTurn(rowIndex, columnIndex) {

        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;

            if (this.currentPlayerSymbol === this.symbolX) {
                this.currentPlayerSymbol = this.symbolO;
            } else {
                this.currentPlayerSymbol = this.symbolX;
            }
        }
    }


    isFinished() {
        var winner = this.getWinner();
        var isDraw = this.isDraw();

        if(winner !== null || isDraw === true) {
            return true;
        }

        return false;
    }


    getWinner() {

        if(this.getWinnerHorizontally() != null) {
            return this.getWinnerHorizontally();
        } else if(this.getWinnerVertically() != null) {
            return this.getWinnerVertically();
        } else if(this.getWinnerDiagonallyLeftRight() != null) {
            return this.getWinnerDiagonallyLeftRight();
        } else if(this.getWinnerDiagonallyRightLeft() != null) {
            return this.getWinnerDiagonallyRightLeft();
        } else {
            return null;
        }
    }


    getWinnerHorizontally() {
        var counterX = 0;
        var counterO = 0;

        for (var i = 0; i < this.fieldSize; i++) {
            for (var j = 0; j < this.fieldSize; j++) {
                if (this.getFieldValue(i, j) === this.symbolX) {
                    ++counterX;
                } else if (this.getFieldValue(i, j) === this.symbolO) {
                    ++counterO;
                }
            }

            if (counterX === this.fieldSize) {
                return this.symbolX;
            }

            if (counterO === this.fieldSize) {
                return this.symbolO;
            }

            counterX = 0;
            counterO = 0;
        }

        return null;
    }


    getWinnerVertically(){
        var counterX = 0;
        var counterO = 0;

        for (var j = 0; j < this.fieldSize; j++) {
            for (var i = 0; i < this.fieldSize; i++) {
                if (this.getFieldValue(i, j) === this.symbolX) {
                    ++counterX;
                } else if (this.getFieldValue(i, j) === this.symbolO) {
                    ++counterO;
                }
            }

            if (counterX === this.fieldSize) {
                return this.symbolX;
            }

            if (counterO === this.fieldSize) {
                return this.symbolO;
            }

            counterX = 0;
            counterO = 0;
        }

        return null;
    }


    getWinnerDiagonallyLeftRight() {
        var winner = null;
        var counterX = 0;
        var counterO = 0;

        for (var i = 0; i < this.fieldSize; i++) {
            if (this.getFieldValue(i, i) === this.symbolX) {
                ++counterX;
            } else if (this.getFieldValue(i, i) === this.symbolO) {
                ++counterO;
            }
        }

        if (counterX === this.fieldSize) {
            winner = this.symbolX;
        }
        if (counterO === this.fieldSize) {
            winner = this.symbolO;
        }

        return winner;
    }


    getWinnerDiagonallyRightLeft() {
        var winner = null;
        var counterX = 0;
        var counterO = 0;

        for (var i = 0; i < this.fieldSize; i++) {
            if (this.getFieldValue(i, this.fieldSize - 1 - i) === this.symbolX) {
                ++counterX;
            } else if (this.getFieldValue(i, this.fieldSize - 1 - i) === this.symbolO) {
                ++counterO;
            }
        }

        if (counterX === this.fieldSize) {
            winner = this.symbolX;
        }
        if (counterO === this.fieldSize) {
            winner = this.symbolO;
        }

        return winner;
    }


    noMoreTurns() {
        for (var i = 0; i < this.fieldSize; i++) {
            for (var j = 0; j < this.fieldSize; j++) {
                if (this.field[i][j] === null) {
                    return false;
                }
            }
        }

        return true;
    }


    isDraw() {
        var isNoMoreTurns = this.noMoreTurns();
        var winner = this.getWinner();

        if (isNoMoreTurns === true && winner === null) {
            return true;
        }

       return false;
    }


    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

    module.exports = TicTacToe;