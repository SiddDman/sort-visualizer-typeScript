"use client"

import Slider from "@/components/Input/Slider";
import { useSortingAlgoContext } from "./context/Visualizer";
import Select from "@/components/Input/Select";
import { algoOptions, generateAnimationArray } from "./lib/utils";
import React, { useEffect } from "react";
import { SortingAlgoType } from "./lib/types";
import { RxReset } from "react-icons/rx";
import { FaPlayCircle } from "react-icons/fa";

export default function Home() {
  const {
    arrayToSort,
    isSorting,
    animationSpeed,
    setAnimationSpeed,
    selectedAlgo,
    setSelectedAlgo,
    requireReset,
    resetArrayAndAnimation,
    runAnimation
  } = useSortingAlgoContext();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlgo(e.target.value as SortingAlgoType)
  }

  const handlePlay = () => {
    if (requireReset) {
      resetArrayAndAnimation();
      return;
    }

    generateAnimationArray(
      selectedAlgo,
      isSorting,
      arrayToSort,
      runAnimation
    )

  }

  return (
    <main className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="flex h-full justify-center">
        <div id='content-container'
          className="flex max-w-[1020px] w-full flex-col lg:px-0 px-4">
          <div className="h-[66px] relative flex items-center justify-between w-full">
            <h1 className="text-gray-300 text-2xl font-light hidden md:flex">
              Sorting Visualizer
            </h1>
            <div className="flex items-center justify-center gap-4">
              <Slider
                isDisabled={isSorting}
                value={animationSpeed}
                handleChange={(e) => setAnimationSpeed(Number(e.target.value))}
              />
              <Select
                options={algoOptions}
                defaultValue={selectedAlgo}
                onChange={handleSelectChange}
                isDisabled={isSorting}
              />
              <button className="flex items-center justify-center"
                onClick={handlePlay}
              >
                {requireReset ?
                  (<RxReset className="text-gray-400 h-8 w-8" />)
                  :
                  (<FaPlayCircle className="text-system-green60 h-8 w-8" />)
                }
              </button>
            </div>
          </div>
          <div className="relative h-[calc(100vh-66px)] w-full">
            <div className="flex justify-center absolute bottom-[32px] w-full mx-auto left-0 right-0 items-end">
              {arrayToSort.map((value, index) => (
                <div
                  key={index}
                  className="array-line relative w-1 mx-0.5 shadow-lg opacity-70 rounded-lg default-line-color"
                  style={{ height: `${value}px` }}>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
