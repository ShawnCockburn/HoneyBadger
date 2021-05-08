class Action {
  #inputFilePaths;
  #outputDirectory;
  #onProgressUpdate = () => {};
  #stopAction = false;

  constructor(inputFilePaths, outputDirectory) {
    this.#inputFilePaths = inputFilePaths;
    this.#outputDirectory = outputDirectory;
  }


  getInputFilePaths() {
    return this.#inputFilePaths;
  }

  setInputFilePaths(inputFilePaths) {
    this.#inputFilePaths = inputFilePaths;
  }

  getOutputDirectory() {
    return this.#outputDirectory;
  }

  setOutputDirectory(outputDirectory) {
    this.#outputDirectory = outputDirectory;
  }

  setOnProgressUpdate(onProgressUpdateCallback) {
    this.#onProgressUpdate = onProgressUpdateCallback;
  }

  updateProgress(progress) {
    this.#onProgressUpdate(progress);
  }

  // gets percentage work done eg: calcWorkDone(40, 100) === 0.4
  static calcWorkDone(workDone, totalWork) {
    return (workDone/totalWork)*100;
  }

  action() {}

  start() {
    this.action();
  }

  stop() {
    this.#stopAction = true;
  }

  getStopAction() {return this.#stopAction}
}

export default Action;