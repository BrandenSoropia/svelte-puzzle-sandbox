import { writable } from "svelte/store";

/**
 * Return an object containing game state as well as helpful state changes
 * to unlock rooms and reset game.
 *
 * Return State:
 * {
 *   state: {
 *     [room1]: {
 *       solved: bool
 *     }
 *   }
 * }
 *
 *
 *
 * @param {object} rooms - An array of room configs.
 * Ex:
 * [{ name: <string> }, ...]
 */
export function createGameState(roomConfigs) {
  const gameState = {
    isComplete: false,
    numRooms: roomConfigs.length,
    numSolved: 0,
  };

  roomConfigs.forEach((config) => {
    gameState[config.name] = {
      solved: false,
    };
  });

  const { subscribe, set, update } = writable(gameState);

  const unlock = (roomName) => {
    update((currentState) => {
      const updated = { ...currentState };

      updated[roomName].solved = true;
      updated.numSolved = updated.numSolved + 1;

      if (updated.numSolved === updated.numRooms) {
        updated.isComplete = true;
      }

      return updated;
    });
  };

  const reset = () => {
    set(() => gameState);
  };

  return {
    subscribe,
    unlock,
    reset,
  };
}
