import RenameFile from "./fileRename"

const testFileName = "test.test";

//dont change this without reading later comments in "create RenameFile class works" test
const inputFilePaths = ["/test/" + testFileName];
const outputDirectory = "/test";
const newName = "newname";

const testAction = new RenameFile(
  inputFilePaths,
  outputDirectory,
  newName
);

test("create RenameFile class works", () => {
  expect(testAction.getInputFilePaths()).toBe(inputFilePaths);
  expect(testAction.getOutputDirectory()).toBe(outputDirectory);
  expect(testAction.getNewFilename()).toBe(newName);
  //the toEqual will need changing to your expected output if you change the number of inputFilePaths
  expect(testAction.getCurrentFilenames()).toEqual([`${testFileName}`]);
});

test("Progress callback works", () => {
  let progress = 0;
  const progresToUpdateTo = 10;
  const onProgressUpdateCallback = (updatedProgress) =>
    (progress = updatedProgress);
  testAction.setOnProgressUpdate(onProgressUpdateCallback);

  expect(progress).toBe(progress);

  testAction.updateProgress(progresToUpdateTo);

  expect(progress).toBe(progresToUpdateTo);
});