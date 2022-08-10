import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {title: "Afraid to feel", duration: "5:03"},
        {title: "Anybody", duration: "3:02"},
        {title: "Lose Yourself", duration: "4:01"},
        {title: "Danza Kuduro", duration: "3:45"},
        {title: "Afraid to feel", duration: "6:04"}

    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong; 
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});