function Video() {
  return (
    <>
      <div
        className="scale-up-center video-container lg:w-1100px md:w-95 sm:w-95 rounded-xl overflow-hidden my-10 mb-10"
        style={{
          maxWidth: "100%", // Maximum width for responsiveness
          width: "1100px",
          height: "500px", // Automatically adjust height based on width
          margin: "auto",
        }}
      >
        <iframe
          className="rounded-xl"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/xtJg_o0oxz4"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default Video;
