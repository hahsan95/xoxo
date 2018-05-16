import {Map} from 'immutable'

let board = Map()

export default function reducer(state = { turn: 'X', board: board }, action) {
  // TODO
  switch(action.type) {
    case "START":
      return state
    case "MOVE":
      let newTurn = 'X'
      if (action.player === 'X') {
        newTurn = 'O'
      } 
      return { turn: newTurn, board: state.board.setIn(action.position, action.player) }
    default:
      return state
  }
}

export const move = (turn, position) => {
  return ( {type: "MOVE", position: position, player: turn} )
}

export const bad = () => {}