import { Header } from "../../components/Header/Header"
import "./home.css"
export const Home =()=>{
    return(
        <div className="home">
            <Header/>
            <div className="container">
                <h1>homePage</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, dolor.</p>  
            </div>
        </div>
    )
}