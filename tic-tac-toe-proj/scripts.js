const gameboard = (() => {
    const gameboard = document.querySelector('.gameboard')
    gameboard.addEventListener('click', function (e)
    { console.log(e.target.id)})
    const board = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
    board.forEach((boards,i) => {
        let space = document.getElementById(`${[i]}`);
        space.innerHTML = `${boards}`
    });
    return {
        board
    }
})();
    
console.log(gameboard.board)