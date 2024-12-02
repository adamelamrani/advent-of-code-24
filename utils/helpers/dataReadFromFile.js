import { promises } from "fs";

export const dataReadFromFile = async (path) =>
  //normal fs.readFile is an async action and won't wait for the result to return.
  //thus, I will use promises to be able to make it async await
  await promises.readFile(
    path,
    {
      encoding: "utf8",
    },
    (error, data) => {
      if (data) {
        return data;
      }

      if (error) {
        console.error(error);
      }
    }
  );
