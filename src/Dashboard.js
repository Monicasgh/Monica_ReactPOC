
import React, {useState} from "react";
import runLighthouse from "./lighthouseRunner";
import ReactJson from 'react-json-view';

const Dashboard=()=>{
    const [report,setReport]=useState(null);
    const [url,setUrl]=useState();

    const handleLighthouse =async ()=>{
        const result= await runLighthouse(url);
        setReport(result);

    };


    return(
        <div>
            <h1>LightHouse Dashboard</h1>
            <input placeholder="Enter Url" value={url} onChange={(e)=>setUrl(e.target.value)}/>

            <button onClick={handleLighthouse}>Run Lighthouse</button>

            {report && (
                <div>
                    <h2>Report</h2>
                    <ReactJson src={report}/>
                </div>
            )}
        </div>
    )
}

export default Dashboard;