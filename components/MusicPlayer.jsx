import React from 'react';

const MusicNoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.344 3.071a.75.75 0 01.585.858l-.88 4.183a.75.75 0 01-1.49-.314l.88-4.183a.75.75 0 01.905-.544zM10 5.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V5.25z" clipRule="evenodd" />
        <path d="M4.5 6.75a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H4.5z" />
    </svg>
);

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
    </svg>
);

const PauseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5.75 4.5a.75.75 0 00-.75.75v10.5a.75.75 0 001.5 0V5.25a.75.75 0 00-.75-.75zM14.25 4.5a.75.75 0 00-.75.75v10.5a.75.75 0 001.5 0V5.25a.75.75 0 00-.75-.75z" />
    </svg>
);

const StopIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5.5 5.5A.5.5 0 016 5h8a.5.5 0 01.5.5v8a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-8z" />
    </svg>
);

export default function MusicPlayer({ isPlaying, handlePlayPause, handleStop, title, artist }) {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className="flex items-center gap-3 bg-slate-100 p-2.5 rounded-full shadow-lg border border-slate-200/80">
                
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-200 rounded-full text-slate-500">
                        <MusicNoteIcon />
                    </div>
                    <div>
                        <p className="font-bold text-sm text-slate-700 leading-tight">{title}</p>
                        <p className="text-xs text-slate-500 leading-tight">{artist}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 pr-1">
                    <button
                        onClick={handlePlayPause}
                        className="p-3 bg-slate-100 rounded-full text-slate-600 transition-all duration-200 shadow-[2px_2px_5px_#c5c5c5,-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_5px_#c5c5c5,inset_-2px_-2px_5px_#ffffff]"
                        aria-label={isPlaying ? 'Pause music' : 'Play music'}
                    >
                        {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </button>
                    <button
                        onClick={handleStop}
                        className="p-3 bg-slate-100 rounded-full text-slate-600 transition-all duration-200 shadow-[2px_2px_5px_#c5c5c5,-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_5px_#c5c5c5,inset_-2px_-2px_5px_#ffffff]"
                        aria-label="Stop music"
                    >
                        <StopIcon />
                    </button>
                </div>

            </div>
        </div>
    );
}
