/* --- Global constants, arrays and an object for keyboard buttons. ---*/
const drumBtn = [];
const audioList = [];
const skeletor = ["./Sound/Explode.mp3", "./Sound/Fights.mp3", "./Sound/Laugh.mp3", "./Sound/Myah.mp3", "./Sound/Nice.mp3", "./Sound/Not-kind.mp3", "./Sound/Stop-licking.mp3", "./Sound/Witless-fool.mp3"];
const keyboard = 
    {
        "1" : 0,
        "2" : 1,
        "3" : 2,
        "4" : 3,
        "5" : 4,
        "6" : 5,
        "7" : 6,
        "8" : 7,
    };

let currentSound = null; // Variable to store the currently playing sound.
/* --- END --- */

/* --- Function to make an array for drumBtns and run said function. --- */
function makeVariables ()
    {
        for (let x = 0; x < 8; x++)
            {
                drumBtn[x] = document.getElementById(`btn-${x + 1}`);
            }
        return drumBtn;
    };

makeVariables();
/* --- END --- */



/* --- forEach method to map the entire button array with event listeners that play sound. --- */
skeletor.forEach((filename, index) =>
    {
        audioList[index] = new Audio (filename);
        drumBtn[index].textContent = filename.slice(8, -4);

        drumBtn[index].addEventListener("click",() => 
        {
            if(currentSound)
            {
                currentSound.pause();
                currentSound.currentTime = 0;
            }
            audioList[index].pause();
            audioList[index].play();
            currentSound = audioList[index]; // Update the current sound to the new sound.
        })
    });
/* --- END --- */



/* --- Event listeners for the keyboard buttons 1 - 8. The ".key" method converts the input from the keyboard into a string, then locates the value from the "keyboard" - object. ---*/
document.addEventListener("keydown", function(input)    
    {
        console.log(input.key);

        if (keyboard[input.key] === 0)
        {
            playSound(input.key);
        } else if (keyboard[input.key])
        {
            playSound(input.key);
        } else {
            return console.log('Invalid key:', input.key)
        }
    });
/* --- END --- */ 
    
    

/* --- Function to play sound --- */

function playSound (input)
{
    if(currentSound)
    {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
    audioList[keyboard[input]].pause();
    audioList[keyboard[input]].play();
    currentSound = audioList[keyboard[input]]; // Update the current sound to the new sound.
};

/* --- END --- */
