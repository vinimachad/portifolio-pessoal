import React from 'react';
import {FaUserFriends,FaUsers,FaBook,FaAlgolia,FaHeart,FaReact,FaHtml5,FaSass,FaFigma,FaJsSquare} from 'react-icons/fa'
import layoutPage from '../assets/layout-page.png';
import projects from '../data'
export default function Right(){

    return(
        <div id="right">
            <div className="box">
                <h1>Vinicius Galhardo Machado</h1>
                <h4>Cursando Ciências da Computação na Uniderp, segundo</h4>
                <hr/>
            </div>
            <div className="history">
                <strong>História Acadêmica</strong>
                <hr/>
                <p>
                    Conclui meu ensino médio no Arlindo de Andrade Gomes, e como na escola havia o curso Técnico de Informática integrado ao ensino médio, optei por fazê-lo.        
                </p>
                <p>
                    E foi uma otima escolha, principalmente para minha carreira como desenvovedor front-end, no curso eu obtive a base para iniciar a desenvolver pequenas aplicações, como alguns layouts, com CSS3 e HTML5, a maioria deles utilizando o position do CSS3.
                </p>
            </div>
            <div className="experience">
                <strong>Projetos</strong>
                <hr/>
                <div className="hidden-proj">
                    <div className="scroll-proj">
                        {projects.map(project => (
                        <div className="box-proj">
                            <div className="name-proj">
                        <span>{project.name}</span>
                            </div>
                            <div className="content-proj">
                                <p>
                                    {project.content}
                                </p>
                                <a target="_blank" href={project.linkGit}>Acessar repositiorio no GitHub</a>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="skills">
                <strong>Habilidades</strong>
                <hr/>
                <div className="division">
                        <div className="pessoal-skill">
                            <ul>
                                <li>
                                    <div className="rounded-icons">
                                        <FaUserFriends/>
                                    </div>
                                    <span>Amigavél</span>
                                </li>
                                <li>    
                                    <div className="rounded-icons">
                                        <FaUsers/>
                                    </div>           
                                    <span>Trabalho<br/> em Grupo</span>
                                </li>
                                <li>
                                    <div className="rounded-icons">  
                                        <FaBook/>
                                    </div>
                                    <span>Constante Aprendizado</span>
                                </li>
                                <li>
                                    <div className="rounded-icons">    
                                        <FaAlgolia/>
                                    </div>
                                    <span>Projetos nos Prazos</span>
                                </li>
                                <li>
                                    <div className="rounded-icons">
                                        <FaHeart/>
                                    </div>
                                    <span>Apaixonado por tecnolgia</span>
                                </li>
                            </ul>
                        </div>
                        <div className="tools-skills">
                            <ul>
                                <li>
                                    <div className="rounded-icons">
                                        <FaHtml5/>
                                    </div>
                                    <span>HTML5</span>
                                </li>
                                <li>    
                                    <div className="rounded-icons">
                                        <FaReact/>
                                    </div>           
                                    <span>React JS</span>
                                </li>
                                <li>
                                    <div className="rounded-icons">  
                                        <FaSass/>
                                    </div>
                                    <span>Sass</span>
                                </li>
                                <li>
                                    <div className="rounded-icons">    
                                        <FaJsSquare/>
                                    </div>
                                    <span>JavaScript</span>
                                </li>
                                <li>
                                    <div className="rounded-icons">
                                        <FaFigma/>
                                    </div>
                                    <span>Figma</span>
                                </li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </div>
    );
}