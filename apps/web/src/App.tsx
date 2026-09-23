import {useEffect,useState} from "react";
import {api} from "./lib/api";

type Health={success:boolean;database:string};

export default function App(){
 const [apiStatus,setApiStatus]=useState("Checking API...");
 const [dbStatus,setDbStatus]=useState("Checking MongoDB...");
 useEffect(()=>{api.get<Health>("/health").then(r=>{
   setApiStatus(r.data.success?"API Connected":"API Error");
   setDbStatus(r.data.database==="connected"?"MongoDB Connected":`MongoDB: ${r.data.database}`);
 }).catch(e=>{console.error(e);setApiStatus("API Not Connected");setDbStatus("Database Unknown");});},[]);
 return <main className="app"><section className="hero">
 <span className="eyebrow">TAEKWONDO ASSOCIATION NAVSARI</span>
 <h1>Discipline.<br/>Power. Excellence.</h1>
 <p>A modern sports association platform for students, coaches, parents, tournaments and achievements.</p>
 <div className="status-group"><div className="status">● {apiStatus}</div><div className="status">● {dbStatus}</div></div>
 </section></main>;
}