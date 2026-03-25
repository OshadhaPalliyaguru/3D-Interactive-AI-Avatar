"use client";
import { useState, Suspense } from 'react'; 
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';
import { Avatar } from './Components/Avatar'; 

export default function Home() {
  const [text, setText] = useState<string>("Hello machan, I am your AI avatar.");
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const handleSpeak = () => {
    if (!text) return;
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.rate = 1;
    utterance.pitch = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      
      <div className="w-full h-[70vh] cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 1.5, 20], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="city" />
          
          <Suspense fallback={null}>
            <Avatar isSpeaking={isSpeaking} />
          </Suspense>

          <OrbitControls 
            enablePan={true} 
            minDistance={1} 
            maxDistance={50} 
            target={[0, 1.5, 0]} 
          />
          <AdaptiveDpr pixelated /> 
          <AdaptiveEvents />
        </Canvas>
      </div>

      <div className="w-full h-[30vh] bg-gray-800 flex flex-col items-center justify-center gap-4 p-4 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] z-10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          AI Avatar Controller
        </h1>
        <div className="flex gap-2 w-full max-w-md">
          <input
            type="text"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white"
            placeholder="Type something..."
          />
          <button
            onClick={handleSpeak}
            disabled={isSpeaking}
            className={`px-6 py-2 rounded-lg font-bold transition-all ${
              isSpeaking 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-500 active:scale-95'
            }`}
          >
            {isSpeaking ? 'Speaking...' : 'Speak'}
          </button>
        </div>
      </div>

    </div>
  );
}