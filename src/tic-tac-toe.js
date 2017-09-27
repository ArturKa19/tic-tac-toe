class TicTacToe {
    constructor() {
        this.gameField = [[null,null,null],[null,null,null],[null,null,null]];
        this.playerSymbol = "x";
        this.winner = null;

    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.gameField[rowIndex][columnIndex] == null) {
            this.gameField[rowIndex][columnIndex] = this.playerSymbol;
            this.playerSymbol = this.playerSymbol == "x" ? "o" : "x";
        }
    }

    isFinished() {
        let flag = false;
        if(this.isDraw())
            flag = true;
        else if(this.getWinner() != null)
            flag = true;
        return flag;
    }

    getWinner() {
        if(this.gameField[0][0] == this.gameField[0][1] && this.gameField[0][0] == this.gameField[0][2] && this.gameField[0][1] == this.gameField[0][2])
            this.winner = this.gameField[0][0];
        if(this.gameField[1][0] == this.gameField[1][1] && this.gameField[1][0] == this.gameField[1][2] && this.gameField[1][1] == this.gameField[1][2])
            this.winner = this.gameField[1][0];
        if(this.gameField[2][0] == this.gameField[2][1] && this.gameField[2][0] == this.gameField[2][2] && this.gameField[2][1] == this.gameField[2][2])
            this.winner = this.gameField[2][0];
        if(this.gameField[0][0] == this.gameField[1][0] && this.gameField[0][0] == this.gameField[2][0] && this.gameField[1][0] == this.gameField[2][0])
            this.winner = this.gameField[0][0];
        if(this.gameField[0][1] == this.gameField[1][1] && this.gameField[0][1] == this.gameField[2][1] && this.gameField[1][1] == this.gameField[2][1])
            this.winner = this.gameField[0][1];
        if(this.gameField[0][2] == this.gameField[1][2] && this.gameField[0][2] == this.gameField[2][2] && this.gameField[1][2] == this.gameField[2][2])
            this.winner = this.gameField[0][2];
        if(this.gameField[0][0] == this.gameField[1][1] && this.gameField[0][0] == this.gameField[2][2] && this.gameField[1][1] == this.gameField[2][2])
            this.winner = this.gameField[0][0];
        if(this.gameField[2][0] == this.gameField[1][1] && this.gameField[2][0] == this.gameField[0][2] && this.gameField[1][1] == this.gameField[0][2])
            this.winner = this.gameField[2][0];
        return this.winner;
    }

    noMoreTurns() {
        let flag = true;
        for(let arr of this.gameField){
            if(arr[0] == null || arr[1] == null || arr[2] == null)
                flag = false;
        }
        return flag;
    }

    isDraw() {
        let flag = true;
        if(this.gameField[0][0] == this.gameField[0][1] && this.gameField[0][0] == this.gameField[0][2] && this.gameField[0][1] == this.gameField[0][2])
            flag = false;
        if(this.gameField[1][0] == this.gameField[1][1] && this.gameField[1][0] == this.gameField[1][2] && this.gameField[1][1] == this.gameField[1][2])
            flag = false;
        if(this.gameField[2][0] == this.gameField[2][1] && this.gameField[2][0] == this.gameField[2][2] && this.gameField[2][1] == this.gameField[2][2])
            flag = false;
        if(this.gameField[0][0] == this.gameField[1][0] && this.gameField[0][0] == this.gameField[2][0] && this.gameField[1][0] == this.gameField[2][0])
            flag = false;
        if(this.gameField[0][1] == this.gameField[1][1] && this.gameField[0][1] == this.gameField[2][1] && this.gameField[1][1] == this.gameField[2][1])
            flag = false;
        if(this.gameField[0][2] == this.gameField[1][2] && this.gameField[0][2] == this.gameField[2][2] && this.gameField[1][2] == this.gameField[2][2])
            flag = false;
        if(this.gameField[0][0] == this.gameField[1][1] && this.gameField[0][0] == this.gameField[2][2] && this.gameField[1][1] == this.gameField[2][2])
            flag = false;
        if(this.gameField[2][0] == this.gameField[1][1] && this.gameField[2][0] == this.gameField[0][2] && this.gameField[1][1] == this.gameField[0][2])
            flag = false;
        if(!this.noMoreTurns())
            flag = false;
        return flag;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

