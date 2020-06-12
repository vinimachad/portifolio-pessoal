import React from 'react';
import {FaMapMarkerAlt,FaPhoneAlt,FaPhoneSquareAlt,FaInstagramSquare,FaFacebookSquare,FaGithubSquare,FaMailBulk} from 'react-icons/fa';
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
                <div className="adress">
                    <FaMapMarkerAlt/>
                    <div className="about-adress">
                        <strong>Endereço</strong>
                        <hr/>
                        <ul>
                            <li>
                                <strong>Dados: </strong>187, Rua Ararás, São Francisco.</li>
                            <li><strong>CEP: </strong>79118-040.</li>
                            <li><strong>Complemento: </strong>Ao lado da mascarenhas de moraes.</li>
                        </ul>
                    </div>
                </div>
                <div className="contact">
                    <FaPhoneAlt/>
                    <div className="about-contact">
                        <strong>Contato</strong>
                        <hr/>
                        <ul>
                            <li><FaPhoneSquareAlt/> (67) 9 9229-3645</li>
                            <li><FaInstagramSquare/><a target="_blank" href="https://www.instagram.com/vinimachad/">vinimachad</a></li>
                            <li><FaFacebookSquare/><a target="_blank" href="https://www.facebook.com/vinicius.galhardomachado">Vinicius Galhardo</a></li>
                            <li><FaGithubSquare/> <a target="_blank" href="https://github.com/vinimachad">Vincius Galhardo Machado</a></li>
                            <li><FaMailBulk/> <a target="_blank" href="">viniciusgm45@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="social"></div>
            </div>
        </div>
    );
}