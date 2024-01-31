//-para saber si hay victoria
export const checkWin = actualLevel =>{
return ((actualLevel.cellsCleared == actualLevel.cellsToClear) && 
    (actualLevel.flagged == actualLevel.eggs) ) ? true : false;
}
