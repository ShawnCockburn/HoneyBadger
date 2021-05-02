import Action from './action'

const inputFilePaths = ["/test/test.test"];
const outputDirectory = "/test";

const testAction = new Action(inputFilePaths, outputDirectory);

test("create Action class works", () => {
  expect(testAction.getInputFilePaths()).toBe(inputFilePaths);
  expect(testAction.getOutputDirectory()).toBe(outputDirectory);
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

test("static calcWorkDone function works", () => {
  //this is float so we cant know the exact return, only approx
  expect(Action.calcWorkDone(8, 23)).toBeCloseTo(34.782);
  //this is not float
  expect(Action.calcWorkDone(100, 100)).toBe(100);
  expect(Action.calcWorkDone(1, 100)).toBe(1);
});
