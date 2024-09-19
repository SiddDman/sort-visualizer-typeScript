import { AnimationArrayType } from "@/app/lib/types";

function runSelectionSort(array: number[], animations: AnimationArrayType) {

    for (let i = 0; i < array.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            animations.push([[j, minIdx], false]);
            if (array[minIdx] > array[j]) {
                minIdx = j;
            }
        }
        //swap
        animations.push([[i, array[minIdx]], true]);
        animations.push([[minIdx, array[i]], true]);
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
    }
}

export function generateSelectionSortArray(
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
    runSelectionSort(auxiliaryArray, animations);
    runAnimation(animations);
}