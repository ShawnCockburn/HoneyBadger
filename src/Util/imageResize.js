/*
TODO: implement image format conversion
TODO: add multi threading (if thats possible)
*/

import Action from "./action";
const path = window.require("path");
const sharp = window.require("sharp");

//TODO: jest test this
const imageResize = async (imagePath, outputPath, options) => {
  return await sharp(imagePath).resize(options).toFile(outputPath);
};

class ImageResize extends Action {
  //this is an object [see spec below]
  /*
    https://sharp.pixelplumbing.com/api-resize#resize
  */
  #imageResizeOptions;
  
  constructor(inputFilePaths, outputDirectory, imageResizeOptions) {
    super(inputFilePaths, outputDirectory);
    this.#imageResizeOptions = imageResizeOptions;
  }

  getImageResizeOptions() {
    return this.#imageResizeOptions;
  }

  setImageResizeOption(options) {
    this.#imageResizeOptions = options;
  }

  action() {
    (async () => {
      for (const [index, file] of super.getInputFilePaths().entries()) {
        if (super.getStopAction()) break;
        await imageResize(
          file,
          path.join(super.getOutputDirectory(), path.basename(file)),
          this.#imageResizeOptions
        )
          .then((info) => console.log(info))
          .catch((err) => console.log(err))
          .finally(() =>
            super.updateProgress(
              Action.calcWorkDone(index + 1, super.getInputFilePaths().length)
            )
          );
      }
    })();
  }
}

export default ImageResize;
