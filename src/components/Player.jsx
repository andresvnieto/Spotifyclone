import { useEffect, useRef, useState } from "react";
import { usePlayerStore } from "@/store/playerStore";

export const Play = () => (
  <svg viewBox="0 0 16 16" height="16" width="16" fill="#09090b">
    <path fill="#09090b" d="M4 1.14v14l11-7-11-7z"></path>
  </svg>
);

export const Pause = () => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export default function Player() {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } =
    usePlayerStore((state) => state);
  const audioRef = useRef();

  useEffect(() => {
    const audio = audioRef.current;
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    const { song, playlist, songs } = currentMusic;
    if (song) {
      audio.src = `/music/${playlist?.id}/0${song.id}.mp3`;
      audio.play();
    }
  }, [currentMusic]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="flex flex-row justify-between w-full px-4 z-50">
      <div>Current Song</div>
      <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center">
          <button className="bg-white rounded-full p-2" onClick={handleClick}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </div>
      </div>
      <div className="grid place-content-center">
        <audio ref={audioRef} controls />
      </div>
    </div>
  );
}
