import { useState, useContext, useEffect } from "react";


export default function Infos() {
  useEffect(() => {
    document.title = `ChessGasy | Informations`

  }, [])
    return (
      <div>Infos</div>
    )
}