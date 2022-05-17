// HINT BUTTON
const button = document.getElementById('show-hint');
const hint = document.querySelector('.hint')
button.addEventListener('click', (event) => {
  hint.classList.toggle('active');
})

// GAME
const canMove = (tile) => {
  // Check i can move means to check the position for
  // element that the user clicked and the empty tile position
  const emptyTile = document.querySelector('.empty')
  const emptyTileRow = emptyTile.parentElement.rowIndex
  const emptyTileColumn = emptyTile.cellIndex
  const clickedTileRow = tile.parentElement.rowIndex
  const clickedTileColumn = tile.cellIndex
  const canMoveVertically = clickedTileColumn === emptyTileColumn && ((clickedTileRow - emptyTileRow) === 1 || (clickedTileRow - emptyTileRow) === -1)
  const canMoveHorizotally = clickedTileRow === emptyTileRow && ((clickedTileColumn - emptyTileColumn) === 1 || (clickedTileColumn - emptyTileColumn) === -1)

  return canMoveHorizotally || canMoveVertically
}

const checkIfPLayerWins = () => {
  // Select all tiles as nodeList
  const tiles = document.querySelectorAll('td')
  // Convert nodeList into Array to use array methods!
  const tilesArray = Array.from(tiles)
  // map a new array with elements as player ordered in game
  const playerSolution = tilesArray.map((element) => {
    const number = parseInt(element.innerText, 10)
    return number
  })

  const solution = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN]
  // We can't compare arrays in Javascript
  // so we convert them into strings
  if (playerSolution.join() === solution.join()) {
    alert('YOU WIN');
  }
}

// 1. Select all the tiles
const tiles = document.querySelectorAll('td')
// 2. For each tile
tiles.forEach((tile) => {
  // 3. listen to the click event
  tile.addEventListener('click', (event) => {
    const clickedTile = event.currentTarget
    if (canMove(clickedTile)) {
      // select empty tile
      const emptyTile = document.querySelector('.empty')
      // replace the empty tile content with the clicked tile content
      emptyTile.innerText = clickedTile.innerText
      // remove the clicked tile content
      clickedTile.innerText = ""
      // remove the empty class
      emptyTile.classList.remove('empty');
      // add empty class to clicked tile
      clickedTile.classList.add('empty');
    }
    checkIfPLayerWins()
  })
})
