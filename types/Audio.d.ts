import React from 'react';
/** 音频播放器 */
declare const Audio: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLAudioElement> & {
    /**
     * 音频地址
     */
    src?: string;
    /**
     * 是否自动播放
     * @default true
     */
    autoPlay?: boolean;
    /**
     * 是否预加载语音
     * @default auto
     */
    preload?: string;
    /**
     * 是否循环播放
     */
    loop?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
export default Audio;
