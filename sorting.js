function generateArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

function printArray(arr) {
  const parts = arr.map((value, index) => `[cell - ${index},value - ${value}]`);
  console.log("{" + parts.join(",") + "}");
}

function shouldGoBefore(a, b, ascending) {
  return ascending ? a < b : a > b;
}

function bubbleSort(arr, ascending) {
  const a = [...arr]; 
  const n = a.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (shouldGoBefore(a[j + 1], a[j], ascending)) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    if (!swapped) break; 
  }
  return a;
}


function insertionSort(arr, ascending) {
  const a = [...arr];
  for (let i = 1; i < a.length; i++) {
    const key = a[i];
    let j = i - 1;
    while (j >= 0 && shouldGoBefore(key, a[j], ascending)) {
      a[j + 1] = a[j]; 
      j--;
    }
    a[j + 1] = key; 
  }
  return a;
}


function selectionSort(arr, ascending) {
  const a = [...arr];
  const n = a.length;
  for (let i = 0; i < n - 1; i++) {
    let best = i; 
    for (let j = i + 1; j < n; j++) {
      if (shouldGoBefore(a[j], a[best], ascending)) {
        best = j;
      }
    }
    if (best !== i) {
      [a[i], a[best]] = [a[best], a[i]];
    }
  }
  return a;
}

const original = generateArray(10, 1, 50);

console.log("Початковий масив:");
printArray(original);

console.log("\nBubble sort (за зростанням):");
printArray(bubbleSort(original, true));
console.log("Bubble sort (за спаданням):");
printArray(bubbleSort(original, false));

console.log("\nInsertion sort (за зростанням):");
printArray(insertionSort(original, true));
console.log("Insertion sort (за спаданням):");
printArray(insertionSort(original, false));

console.log("\nSelection sort (за зростанням):");
printArray(selectionSort(original, true));
console.log("Selection sort (за спаданням):");
printArray(selectionSort(original, false));
