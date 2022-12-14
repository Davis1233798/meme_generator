import React, { useState } from "react"
import memesData from "../memesData.js"

export default function Meme() {
    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
    /**
* Challenge: Save the random meme URL in state
* - Create new state called `memeImage` with an
*   empty string as default
* - When the getMemeImage function is called, update
*   the `memeImage` state to be the random chosen
*   image URL
* - Below the div.form, add an <img /> and set the
*   src to the new `memeImage` state you created
*/
    const [img, setImg] = useState("")
    let url

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url ? memesArray[randomNumber].url : 0
        setImg(url)
        console.log(img)
    }
    return (
        <main>

            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            {img === '' ? '' : <img className='meme-pic' src={img} alt='meme-pic' />}

        </main>
    )
}