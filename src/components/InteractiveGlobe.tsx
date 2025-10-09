import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Stars } from '@react-three/drei';
import { useTheme } from '../contexts/ThemeContext';

const Globe: React.FC = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const ringPivotRef = useRef<THREE.Object3D>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  // Points generation
  const points = useMemo(() => {
    const temp: THREE.Vector3[] = [];
    const radius = 2;
    for (let i = 0; i < 300; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      temp.push(new THREE.Vector3(x, y, z));
    }
    return temp;
  }, []);

  const pointsGeometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);
  const pointsMaterial = useMemo(() => new THREE.PointsMaterial({ color: '#14b8a6', size: 0.05 }), []);

  // Globe geometry with vertex colors
  const globeGeometry = useMemo(() => {
    const geom = new THREE.SphereGeometry(2, 128, 128);
    const colors: number[] = [];
    const pos = geom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const color = new THREE.Color(y > 0.1 ? '#1e90ff' : y < -0.1 ? '#0d47a1' : '#228B22');
      colors.push(color.r, color.g, color.b);
    }
    geom.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    return geom;
  }, []);

  useFrame(() => {
    const t = performance.now() * 0.0001; // time factor

    if (globeRef.current) globeRef.current.rotation.y += 0.002;
    if (pointsRef.current) pointsRef.current.rotation.y += 0.002;

    if (ringPivotRef.current) {
      // rotate the pivot in multiple axes
      ringPivotRef.current.rotation.x = t * 0.7;
      ringPivotRef.current.rotation.y = t * 0.5;
      ringPivotRef.current.rotation.z = t * 0.3;
    }
    if (ringRef.current) {
      // also spin the ring itself
      ringRef.current.rotation.z += 0.01;
    }
  });

  return (
    <>
      <mesh ref={globeRef} geometry={globeGeometry}>
        <meshStandardMaterial vertexColors roughness={0.5} metalness={0.1} />
      </mesh>

      <points ref={pointsRef} geometry={pointsGeometry} material={pointsMaterial} />

      {/* Create a pivot object for more complex ring rotation */}
      <group ref={ringPivotRef} position={[0, 0.1, 0]}>
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.1, 0.05, 16, 100]} />
          <meshBasicMaterial
            color="#14b8a6"
            transparent
            opacity={0.7}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>
    </>
  );
};

const InteractiveGlobe3D: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-stone-200 dark:from-slate-900 dark:to-neutral-900">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#14b8a6" />
          <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
          <Globe />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default InteractiveGlobe3D;
