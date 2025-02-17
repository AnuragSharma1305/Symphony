import "./output.css";
import {useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";

import LoggedInHomeComponent from "./routes/LoggedInHome";
import UploadSong from "./routes/UploadSong";
import MyMusic from "./routes/MyMusic";
import SearchPage from "./routes/SearchPage";
import Library from "./routes/Library";
import PremiumPage from "./routes/PremiumPage";
import SupportPage from "./routes/SupportPage";
import DownloadPage from "./routes/DownloadPage";
import SinglePlaylistView from "./routes/SinglePlaylistView";
import {useCookies} from "react-cookie";
import songContext from "./contexts/songContext";

function App() {
    const [currentSong, setCurrentSong] = useState(null);
    const [soundPlayed, setSoundPlayed] = useState(null);
    const [isPaused, setIsPaused] = useState(true);
    const [cookie, setCookie] = useCookies(["token"]);

    return (
        <div className="w-screen h-screen font-poppins">
            <BrowserRouter>
                {cookie.token ? (
                    // logged in routes
                    <songContext.Provider
                        value={{
                            currentSong,
                            setCurrentSong,
                            soundPlayed,
                            setSoundPlayed,
                            isPaused,
                            setIsPaused,
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<LoginComponent />} />
                            <Route
                                path="/home"
                                element={<LoggedInHomeComponent />}
                            />
                            <Route
                                path="/uploadSong"element={<UploadSong />}
                            />
                            <Route path="/myMusic" element={<MyMusic />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/library" element={<Library />} />
                            <Route path="/premium" element={<PremiumPage/>} />
                            <Route path="/support" element={<SupportPage/>} />
                            <Route path="/download" element={<DownloadPage/>} />
                            
                            <Route
                                path="/playlist/:playlistId"
                                element={<SinglePlaylistView />}
                            />
                            <Route path="*" element={<Navigate to="/home" />} />
                        </Routes>
                    </songContext.Provider>
                ) : (
                    // logged out routes
                    <Routes>
                      
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/signup" element={<SignupComponent />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                )}
            </BrowserRouter>
        </div>
    );
}



export default App;
