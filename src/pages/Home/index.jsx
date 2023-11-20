//estrutura base para um React:
import { Fragment } from "react"
import "./styles.css"
import logo from '../../imgs/logo.png'
import footer from '../../imgs/footer.jpg'

export function Home(){
  return(
    <Fragment>
    <body>
    <div class="box"> {/* podemos retirar o 'Fragment' que funciona. E nesse caso, podemos também retirar o < import { Fragment } from "react" > ali em cima. */}  
    <img src={logo} class="center"/>
    <h1 class="center">O seu próximo <span>destino</span> pode estar aqui...</h1>
    <p class="centerParagraph">Aqui você encontra uma seleção de <span>pacotes completos</span> para as suas férias!</p>
    <p class="centerParagraph">No <strong>ConnectFlight</strong> você encontra pacotes de viagens nacionais e internacionais que incluem:</p>
    <p class="centerParagraph">passagens aéreas, hotéis, café da manhã, e até seguro viagem com <span>preços arrasadores!</span></p>
    </div>
    <footer>
    <div class="line"></div>
    <div class = "fiadaputa">
      <a target="_blank">Destinos</a>
      <a target="_blank">Ofertas</a>
      <a >Contato</a>
    </div>
    </footer>
    </body>
    <img src={footer} class="centerFooter"/>
    </Fragment>
  )
}