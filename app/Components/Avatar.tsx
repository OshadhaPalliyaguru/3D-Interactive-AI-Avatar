"use client";
import React, { useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

interface AvatarProps {
  isSpeaking: boolean;
}

export function Avatar({ isSpeaking }: AvatarProps) {
  // Model eka saha eke thiyena animations load karanawa
  const { scene, animations } = useGLTF('/face.glb'); 
  
  // animations tika manage karanna drei eken dena tool eka
  const { names, actions } = useAnimations(animations, scene);

  useEffect(() => {
    // Model eke thiyena animation wala nam tika console ekata danawa
    console.log("🎬 Model eke thiyena Animations list eka:", names);
    
  }, [names]);

  // Model eka kalin ganatama screen eke pennanawa
  return <primitive object={scene} scale={5} position={[0, -15, 0]} />;
}