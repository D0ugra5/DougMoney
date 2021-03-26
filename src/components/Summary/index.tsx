
import { Container } from './styles';
import iconemeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saidas.svg';
import TotalImg from '../../assets/Total.svg';
import { TransactionContext } from '../../TransactionContext';
import { useContext } from 'react';
export function Summary() {
    const { transaction } = useContext(TransactionContext)
    var total
    var saida: number
    var entradas: number
    entradas = 0
    saida = 0
    total = 0 
    transaction.forEach((data) => {
        if (data.type == 'Entrada') {
            console.log(data.amount)
            entradas += data.amount
        } else {
            saida += data.amount
        }

    })
    total = entradas - saida



    return (
        <Container>




            <div>
                <header>
                    <p>
                        Entradas
                  </p>
                    <img src={iconemeImg} alt="" />
                </header>
                <strong>{new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(entradas)}</strong>

            </div>
            <div>
                <header>
                    <p>
                        Saidas
                  </p>
                    <img src={outcomeImg} alt="" />
                </header>
                <strong>-{new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(saida)}</strong>

            </div>
            <div className="Verdinhowhite-a">
                <header>
                    <p>
                        Total
                  </p>
                    <img src={TotalImg} alt="" />
                </header>
                <strong>{new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(total)}</strong>

            </div>
        </Container>
    )
}
