
import { Container } from './styles';
import iconemeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saidas.svg';
import TotalImg from '../../assets/Total.svg';
export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>
                        Entradas
                  </p>
                    <img src={iconemeImg} alt="" />
                </header>
                <strong>R$ 1000,00</strong>

            </div>
            <div>
                <header>
                    <p>
                        Saidas
                  </p>
                    <img src={outcomeImg} alt="" />
                </header>
                <strong>R$ -2000,00</strong>

            </div>
            <div className="Verdinhowhite-a">
                <header>
                    <p>
                        Total
                  </p>
                    <img src={TotalImg} alt="" />
                </header>
                <strong>R$  1000,00</strong>

            </div>
        </Container>
    )
}
