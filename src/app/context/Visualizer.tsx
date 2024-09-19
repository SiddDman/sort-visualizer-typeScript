"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { SortingAlgoType } from "../lib/types"
import { generateRandomNumberFromInterval, MAX_ANIMATION_SPEED } from "../lib/utils";

interface SortingAlgoContextType {
    arrayToSort: number[],
    setArrayToSort: (array: number[]) => void,
    selectedAlgo: SortingAlgoType,
    setSelectedAlgo: (algo: SortingAlgoType) => void,
    isSorting: boolean,
    setIsSorting: (isSorting: boolean) => void,
    animationSpeed: number,
    setAnimationSpeed: (speed: number) => void,
    isAnimationComplete: boolean,
    setIsAnimationComplete: (isComplete: boolean) => void;
    resetArrayAndAnimation: () => void,
    runAnimation: () => void
}

const SortingAlgoContext = createContext<SortingAlgoContextType | undefined>(undefined)

export const SortingAlgoContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [arrayToSort, setArrayToSort] = useState<number[]>([])
    const [selectedAlgo, setSelectedAlgo] = useState<SortingAlgoType>("bubble")
    const [isSorting, setIsSorting] = useState<boolean>(false)
    const [animationSpeed, setAnimationSpeed] = useState<number>(MAX_ANIMATION_SPEED)
    const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false)

    
    useEffect(() => {
        resetArrayAndAnimation();
        window.addEventListener("resize", resetArrayAndAnimation);

        return () => {
            window.removeEventListener("resize", resetArrayAndAnimation);
        }
    }, [])
    
    const resetArrayAndAnimation = () => {
        //contentContainer is the array being displayed as lines
        const contentContainer = document.getElementById("content-container")
        if (!contentContainer)
            return;
        
        const contentContainerWidth = contentContainer.clientWidth;
        const containerHeight = window.innerHeight;
        const tempArray: number[] = [];
        const numLines = contentContainerWidth / 8;
        const maxLineHeight = Math.max(containerHeight - 420, 100);
        
        for (let i = 0; i < numLines; i++)
            tempArray.push(generateRandomNumberFromInterval(35, maxLineHeight))
        
        setArrayToSort(tempArray);
        setIsAnimationComplete(false)
        setIsSorting(false)
        
    }
    
    const runAnimation = () => { }

    const value = {
        arrayToSort,
        setArrayToSort,
        selectedAlgo,
        setSelectedAlgo,
        isSorting,
        setIsSorting,
        animationSpeed,
        setAnimationSpeed,
        isAnimationComplete,
        setIsAnimationComplete,
        resetArrayAndAnimation,
        runAnimation
    }


    return <SortingAlgoContext.Provider value={value}>
        {children}
    </SortingAlgoContext.Provider>
}

export const useSortingAlgoContext = () => {
    const context = useContext(SortingAlgoContext);
    if (!context) {
        throw new Error("useSortingAlgoContext must be used within a SortingAlgoProvider")
    }
    return context;
}






