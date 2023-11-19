import { SearchBg } from "../../Utils/images";
import "./CommonPage.css"
const CommonPage = ({ title }) => {
    return (
        <div className="common-page-wrap">
            <div className="baner-wrap">
                <img src={SearchBg.src} alt={SearchBg.name} />
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default CommonPage;