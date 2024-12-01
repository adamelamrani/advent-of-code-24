import { promises } from "fs";

//normal fs.readFile is an async action and won't wait for the result to return.
//thus, I will use promises to be able to make it async await
const dataReadFromFile = async () => {
  try {
    return await fs.readFile("./utils/day-1-list.txt", { encoding: "utf8" });
  } catch (error) {
    console.error("Error reading the file:", error);
    throw error;
  }
};

const values = await dataReadFromFile();
const columnOne = [];
const columnTwo = [];
const distanceBetweenNumbers = [];

//.split used to remove new lines and have array of rows
values.split(/\n/).forEach((value) => {
  const rowOfValues = value.split(" ").filter((num) => num !== "");

  //with array of rows filtered and clean, we can push and make two array of columns
  columnOne.push(Number(rowOfValues[0]));
  columnTwo.push(Number(rowOfValues[1]));
});

//sort to order it ascending
columnOne.sort((a, b) => a - b);
columnTwo.sort((a, b) => a - b);

//in this case, both columns are exactly the same length so a for is enough.
for (let i = 0; i < columnOne.length; i++) {
  distanceBetweenNumbers.push(
    columnOne[i] > columnTwo[i]
      ? columnOne[i] - columnTwo[i]
      : columnTwo[i] - columnOne[i]
  );
}

const result = distanceBetweenNumbers.reduce((acc, value) => {
  const sum = acc + value;

  return sum;
}, 0);

console.log(result);
