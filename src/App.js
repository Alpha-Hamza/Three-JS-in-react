import React , {Suspense} from "react";
import "./style.css";
import styled from "styled-components";

import Background from "./components/Background";
import TextSection from "./components/TextSection";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"; 
import Rifle from "./components/Rifle.js";
import Spider from "./components/Spider";

export default function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />
      <div className="q">
      <Canvas 
     
         style={{width: `100%`, height: `500px`, position: `relative` }}
      >
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intensity={1} />
        <Suspense fallback={null}>
          {/* <Rifle /> */}
          <Spider />

        </Suspense>

      </Canvas>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
  
  `

;
