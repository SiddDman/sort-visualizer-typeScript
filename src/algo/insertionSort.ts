import { AnimationArrayType } from "@/app/lib/types";

function runInsertionSort(array: number[], animations: AnimationArrayType) {
    for (let i = 1; i < array.length; i++) {
        animations.push([[i], false]);
        let j = i - 1, key = array[i];
        while (j >= 0 && array[j] > key) {
            animations.push([[j, j + 1, i], false]);
            array[j + 1] = array[j];
            animations.push([[j + 1, array[j]], true]);
            j -= 1;
        }
        //swap
        array[j + 1] = key;
        animations.push([[j + 1, key], true]);
    }
}

export function generateInsertionSortArray(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void
) {
    if (isSorting)
        return;
    if (array.length <= 1)
        return [];

    const animations: AnimationArrayType = [];
    const auxiliaryArray = array.slice();
    runInsertionSort(auxiliaryArray, animations);
    runAnimation(animations);
}