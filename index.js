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

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) 
{
    // Use the map() function to create playlists for each Guardian
    // Your code here
    
    
   
    
    

    //->Algoirthm Structure
    //Loop Through each guardian and get their genre

        for(const artist in guardians)
            {
                const genre = guardians[artist];
                if(genre === "Rock")
                    {
                        const rockSongs = songs
                        .map(song => song.genre === "Rock" ? { title: song.title, artist: song.artist } : null)
                        .filter(Boolean); 
                        console.log(artist,rockSongs);
                        
                        //UI Output
                        let playlist = document.querySelector('#playlists');
                        let playlistCard = document.createElement('ul');
                        playlistCard.className = "playlist";
                        playlistCard.innerHTML = `<h2>${artist}</h2>`;            
                        // -> Displaying the information as is on the solution.jpg
                        //->The logic comes here
                        rockSongs.forEach(song => 
                        {
                            const li = document.createElement('li');
                            li.classList = "song";
                            li.textContent = `${song.title} by ${song.artist}`;
                            playlistCard.append(li);    
                        });        
                        
                        
                        playlist.appendChild(playlistCard);
                        
                        
                    }
                else if(genre === "Pop")
                    {
                        const popSongs = songs
                        .map(song => song.genre === "Pop" ? { title: song.title, artist: song.artist } : null)
                        .filter(Boolean); 
                        console.log(artist,popSongs);
                    }
                else
                {
                    let genreRB = songs.filter(m => m.genre === "R&B").map(m => m.title);
                    console.log(artist,genreRB);
                }
            }

        
            //DOM create elements and update data
    
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


