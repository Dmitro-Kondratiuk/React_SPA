
import './App.css';
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import { Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogConatainer from "./components/Dialog/DialogConatainer";
import UsersContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



const App = (props) => {

    return (
            <div className="app-one">
                <HeaderContainer/>
                <Nav/>
                <div className="app-one-content">
                    <Routes>
                        <Route  path="/profile/:userID" element={<ProfileContainer />}/>
                        <Route  path="/dialog/*" element={<DialogConatainer />}/>
                        <Route  path="/news" element={<News/>}/>
                        <Route  path="/music" element={<Music/>}/>
                        <Route  path="/users/" element={<UsersContainer />}/>
                        <Route  path="/settings" element={<Setting/>}/>
                    </Routes>
                </div>
            </div>
    );
}


 export default App;