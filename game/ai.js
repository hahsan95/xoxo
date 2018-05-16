import reducer, {move, bad} from '.'

/**
 * moves(State) -> [...Action]
 * 
 * Return an array of actions which are valid moves from the given state.
 */
export const moves = game => [] // TODO

/**
 * score(game: State, move: Action) -> Number
 * 
 * Given a game state and an action, return a score for how good
 * a move the action would be for the player whose turn it is.
 * 
 * Scores will be numbers from -1 to +1. 1 is a winning state, -1
 * is state from which we can only lose.
 */
const score = (game, move) => {
  // TODO
}

function findWinner (board) {
  for (let i = 0; i < winningCombos.length; i++){
      let winningRow = winningCombos[i];
      let tempPlayer = '';
      let counter = 0;
      for (let j=0; j<winningRow.length; j++){
          // check to see if new value matches previous
          let curVal = board.getIn(winningRow[j])
          if (j === 0){
              tempPlayer = curVal
              counter++
          } else if ( (tempPlayer === curVal) && (curVal !== '_') ) {
              counter++;
          }
      }
      return ( counter === 3 ? tempPlayer : null );
  }
}

function checkStatus (board) {
  let dashCount = 0;
  for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
        let res = board.getIn([i, j]);
          if (res === undefined) {
            dashCount++;
        }
    }
  }
  return (dashCount === 0 ? 'Tie' : 'Ongoing');
}

export function streak (board) {
  let winner = findWinner(board)
  return winner ? winner : checkStatus(board)
}

const winningCombos = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]],
  [[2, 0], [1, 1], [0, 2]]
]

/**
 * play(state: State) -> Action
 * 
 * Return the best action for the current player.
 */
export default state => undefined // TODO