import Action from "./action";
const fs = window.require("fs");
const path = window.require("path");

//TODO: find a way to jest test this; maybe mocks?
const renameFile = (filePath, newName) => {
  return fs.renameSync(filePath, `${newName}${path.extname(filePath)}`);
};

class RenameFile extends Action {
  #newFileName;
  constructor(inputFilePaths, outputDirectory, newFileName) {
    super(inputFilePaths, outputDirectory);
    this.#newFileName = newFileName;
  }

  getNewFilename() {
    return this.#newFileName;
  }

  setNewFilename(newFileName) {
    this.#newFileName = newFileName;
  }

  getCurrentFilenames() {
    return super
      .getInputFilePaths()
      .map((filePath) => path.parse(filePath).base);
  }

  action() {
    //TODO: make this cancelable
    // super.getInputFilePaths().map((path, index, array) => {
    //   renameFile(
    //     path,
    //     super.getOutputDirectory() + this.getNewFilename() + index
    //   );
    //   super.updateProgress(Action.calcWorkDone(index + 1, array.length));
    // });

    (async () => {
      for (const [index, path] of super.getInputFilePaths().entries()) {
        if (super.getStopAction()) break;
        renameFile(
          path,
          super.getOutputDirectory() + this.getNewFilename() + index
        );
        super.updateProgress(Action.calcWorkDone(index + 1, array.length));
      }
    })();
  }
}

export default RenameFile;
