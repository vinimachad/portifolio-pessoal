import React from 'react';
import layoutPage from '../assets/layout-page.png';
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
                        <div className="box-proj">
                            <div className="name-proj">
                                <span>( 2017 - 2018 )</span>
                            </div>
                            <div className="content-proj">
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}