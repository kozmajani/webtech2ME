import React from "react";
import { useState, useEffect } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

export const Converter = () => {
  const ffmpeg = createFFmpeg({ log: true });
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState();
  const [gif, setGif] = useState();

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  };

  useEffect(() => {
    load();
  });

  const ConvertToGif = async () => {
    // Write the file to memory
    ffmpeg.FS("writeFile", "test.mp4", await fetchFile(video));

    // Run the FFMpeg command
    await ffmpeg.run(
      "-i", //input
      "test.mp4",
      "-t", //time length
      "5.0",
      "-ss", //starting second
      "2.5",
      "-f", //file
      "gif",
      "out.gif" //output
    );

    // Read the result
    const data = ffmpeg.FS("readFile", "out.gif");

    // Create a URL
    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: "image/gif" })
    );

    setGif(url);
  };

  return ready ? (
    <div className="converter-container">
      <div>
        <div style={{ paddingBottom: "5rem" }}>
          <h2>.GIF CONVERTER</h2>
        </div>
        {video && (
          <video controls width="300" src={URL.createObjectURL(video)}></video>
        )}

        <input
          type="file"
          onChange={(e) => setVideo(e.target.files?.item(0))}
        />

        <button onClick={ConvertToGif}>Convert to .gif</button>

        <h3 style={{ paddingTop: "2rem", textAlign: "center" }}>Result</h3>

        {gif && <img src={gif} alt="resultGif" width="250" />}
      </div>
    </div>
  ) : (
    <div className="converter-container">
      <h2>Converter is loading...</h2>
    </div>
  );
};

export default Converter;
