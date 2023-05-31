import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { characterParts } from "../data";
import Navbar from "../components/Navbar";

import Image from "next/image";
import CharacterPartSelector from "../components/DogeTraitSelector";
import CharacterPreview from "../components/DogePreview";
import {
  CharacterParts,
  CharacterPart as CharacterPartType,
  SelectedCharacterParts,
} from "../types";
import React, { useRef } from "react";

const Home: NextPage = () => {
  const [selectedParts, setSelectedParts] = useState<SelectedCharacterParts>({
    Background: characterParts.Background[0],
    Skin: characterParts.Skin[0],
    Cheeks: characterParts.Cheeks[0],
    Earrings: characterParts.Earrings[0],
    Headwear: characterParts.Headwear[0],
    Clothes: characterParts.Clothes[0],
    Eyes: characterParts.Eyes[0],
    Accessories: characterParts.Accessories[0],
    special: characterParts.special[0],
  });

  const handlePartSelect = (category: keyof CharacterParts, partId: number) => {
    setSelectedParts((prevState: any) => ({
      ...prevState,
      [category]: characterParts[category].find(
        (part: CharacterPartType) => part.id === partId
      )!,
    }));
  };

  const getRandomPart = (category: keyof CharacterParts) => {
    const parts = characterParts[category];
    const randomIndex = Math.floor(Math.random() * parts.length);
    return parts[randomIndex];
  };

  const randomizeCharacter = () => {
    const newSelectedParts: SelectedCharacterParts = {
      Background: getRandomPart("Background"),
      Skin: getRandomPart("Skin"),
      Cheeks: getRandomPart("Cheeks"),
      Earrings: getRandomPart("Earrings"),
      Headwear: getRandomPart("Headwear"),
      Clothes: getRandomPart("Clothes"),
      Eyes: getRandomPart("Eyes"),
      Accessories: getRandomPart("Accessories"),
      special: characterParts.special[0],
    };
    setSelectedParts(newSelectedParts);
  };

  const previewRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[#0F0F0F] flex flex-col items-center">
      <Navbar />
      <div className="relative w-full">
        <Image src="/banner.jpeg" alt="Canvas" width={1900} height={250} />
        <div className="absolute w-full h-1/2 bottom-0 bg-gradient-to-b from-transparent to-[#0F0F0F]" />
      </div>
      <div className="max-w-screen-lg w-full px-4 pt-20 -mt-20 sm:-mt-30 md:-mt-40 lg:-mt-60 xl:-mt-96 z-10">
        <div className="p-8 pt-10 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#111111]  border border-gray-600 rounded-lg shadow-lg">
          <div>
            <CharacterPreview
              selectedParts={selectedParts}
              onRandomize={randomizeCharacter}
              previewRef={previewRef} // Pass the previewRef here
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 mx-auto">
            {Object.keys(characterParts).map((category) => (
              <div key={category} className="space-y-2">
                <h2 className="text-lg text-gray-300">{category}</h2>
                <CharacterPartSelector
                  parts={characterParts[category as keyof CharacterParts]}
                  selected={selectedParts[category as keyof CharacterParts].id}
                  onSelect={(partId: number) =>
                    handlePartSelect(category as keyof CharacterParts, partId)
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <div className="h-24"></div>
        <div className="h-32">
          <h3 className="text-gray-400 text-center text-sm mb-3 mx-auto">
            Powered by
          </h3>
          <a
            href="https://thedogecapital.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="mx-auto"
              src="/doge.png"
              alt="Doge Capital"
              width="160"
              height="125"
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
