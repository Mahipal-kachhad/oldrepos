import { Container} from "react-bootstrap";
import Menubar from "./Menubar";

const Home = ()=>{
    return (
        <div>
            <Menubar/>
            <Container fluid>
                <h1>Home</h1>
            </Container>
        </div>
    )
}

export default Home;