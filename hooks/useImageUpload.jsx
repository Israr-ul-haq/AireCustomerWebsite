import { useState, useEffect } from "react";
function useImageUpload({ fileData }) {
  const [singleImageData, setSingleImageData] = useState(null);
  const [multipleImageData, setMultipleImageData] = useState(null);

  function fileUpload() {
    if(fileData.length === 1
      ) {

    }
  }

  useEffect(() => {
    fileUpload()
  });

  return { singleImageData, multipleImageData };
}

export default useImageUpload;
