# Sorting Visualizer

The Sorting Visualizer visualizes the sorting process for several algorithms in real-time. It allows users to adjust the speed of animations and provides a practical learning experience for sorting algorithms. It is built using Next.js, Tailwind CSS, and TypeScript and deployed using Vercel.

## Table of Contents
- [Features](#features)
- [Algorithms Used](#algorithms-used)
- [Time Complexity Comparison](#time-complexity-comparison)
- [Live Deployment](#live-deployment)
- [Future Improvements](#future-improvements)
- [Project Set Up](#project-set-up)

## Features
- Visualizes the following sorting algorithms:
  - Bubble Sort
  - Insertion Sort
  - Selection Sort
  - Quick Sort
  - Merge Sort
- Animation speed control
- Responsive design built with Tailwind CSS
- Codebase written in TypeScript for type safety and scalability

## Algorithms Used

### Bubble Sort
- **Description**: A simple comparison-based sorting algorithm. Bubble sort repeatedly compares and swaps adjacent elements if they are in the wrong order, moving larger elements towards the end with each pass through the list. This process continues until the list is sorted and no more swaps are needed.
- **Best Case**: O(n)
- **Average Case**: O(n²)
- **Worst Case**: O(n²)

### Insertion Sort
- **Description**: Insertion sort builds the final sorted array one element at a time, by repeatedly taking the next unsorted element and inserting it into its correct position among the previously sorted elements. This process continues until all elements have been inserted into their proper place, resulting in a sorted list.
- **Best Case**: O(n)
- **Average Case**: O(n²)
- **Worst Case**: O(n²)

### Selection Sort
- **Description**: Selection sort works by repeatedly finding the minimum element from the unsorted portion of the list and swapping it with the element at the current position. This process is continued for each position in the list, moving the boundary of the sorted and unsorted portions one element forward each time until the entire list is sorted.
- **Best Case**: O(n²)
- **Average Case**: O(n²)
- **Worst Case**: O(n²)

### Quick Sort
- **Description**: Quick sort selects a 'pivot' element from the array and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively, and the sorted sub-arrays are combined with the pivot to form the sorted array.
- **Best Case**: O(n log n)
- **Average Case**: O(n log n) 
- **Worst Case**: O(n²)

### Merge Sort
- **Description**: Merge sort divides the unsorted list into n sublists, each containing one element (a list of one element is considered sorted), and then repeatedly merges these sublists to produce new sorted sublists until there is only one sublist remaining, which is the sorted list. This algorithm uses a divide-and-conquer approach, splitting the list in half recursively and merging the sorted halves back together.
- **Best Case**: O(n log n)
- **Average Case**: O(n log n) 
- **Worst Case**: O(n log n)

## Time Complexity Comparison

| Algorithm      | Best Case   | Worst Case  | Average Case |
|----------------|-------------|-------------|--------------|
| Bubble Sort    | O(n)        | O(n²)       | O(n²)        |
| Insertion Sort | O(n)        | O(n²)       | O(n²)        |
| Selection Sort | O(n²)       | O(n²)       | O(n²)        |
| Quick Sort     | O(n log n)  | O(n²)       | O(n log n)   |
| Merge Sort     | O(n log n)  | O(n log n)  | O(n log n)   |

## Live Deployment
You can view the live version of this project at [Live Sorting Visualizer](https://sort-wiz.vercel.app/).

## Future Improvements
- Add more sorting algorithms like Heap Sort, Radix Sort, and Counting Sort.
- Allow users to input custom arrays for sorting.
- Improve the user interface with better controls for selecting algorithms and speed.
- Add a step-by-step visualization option for better learning.

## Project Set Up

1. **Clone the Repository**:
```bash
   git clone https://github.com/SiddDman/sorting-visualizer.git
   cd sorting-visualizer

```

2. **Installing Dependencies**:

```bash
npm install

```

3. **Run the Development Server**
   
```bash
npm run dev

```

4. **Visit the Application**
   Open your browser and go to ```http://localhost:3000.```

