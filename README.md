# 🗣️ 3D Interactive AI Avatar

A web-based 3D AI Avatar prototype built with Next.js and React Three Fiber. This project demonstrates real-time text-to-speech (TTS) synthesis and basic audio-reactive lip-syncing using a 3D morph-target enabled face model.

## 🚀 Features

- **3D Face Rendering**: Uses Three.js and React Three Fiber to render a high-quality GLTF/GLB model.
- **Text-to-Speech (Phase 1)**: Integrated with the browser's native Web Speech API for instant voice generation.
- **Audio-Reactive Lip Sync**: Analyzes real-time audio volume to dynamically trigger jaw/mouth morph targets (blendshapes) for realistic speech animation.
- **Modern Architecture**: Built on Next.js App Router for optimal performance, clean component structure, and secure backend API routes for future integrations.

## 🛠️ Tech Stack

- **Framework:** Next.js (React)
- **3D Graphics:** Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Audio Processing:** Web Speech API, Web Audio API
- **Styling:** Tailwind CSS

## 🔮 Future Roadmap
- **[ ] Phase 2: Integrate AI LLM (e.g., Gemini API) for dynamic, intelligent conversational responses.

- **[ ] Phase 3: Upgrade lip-syncing from volume-based to accurate viseme-based synchronization (e.g., using Azure TTS or Rhubarb Lip Sync).

- **[ ] Phase 4: Add automated emotion controls (happy, sad, thinking blendshapes) based on AI sentiment analysis.

👨‍💻 Author
Oshadha
