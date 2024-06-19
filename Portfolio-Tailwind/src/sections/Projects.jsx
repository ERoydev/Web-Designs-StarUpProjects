import ProjectItem from "../components/Projects/ProjectItem";
import SectionHeader from "../components/SectionHeader";
import {allProjects} from "../sections/index.js";

export default function Projects() {
    console.log(allProjects)
    return(
        <div className="max-container flex flex-col">
            <SectionHeader normalText={'Collection of my recent'} colorText={'projects'} />

            <div className="md:flex gap-12 max-md:space-y-10">
                {allProjects.length > 0 && allProjects.map(project => (<ProjectItem {...project} />))}
            </div>

        </div>
    );
}