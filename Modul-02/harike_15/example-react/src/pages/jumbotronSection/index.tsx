import './style.css'
import { IJumboTron } from './types';

function JumbotronSection(props: IJumboTron) {
    return (
        <div className="container">
            <h2>Ini Jumbotron Section</h2>
            <p>Halo {props.name}</p>
        </div>
    );
};

export default JumbotronSection;