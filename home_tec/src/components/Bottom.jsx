import retroPc from "../design/imgs/image-retro-pcs.jpg"
import "../design/Bottom.css"
import laptop from "../design/imgs/image-top-laptops.jpg"
import games from "../design/imgs/image-gaming-growth.jpg"
function bottom() {
    return(
        <div id="conteudo_">
            <div className="outrasNews">
                <img src={retroPc} alt="RetroPc" className="img"/>
                <div className="texts">
                    <div className=" number">01</div>
                    <div><h1 className="titleN">Revivendo Retro PCs</h1></div>
                    <div><p className="desc">O que acontece quando os PCs velhos ganham  atualizações modernas?</p></div> 
                </div>
            </div> 
            <div className="outrasNews">
                <img src={laptop} alt="RetroPc" className="img"/>
                <div className="texts">
                    <div className=" number">02</div>
                    <div><h1 className="titleN">Top 10 Laptops de 2023</h1></div>
                    <div><p className="desc">Nossa melhor escolha para as varias necessidades e orçamentos!</p></div> 
                </div>
            </div>        
            <div className="outrasNews">
                <img src={games} alt="RetroPc" className="img"/>
                <div className="texts">
                    <div className=" number">03</div>
                    <div><h1 className="titleN">O Crescimento dos Jogos</h1></div>
                    <div><p className="desc">Como a pandemia abriu um leque de oportunidades. </p></div> 
                </div>
            </div>          
        </div>
    );
}

export default bottom;