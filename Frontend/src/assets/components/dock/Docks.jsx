import { DOCKS_DATA } from "../../data/dataMainMenu";
import './docks.css';

export default function Docks() {
    return <ul className="docks box--shadow flex--row">
        {DOCKS_DATA.map((dock, dockIndex) => (
            <li className="dock flex--col" key={dockIndex}>
                <div id="notification" className={`box--shadow ${dock.notification === undefined ? 'close' : 'active'}`}>
                    <span>{dock.notification}</span>
                </div>
                <img src={dock.image} alt="dock error" />
                <p className="title-icon">{dock.title}</p>
            </li>
        ))}
    </ul>
}