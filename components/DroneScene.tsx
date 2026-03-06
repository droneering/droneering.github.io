import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const DataPoints = () => {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#00A8E8" size={0.012} sizeAttenuation={true} depthWrite={false} opacity={0.7} />
      </Points>
    </group>
  );
};

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 bg-droneering-blue overflow-hidden">
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <DataPoints />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-droneering-blue/50 to-droneering-blue pointer-events-none" />
    </div>
  );
};
