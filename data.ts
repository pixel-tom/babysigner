// data.ts
import { CharacterParts } from "./types";

export const characterParts: CharacterParts = {
  background: [{ id: 0, name: "Blue", image: "/assets/background/blue.png" }],
  type: [
    { id: 0, name: "Alien", image: "/assets/type/alien.png" },
    { id: 1, name: "Dark", image: "/assets/type/dark.png" },
    { id: 2, name: "Red", image: "/assets/type/red.png" },
    { id: 3, name: "Pink", image: "/assets/type/pink.png" },
    { id: 4, name: "Brown", image: "/assets/type/brown.png" },
    { id: 5, name: "Light Brown", image: "/assets/type/light-brown.png" },
    { id: 6, name: "Skeleton", image: "/assets/type/skeleton.png" },
    { id: 7, name: "Solana", image: "/assets/type/solana.png" },
    { id: 8, name: "Zombie", image: "/assets/type/zombie.png" },
  ],
  hats: [{ id: 0, name: "None", image: "/assets/hats/none.png" }],
  clothes: [{ id: 0, name: "None", image: "/assets/clothes/none.png" }],
  eyes: [
    { id: 0, name: "None", image: "/assets/eyes/none.png" },
    { id: 1, name: "Cool Glasses", image: "/assets/eyes/cool-glasses.png" },
    { id: 2, name: "Nerd Glasses", image: "/assets/eyes/nerd-glasses.png" },
    { id: 3, name: "Purple Glasses", image: "/assets/eyes/purple-glasses.png" },
    { id: 4, name: "Yellow Glasses", image: "/assets/eyes/yellow-glasses.png" },
    { id: 5, name: "3d-glasses", image: "/assets/eyes/3d-glasses.png" },
  ],
  mouth: [{ id: 0, name: "None", image: "/assets/mouth/none.png" }],
  special: [{ id: 0, name: "None", image: "/assets/special/none.png" }],
  vr: [{ id: 0, name: "None", image: "/assets/vr/none.png" }],
};
