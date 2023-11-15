//estrutura base para um React:
import { Fragment } from "react"
import "./styles.css"
import logo from '../../imgs/logo.png'
import footer from '../../imgs/footer.jpg'

export function Home(){
  return(
    <Fragment> {/* podemos retirar o 'Fragment' que funciona. E nesse caso, podemos também retirar o < import { Fragment } from "react" > ali em cima. */}  
    <img src={logo} class="center"/>
    <h1 class="center">O seu futuro pode estar aqui...</h1>
    <p class="center">Aqui você encontra uma seleção de pacotes completos para as suas férias!</p>
    <p class="center">No ConnectFlight você encontra pacotes de viagens nacionais e internacionais que incluem:</p>
    <p class="center">passagens aéreas, hotéis, café da manhã, e até seguro viagem com preços arrasadores!</p>
    <p class="center">Destinos</p> 
    <p class="center">Ofertas</p> 
    <p class="center">Contato</p>
    <img src={footer} class="centerFooter"/>
    </Fragment>
  )
}