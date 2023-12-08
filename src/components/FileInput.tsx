import clsx from "clsx";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { uploadPhoto } from "../api";

import ProgressBar from "../components/ProgressBar";

type FileInputProps = {
  collectionName: string;
};

const FileInput: React.FC<FileInputProps> = ({ collectionName }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (!acceptedFiles.length) {
        return;
      }

      if (!collectionName) {
        return console.log("albumName is reqired");
      }
      uploadPhoto(collectionName, acceptedFiles);
    },
    [collectionName]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/svg": [],
      "image/giff": [],
    },
    maxFiles: 10,
    onDrop,
  });

  return (
    <>
      <form
        {...getRootProps()}
        id="dropzone-wrapper"
        method="post"
        encType="multipart/form-data"
        className={clsx(
          isDragAccept && "drag-accept",
          isDragReject && "drag-reject"
        )}>
        <input type="file" {...getInputProps()} />

        <div className="flex flex-col items-center justify-center pt-10 text-gray-500">
          {isDragActive ? (
            <>
              {isDragAccept && (
                <p className="font-semibold">All files will be accepted</p>
              )}
              {isDragReject && (
                <p className="font-semibold">Some files will be rejected</p>
              )}
            </>
          ) : (
            <>
              <svg
                className="w-8 h-8 mb-4 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </>
          )}
        </div>
      </form>
      {/* todo show progress!!!! */}
      {/* {!isSuccess ? '' : <ProgressBar progress={progress} />} */}
    </>
  );
};

export default FileInput;
