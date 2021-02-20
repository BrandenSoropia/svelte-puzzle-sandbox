import Home from "./Home.svelte";
import Locks from "./Locks.svelte";
import EscapeRooms from "./escape-rooms";

export default {
  "/": Home,
  "/locks": Locks,
  ...EscapeRooms,
};
