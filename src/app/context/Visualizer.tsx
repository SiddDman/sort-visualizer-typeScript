"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { AnimationArrayType, SortingAlgoType } from "../lib/types"
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
    runAnimation: (animations: AnimationArrayType) => void,
    requireReset: boolean
}

const SortingAlgoContext = createContext<SortingAlgoContextType | undefined>(undefined)

export const SortingAlgoContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [arrayToSort, setArrayToSort] = useState<number[]>([])
    const [selectedAlgo, setSelectedAlgo] = useState<SortingAlgoType>("bubble")
    const [isSorting, setIsSorting] = useState<boolean>(false)
    const [animationSpeed, setAnimationSpeed] = useState<number>(MAX_ANIMATION_SPEED)
    const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false)

    const requireReset = isAnimationComplete || isSorting;


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

        const highestId = window.setTimeout(() => {
            for (let i = highestId; i >= 0; i--)
                window.clearTimeout(i)
        }, 0)

        setTimeout(() => {
            const arrayLines = document.getElementsByClassName("array-line") as HTMLCollectionOf<HTMLElement>;
            for (let i = 0; i < arrayLines.length; i++) {
                arrayLines[i].style.height = `${tempArray[i]}px`;
                arrayLines[i].classList.remove("change-line-color")
                arrayLines[i].classList.add("default-line-color")
            }
        }, 0)
    }

    const runAnimation = (animations: AnimationArrayType) => {
        setIsSorting(true);
        //I need inverse speed as when we increase the slider to the right we increase the number but this is the animation speed to display the thing. If slider value is 400, 400 is very slow but 1/400 is fast
        const inverseSpeed = (1 / animationSpeed) * 200;//in milliseconds
        const arrayLines = document.getElementsByClassName("array-line") as HTMLCollectionOf<HTMLElement>;

        const updateHeightValue = (
            lineIndex: number,
            newHeight: number | undefined
        ) => {
            if (newHeight === undefined)
                return;
            arrayLines[lineIndex].style.height = `${newHeight}px`
        }

        const updateClassList = (
            indexes: number[],
            addClassName: string,
            removeClassName: string,
        ) => {
            indexes.forEach((index) => {
                arrayLines[index].classList.add(addClassName);
                arrayLines[index].classList.remove(removeClassName);
            })
        }

        animations.forEach((animation, index) => {
            setTimeout(() => {
                const [values, isSwap] = animation;
                if (!isSwap) {
                    updateClassList(values, "change-line-color", "default-line-color")
                    setTimeout(() => {
                        updateClassList(values, "default-line-color", "change-line-color");
                    }, inverseSpeed)
                }
                else {
                    const [lineIndex, newHeight] = values;
                    updateHeightValue(lineIndex, newHeight);
                }
            }, index * inverseSpeed);
        });
    };

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
        runAnimation,
        requireReset
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






