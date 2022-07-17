import NavBar from './components/molecule/NavBar';
import Button from "../atom/Button";
import DownloadButton from '../atom/DownloadButton';
import Display from '../atom/Display';

function PhotoChange(){
    return(
            <div>
                <NavBar></NavBar>
                <p>
                    <div><Display></Display></div>
                    <div><Display></Display></div>
                </p>
                <p>
                    <div><Button>업로드</Button></div>
                    <div><DownloadButton></DownloadButton></div>
                </p>
                
            </div>
    )
}

export default PhotoChange;