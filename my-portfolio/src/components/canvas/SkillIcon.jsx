import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Text, Html } from "@react-three/drei";

const SkillIcon = ({ position, color, label, icon }) => {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (hovered) {
      mesh.current.rotation.x += delta * 2;
      mesh.current.rotation.y += delta * 2;
    } else {
      mesh.current.rotation.x += delta * 0.5;
      mesh.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group position={position}>
      <Box
        args={[1, 1, 1]}
        ref={mesh}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <meshStandardMaterial color={hovered ? "#00F0FF" : color} wireframe />
        <Html
          transform
          position={[0, 0, 0.51]}
          style={{
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: hovered ? "#000" : "#fff",
            fontSize: "40px",
          }}
        >
          {icon}
        </Html>
      </Box>
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

export default SkillIcon;
