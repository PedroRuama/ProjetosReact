import retro from "../design/imgs/image-retro-pcs.jpg"
import "../design/Bottom.css"

function bottom() {
    return(
        <div id="conteudo_">
            <div className="outrasNews">
                <img src={retro} alt="RetroPc" className="img"/>
                <div className="texts">
                    <div className=" number">01</div>
                    <div><h1 className="titleN">Revivendo Retro PCs</h1></div>
                    <div><p className="desc">O que acontece quando os PCs velhos ganham  atualizações modernas?</p></div> 
                </div>
            </div> 
            <div className="outrasNews">
                <img src={retro} alt="RetroPc" className="img"/>
                <div className="texts">
                    <div className=" number">02</div>
                    <div><h1 className="titleN">Top 10 Notebooks de 2023</h1></div>
                    <div><p className="desc">Nossa melhor escolha para as varias necessidades e </p></div> 
                </div>
            </div>            
        </div>
    );
}

export default bottom;