import React from 'react'

export default function GameList(props) {
    const game = props.game
    return (
        <div className="col-3">
            <img src={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`} className="game-pic"></img>
            <p className="game-name">{game.name}</p>
        </div>
    )
}
