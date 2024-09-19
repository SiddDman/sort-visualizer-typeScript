import { generateBubbleSortArray } from "@/algo/bubbleSort";
import { generateSelectionSortArray } from "@/algo/selectionSort";
import { generateInsertionSortArray } from "@/algo/insertionSort";
import { generateMergeSortArray } from "@/algo/mergeSort";
import { AnimationArrayType, SortingAlgoType } from "./types";

export const MIN_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;

export function generateRandomNumberFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const algoOptions = [
    { label: "Bubble", value: "bubble" },
    { label: "Insertion", value: "insertion" },
    { label: "Selection", value: "selection" },
    { label: "Quick", value: "quick" },
    { label: "Merge", value: "merge" },
];


export function generateAnimationArray(
    selectedAlgo: SortingAlgoType,
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void
) {
    switch (selectedAlgo) {
        case "bubble":
            generateBubbleSortArray(isSorting, array, runAnimation)
            break;
        case "selection":
            generateSelectionSortArray(isSorting, array, runAnimation)
            break;
        case "insertion":
            generateInsertionSortArray(isSorting, array, runAnimation)
            break;
        case "merge":
            generateMergeSortArray(isSorting, array, runAnimation)
            break;
        case "quick":
            generateQuickSortArray(isSorting, array, runAnimation)
            break;
        default:
            break;
    }
}

export const sortAlgoData = {
    bubble: {
        title: "Bubble Sort",
        description:
            "A simple comparison-based sorting algorithm. Bubble sort repeatedly compares and swaps adjacent elements if they are in the wrong order, moving larger elements towards the end with each pass through the list. This process continues until the list is sorted and no more swaps are needed.",
        worstCase: "O(n²)",
        averageCase: "O(n²)",
        bestCase: "O(n)",
    },
    insertion: {
        title: "Insertion Sort",
        description:
            "Insertion sort builds the final sorted array one element at a time, by repeatedly taking the next unsorted element and inserting it into its correct position among the previously sorted elements. This process continues until all elements have been inserted into their proper place, resulting in a sorted list.",
        worstCase: "O(n²)",
        averageCase: "O(n²)",
        bestCase: "O(n)",
    },
    selection: {
        title: "Selection Sort",
        description:
            "Selection sort works by repeatedly finding the minimum element from the unsorted portion of the list and swapping it with the element at the current position. This process is continued for each position in the list, moving the boundary of the sorted and unsorted portions one element forward each time until the entire list is sorted.",
        worstCase: "O(n²)",
        averageCase: "O(n²)",
        bestCase: "O(n²)",
    },
    merge: {
        title: "Merge Sort",
        description:
            "Merge sort divides the unsorted list into n sublists, each containing one element (a list of one element is considered sorted), and then repeatedly merges these sublists to produce new sorted sublists until there is only one sublist remaining, which is the sorted list. This algorithm uses a divide-and-conquer approach, splitting the list in half recursively and merging the sorted halves back together.",
        worstCase: "O(n log n)",
        averageCase: "O(n log n)",
        bestCase: "O(n log n)",
    },
    quick: {
        title: "Quick Sort",
        description:
            "Quick sort selects a 'pivot' element from the array and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively, and the sorted sub-arrays are combined with the pivot to form the sorted array.",
        worstCase: "O(n²)",
        averageCase: "O(n log n)",
        bestCase: "O(n log n)",
    },
}