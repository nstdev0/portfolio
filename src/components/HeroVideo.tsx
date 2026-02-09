import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroVideoProps {
    videoPath: string;
    thumbnailUrl: string;
    className?: string;
}

export default function HeroVideo({ videoPath, thumbnailUrl, className = '' }: HeroVideoProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className={`relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group ${className}`}>
            <AnimatePresence>
                {!isPlaying && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 z-20 flex items-center justify-center bg-cover bg-center"
                        style={{ backgroundImage: `url(${thumbnailUrl})` }}
                    >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsPlaying(true)}
                            className="relative z-30 flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg group-hover:bg-white/20 transition-all duration-300 cursor-pointer"
                            aria-label="Play video"
                        >
                            <svg
                                className="w-8 h-8 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </motion.button>

                        {/* Hover scale effect container */}
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 pointer-events-none" />
                    </motion.div>
                )}
            </AnimatePresence>

            {isPlaying && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                >
                    <iframe
                        className="w-full h-full"
                        src={videoPath}
                        title="Video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </motion.div>
            )}

            {/* Border overlay for premium feel */}
            <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none z-40" />
        </div>
    );
}
