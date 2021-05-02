const fs = window.require("fs");
const path = window.require("path");
const { promisify } = window.require("util");

const fsRenameAsync = promisify(fs.rename);

const renameFile = async (filePath, newName) => {
  return await fsRenameAsync(
    filePath,
    path.join(path.dirname(filePath), `${newName}${path.extname(filePath)}`)
  );
};

export default renameFile;
