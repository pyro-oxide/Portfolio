import { Html, useProgress } from "@react-three/drei";

export default function Loader(){
    const {progress} = useProgress()
    
    return (
        <Html center className="font-normal text-xl text-center">{progress}% Loaded</Html>
    )
}