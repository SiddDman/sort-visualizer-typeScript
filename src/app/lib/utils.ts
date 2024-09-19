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