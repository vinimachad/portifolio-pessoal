import React from 'react';
import ft from '../assets/IMG_20191221_163648_506.jpg'
export default function Left() {
    return(
        <div id="left">
            <div className="img-left">
                <img src={ft} alt="Vinicius Galhardo"/>
                <div className="about">
                    <div className="profile">
                        <strong>Sobre</strong>
                        <hr/>
                        <p>Tenho
                            18 anos nascido em
                            Campo Grande, estudando
                            Ciências da Computação e
                            estou extremamente motivado
                            para desenvolver
                            constantemente minhas
                            habilidades e crescer
                            profissionalmente Estou
                            confiante em minha
                            capacidade de
                            desenvolvimento na parte de
                            front-end.
                        </p>
                    </div>
                </div>
            </div>
            <div className="details">
                    <h1>location</h1>
            </div>
        </div>
    );
}