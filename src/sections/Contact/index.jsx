import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faSquareInstagram,
    faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div className="flex items-end gap-2 text-2xl">
            <FontAwesomeIcon
                className="hover:scale-125 hover:text-primaryTitle transition-all"
                icon={faGithub}
            />
            <FontAwesomeIcon
                className="hover:scale-125 hover:text-primaryTitle transition-all"
                icon={faSquareInstagram}
            />
            <FontAwesomeIcon
                className="hover:scale-125 hover:text-primaryTitle transition-all"
                icon={faSquareYoutube}
            />
        </div>
    )
}

export default Contact;