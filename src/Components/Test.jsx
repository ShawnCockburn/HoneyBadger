import { Button, LinearProgress } from "@material-ui/core";
import React, {useState} from "react";
import electron from "../Util/electronRemote";
import ImageResize from "../Util/imageResize";

const imageR = new ImageResize([],"/Users/shawn/Desktop/untitled folder/",{width:8000})

const Test = () => {

    const [progress, setProgress] = useState(0);

    imageR.setOnProgressUpdate(setProgress)

  const d = () =>
    electron.dialog
      .showOpenDialog(electron.getCurrentWindow(), {
        filters: [{ name: "Images", extensions: ["jpg", "png", "gif"] }],
        properties: ["openFile", "multiSelections"],
      })
      .then((r) => r.canceled?[]:imageR.setInputFilePaths(r.filePaths));
  return (
    <div>
      <Button onClick={d}>Select</Button>
      <Button onClick={()=>imageR.start()}>Start</Button>
      <Button onClick={()=>imageR.stop()}>Stop</Button>
      <LinearProgress variant="determinate" value={progress}/>
    </div>
  );
};

export default Test;
