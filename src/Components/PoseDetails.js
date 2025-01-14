// TODO: Add function to request YouTube video

import "../styles/Pose.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Pose } from "./Pose";
import { useParams } from "react-router-dom";


export function PoseDetails() {
    const {pose_id} = useParams();

    const [pose, setPose] = useState(null);

    useEffect(() => {
        async function getPoseById() {
            const res = await axios.get(`https://lightning-yoga-api.herokuapp.com/yoga_poses/${pose_id}`)
            .then((res) => {
                setPose(res.data);
            })
            .catch((error) => {
                console.error(error)
            })           
        }
        getPoseById()
    }, []);

    return (
        <>
        {pose ? 
        <Pose sanskritName={pose.sanskrit_name} englishName={pose.english_name} diagram={pose.img_url}/>    
        : "Loading..."}
        </>
    )
}