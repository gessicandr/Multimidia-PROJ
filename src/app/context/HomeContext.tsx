'use client'

import { ReactNode, RefObject, createContext, useEffect, useRef, useState } from "react";
import videos, { Video } from "../data/video";

type HomeContextData = {
    videoURL: string;
    playing: boolean;
    totalTime: number;
    currentTime: number;
    videoRef: RefObject<HTMLVideoElement>;
    playPause: () => void;
    configCurrentTime: (time:number) => void;
    configVideo: (index: number) => void;
    volume: number; 
    changeVolume: (volume: number) => void;
    videos: Video[]; 
    muted: Boolean; 
    toggleMute: () => void; 
    unMute: () => void;
}

export const HomeContext =
   createContext({} as HomeContextData);

type ProviderProps = {
    children: ReactNode;    
}

const HomeContextProvider = ({children}: ProviderProps) => {
    const [videoURL, setVideoURL] = useState("");
    const [videoIndex, setVideoIndex] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [totalTime, setTotalTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [volume, setVolume] = useState(1); 
    const [muted, setMuted] = useState(false);

    useEffect(()=>{
        configVideo(videoIndex);
    }, []);

    const configVideo = (index: number) => {
        const currentIndex = index % videos.length;
        const currentVideo: Video = videos[currentIndex];
        const currentVideoURL = currentVideo.videoURL;
        setVideoURL(currentVideoURL);
        setVideoIndex(currentIndex);
    }

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.onloadedmetadata = () => {
                setTotalTime(video.duration);
                setCurrentTime(video.currentTime);
    
                if (playing) {
                    video.play();
                }
            }
    
            video.onended = () => {
                configVideo(videoIndex + 1);
            }
            
            video.onvolumechange = () => {
                setVolume(video.volume);
            }
    
            
            const updateProgressBar = () => {
                if (video.duration) {
                    setCurrentTime(video.currentTime);
                }
            };
    
            video.addEventListener("timeupdate", updateProgressBar);
    
            return () => {
                video.removeEventListener("timeupdate", updateProgressBar);
            };
        }
    }, [videoURL, playing]);
    

    const configCurrentTime = (time: number) => {
        const video = videoRef.current;
        if (!video) return;
    
        
        video.currentTime = time;
        setCurrentTime(time);
    
        
        if (playing) {
            video.play();
        }
    }

    const playPause = ()  => {
        const video = videoRef.current;
        if (!video) return;

        if (playing) {
           video.pause();     
        }
        else {
            video.play();
        }
        setPlaying(!playing);
    }
    const changeVolume = (newVolume: number) => {
        const video = videoRef.current;
        if (!video) return;
        
        
        const clampedVolume = Math.max(0, Math.min(1, newVolume));
        
        
        video.volume = clampedVolume;
        
        
       
        console.log("Volume ajustado:", clampedVolume);
        setVolume(clampedVolume);
       
    }
    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = !video.muted;
        setMuted(video.muted);
    }
    const unMute = () => {
        const video = videoRef.current;
        if (!video) return;
    
        video.muted = false;
        setMuted(false);
    }
    return (
        <HomeContext.Provider value={
            {
                videoURL,
                playing,
                totalTime,
                currentTime,
                videoRef,
                playPause,
                configCurrentTime,
                configVideo,
                changeVolume,
                videos, 
                muted,
                toggleMute,
                unMute,
                  volume,
            }
        }>
         {children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;
