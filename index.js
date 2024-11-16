// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    
    // Feel free to add even more songs
    //->Adding five more songs below
    { title: "Rolling in the Deep", artist: "Adele", genre: "Pop" },
    { title: "Smooth Operator", artist: "Sade", genre: "Pop" },
    { title: "Reach It", artist: "Zonke", genre: "R&B" },
    { title: "Imagine", artist: "John Lennon", genre: "Rock" },
    { title: "Pearls", artist: "Sade", genre: "R&B" }
];


// Object containing each Guardian's preferred genre
const guardians = 
{
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    
    //-> Add preferences for Drax, Rocket, and Groot
    "Drax": "R&B",/*With relation to the solution.png*/
    "Rocket":"Rock", /*With relation to the solution.png*/
    "Groot": "Pop", /*With relation to the solution.png*/
};

/*Created a function to handle mapping and filtering the array of songs. Also returns the array of songs*/
function getSongsByGenre(genre) 
{
     //-> Using Map() method to extract only the songs within that specified genre and apply filter method to remove all falsy values from the array.
     return songs.map(song => song.genre === genre ? { title: song.title, artist: song.artist } : null).filter(Boolean); 
}

/*---Created a UI function to handle DOM */
function UI_Display(guardian, song)
{
    //UI Output
    let playlist = document.querySelector('#playlists'); //Playlist main container
    let playlistCard = document.createElement('ul'); //Playlist Area for each guardian
    playlistCard.className = "playlist";    //Add playlist class to the playlistCard - attaching css styling within our ul element.
    playlistCard.innerHTML = `<h2>${guardian}'s Playlist</h2>`; //Guardians name and playlist.                
    // -> Displaying the information as is on the solution.jpg
    //->The logic comes here
    song.forEach(song => 
    {
        const li = document.createElement('li'); //Each song
        li.classList = "song"; //Class for each song
        const titleSpan = document.createElement('span'); //Song title
        titleSpan.classList.add("song-title"); //Add song title styling
        titleSpan.textContent = song.title; //write song title
        li.appendChild(titleSpan); //add to li(parent) element
        li.append(` by ${song.artist}`); //then proceed to add also the text "by song.artist" to parent li element
        playlistCard.append(li); //then add the li element to its parent element ul then thus creating the list     
    });        

playlist.appendChild(playlistCard); //then add the ul element to its parent/root element div. 
}

function generatePlaylist(guardians, songs) 
{
    // Use the map() function to create playlists for each Guardian
    // Your code here

    //Loop through the guardians object to get each guardian and their preferred genre
    //Used destructuring for better naming conventions
    for(const guardian in guardians)
    {
        const genre = guardians[guardian]; //Retrieve the current guardian's genre. 
            switch(genre)
            {
                case "Rock" : 
                {
                    UI_Display(guardian, getSongsByGenre(genre)); //->Get guardian name and mapped array songs to print to dom.
                }
                break;
                 
                case "Pop" :  
                {
                    UI_Display(guardian, getSongsByGenre(genre)); //->Get guardian name and mapped array songs to print to dom.; 
                }
                break;
                
                case "R&B" :
                {
                    UI_Display(guardian, getSongsByGenre(genre)); //->Get guardian name and mapped array songs to print to dom.
                }
                break;

                default : 
                {
                    console.log(`The genre does not exist!`);
                }
            }
    }
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);