"use client";

export function DownloadCV() {
  return (
    <button
      className="bg-accent rounded-sm w-fit px-4 py-2 font-bold cursor-pointer"
      onClick={() => {
        window.open("/jamerson-aguiar-cv.pdf");
      }}
    >
      Download CV
    </button>
  );
}
