export type SortingAlgoType =
    | "bubble"
    | "insertion"
    | "selection"
    | "quick"
    | "merge";

export type SelectOptionsType = {
    value: string,
    label: string
};

export type AnimationArrayType = [number[], boolean][];