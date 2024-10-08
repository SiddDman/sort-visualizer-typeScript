import { AnimationArrayType } from "@/app/lib/types";

function partition(
    array: number[],
    l: number,
    r: number,
    animations: AnimationArrayType
) {
    let i = l, j = r + 1;
    const pivot = array[l];
    const flag = true;
    while (flag) {
        while (array[++i] <= pivot) {
            if (i === r)
                break;
            animations.push([[i], false])
        }
        while (array[--j] >= pivot) {
            if (j === l)
                break;
            animations.push([[j], false])
        }
        if (j <= i)
            break;
        animations.push([[i, array[j]], true]);
        animations.push([[j, array[i]], true]);
        [array[i], array[j]] = [array[j], array[i]];
    }
    animations.push([[l, array[j]], true]);
    animations.push([[j, array[l]], true]);
    [array[l], array[j]] = [array[j], array[l]];

    return j;
}

function runQuickSort(array: number[], l: number, r: number, animations: AnimationArrayType) {
    if (l < r) {
        const part = partition(array, l, r, animations)
        runQuickSort(array, l, part - 1, animations)
        runQuickSort(array, part + 1, r, animations)
    }
}

export function generateQuickSortArray(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void
) {
    if (isSorting)
        return;
    if (array.length <= 1)
        return [];
    const animations: AnimationArrayType = []
    const auxiliaryArray = [...array];
    runQuickSort(auxiliaryArray, 0, array.length - 1, animations);
    runAnimation(animations);
}