export const gameStatus = {
  SETTING: 1,
  PLAYING: 2,
  FINISHED: 3
};

export const modes = {
  SINGLE: 1,
  MULTIPLAYER: 2
}

export const LOCAL_STORAGE_KEY = {
  LEVEL_FINISHED: 'LEVEL_FINISHED_'
}

export const BOARD1 = {
  id: 'level1',
  title: '1',
  requiredLevel: null,
  colors: {
    color1: "#F2408A",
    color2: "#3B1F86",
    color3: "#EFEB66",
    color4: "#12BED6"
  },
  stepRows: 5,
  stepColumns: 5,
  notDraggableSquares: [6, 7, 8, 11, 12, 13, 16, 17, 18],
  messages: [
    "You are art!",
    "You are magic",
    "Dont give up"
  ],
  result:"2"
}

export const BOARD2 = {
  id: 'level2',
  title: '2',
  requiredLevel: 'level1',
  colors: {
    color1: "#40f24f",
    color2: "#3B1F86",
    color3: "#ec2a44",
    color4: "#12BED6"
  },
  stepRows: 7,
  stepColumns: 5,
  notDraggableSquares: [0, 1, 2, 3, 4, 30, 31, 32, 33, 34],
  messages: [
    "You are art!",
    "You are magic",
    "Dont give up"
  ],
  result: "4"
}

export const BOARD3 = {
  id: 'level3',
  title: '3',
  requiredLevel: 'level2',
  colors: {
    color1: "#ce0a0a",
    color2: "#530083",
    color3: "#f5ff6c",
    color4: "#00ffe1"
  },
  stepRows: 7,
  stepColumns: 5,
  notDraggableSquares: [0, 4, 17, 30, 34],
  messages: [
    "You are art!",
    "You are magic",
    "Dont give up"
  ],
  result: "4"
}

export const BOARDS = [BOARD1, BOARD2, BOARD3];