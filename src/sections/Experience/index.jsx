import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience = () => {
    return (
        <div className="space-y-4">
            <div className="text-primaryAccent font-medium">Experience</div>
            <div className="grid grid-cols-[25%_75%]">
                <div>
                    <div className="text-sm">2024-2025</div>
                    <div>image</div>
                </div>
                <div className="grid gap-y-4">
                    <div className="text-primaryAccent">Fashion Ecommerce</div>
                    <div className="flex gap-4 text-xl">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <div className="text-sm">Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.</div>
                    <div className="flex gap-4 text-sm">
                        <div className="bg-primarySubcontent px-2 py-1 rounded-md">React</div>
                        <div className="bg-primarySubcontent px-2 py-1 rounded-md">Node.js</div>
                        <div className="bg-primarySubcontent px-2 py-1 rounded-md">MongoDB</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;