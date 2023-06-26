import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const options = {
    progressColor: '#1cc39f',
    waveColor: '#9094a7',
    fillParent: true,
    responsive: true,
    autoplay: true,
    cursorWidth: 0,
    barHeight: 0.5,
    barGap: 3,
};

const useWavesurfer = (waveContainerRef, audio, onFinish) => {
    const waveSurferRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioVolume, setAudioVolume] = useState(1);

    useEffect(() => {
        waveSurferRef.current = WaveSurfer.create({ ...options,
            url: audio,
            container: waveContainerRef.current,
            height: waveContainerRef.current.clientHeight,
        });

        waveSurferRef.current.on('play', () => setIsPlaying(true));
        waveSurferRef.current.on('pause', () => setIsPlaying(false));
        waveSurferRef.current.on('finish', () => onFinish());
        
        waveSurferRef.current.setVolume(audioVolume);
        
        return () => {
            waveSurferRef.current.destroy();
        };
    }, [audio]);

    waveSurferRef?.current?.setVolume(audioVolume);

    return {
        handlePlayPause: () => waveSurferRef?.current?.playPause(),
        audioVolume,
        setAudioVolume,
        isPlaying,
    }
};

export default useWavesurfer;
