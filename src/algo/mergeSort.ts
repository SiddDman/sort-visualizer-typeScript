import { AnimationArrayType } from "@/app/lib/types";


function merge(
    array: number[],
    l: number,
    mid: number,
    r: number,
    animations: AnimationArrayType) {

    const left = array.slice(l, mid);
    const right = array.slice(mid, r);

    let i = 0, j = 0, k = l;
    while (i < left.length && j < right.length) {
        animations.push([[l + i, mid + j], false]);
        if (left[i] <= right[j]) {
            animations.push([[k, left[i]], true])
            array[k++] = left[i++];
        } else {
            animations.push([[k, right[j]], true])
            array[k++] = right[j++];
        }
    }

    while (i < left.length) {
        animations.push([[l + i], false])
        animations.push([[k, left[i]], true])
        array[k++] = left[i++];
    }

    while (j < right.length) {
        animations.push([[mid + j], false])
        animations.push([[k, right[j]], true])
        array[k++] = right[j++];
    }
}

function runMergeSort(array: number[]) {
    const animations: AnimationArrayType = [];
    for (let k = 1; k < array.length; k = 2 * k)
        for (let i = 0; i < array.length; i += 2 * k) {
            const l = i;
            const mid = i + k;
            const r = Math.min(i + 2 * k, array.length)
            merge(array, l, mid, r, animations)
        }
    return animations;
}

export function generateMergeSortArray(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void
) {
    if (isSorting)
        return;
    if (array.length <= 1)
        return [];

    const auxiliaryArray = [...array];
    const animations = runMergeSort(auxiliaryArray);
    runAnimation(animations);
}