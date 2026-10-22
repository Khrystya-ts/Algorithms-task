// Обмін двох елементів масиву
function swap(arr, a, b) {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

// Чи має x стояти перед y у потрібному напрямку
function isBefore(x, y, ascending) {
    return ascending ? x < y : x > y;
}

// Партиціонування: півота — останній елемент.
// Повертає фінальну позицію півоти.
function partition(arr, low, high, ascending) {
    const pivot = arr[high];
    let i = low;
    for (let j = low; j < high; j++) {
        if (isBefore(arr[j], pivot, ascending)) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, high);
    return i;
}

function quickSortRange(arr, low, high, ascending) {
    if (low >= high) {
        return;
    }
    const p = partition(arr, low, high, ascending);
    quickSortRange(arr, low, p - 1, ascending);
    quickSortRange(arr, p + 1, high, ascending);
}

function quickSort(arr, ascending = true) {
    quickSortRange(arr, 0, arr.length - 1, ascending);
    return arr;
}

// Перевірка впорядкованості
function isSorted(arr, ascending = true) {
    for (let i = 1; i < arr.length; i++) {
        if (isBefore(arr[i], arr[i - 1], ascending)) {
            return false;
        }
    }
    return true;
}

function randomArray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.random() * 1000); 
    }
    return arr;
}


function bubbleSort(arr, ascending = true) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (isBefore(arr[j + 1], arr[j], ascending)) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

function measure(name, sortFn, source, ascending) {
    const copy = source.slice();
    const start = performance.now();
    sortFn(copy, ascending);
    const time = performance.now() - start;
    console.log(
        `${name} | ${source.length} елементів | ${ascending ? "зростання" : "спадання"} | ` +
        `${time.toFixed(2)} мс | впорядковано: ${isSorted(copy, ascending)}`
    );
}

for (const n of [1_000, 10_000, 100_000]) {
    const data = randomArray(n);
    for (const asc of [true, false]) {
        measure("QuickSort", quickSort, data, asc);
        measure("BubbleSort", bubbleSort, data, asc);
    }
    console.log("---");
}