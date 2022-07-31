import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img
                src="https://th.bing.com/th/id/R.249e19c4d9150cc3b9535739fa6dabcc?rik=fWvy8U1dlZdAwg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftransparent-troll-face%2ftransparent-troll-face-2.png&ehk=3i%2f7p%2bWvMP4tGUom74DNTTq3Zz01oPJTfchsknCeUNE%3d&risl=&pid=ImgRaw&r=0"
                className="header--image"
                alt='header-img'
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}