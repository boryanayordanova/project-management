import noProjctImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({onAddProject}) {
    return (
        <div className="mt-24 text-center w-2/3">
            NO PROJECT
            <img src={noProjctImage} alt="An empty task list" className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-bold text-stone-500 mt-4 mb-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select ta project or get started with a new one</p>
            <p className="mt-8"><Button onClick={onAddProject}>Create new project</Button></p>
        </div>
    );
}