import { useState, useEffect } from 'react';
import "./Skills.scss";
import { featuredProject, mobileProject, reactProject} from "../../data";

export default function Skills() {
    const [ selected, setSelected ] = useState("featured")
    const [ data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "React.js"
        },
        {
            id: "mobile",
            title: "Mobile"
        },
        {
            id: "python",
            title: "Backend"
        },
    ];

    useEffect(() => {
        switch(selected) {
            case "featured":
                setData(featuredProject);
                break;
            case "mobile":
                setData(mobileProject);
                break;
            case "python":
                setData(reactProject);
                break;
            default:
                setData(featuredProject);
        }
    }, [selected]);

    return (
        <div className="projects" id="projects">
            <h1>projects</h1>
            <ul>
                {list.map(item => (
                    <ProjectList
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                />
                ))}
            </ul>
            <div className="projects__content">
                {data.map(db => (
                    <div className="projects__content__item">
                        <img 
                        src={db.image} 
                        alt=""
                        onClick={() => window.open("#")} />

                        <h3>{db.title}</h3>
                    </div>
                ))}
                </div>
            </div>
    );
}