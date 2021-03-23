import { Container } from "./styles";


export function TransactionTable() {
    return (
  <Container>
      <table>
          <thead>
              <tr>
              <th>Titulo</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Datq</th>
              </tr>
          </thead>


          <tbody>
              <tr>
                  <td className='Text-title'>
                      Deselvovimento de WebSite

                  </td>
                  <td className='Entrada'>R$12.0000</td>
                  <td>Desenvolvimento</td>
                  <td>20/02/2021</td>

              </tr>
              <tr>
                  <td>
                      Deselvovimento de WebSite

                  </td>
                  <td className='Saida'>R$12.0000</td>
                  <td>Desenvolvimento</td>
                  <td>20/02/2021</td>

              </tr>
              <tr>
                  <td>
                      Deselvovimento de WebSite

                  </td>
                  <td>R$12.0000</td>
                  <td>Desenvolvimento</td>
                  <td>20/02/2021</td>

              </tr>
              <tr>
                  <td>
                      Deselvovimento de WebSite

                  </td>
                  <td>R$12.0000</td>
                  <td>Desenvolvimento</td>
                  <td>20/02/2021</td>

              </tr>
                <tr>
                  <td>
                      Deselvovimento de WebSite

                  </td>
                  <td>R$12.0000</td>
                  <td>Desenvolvimento</td>
                  <td>20/02/2021</td>

              </tr>
          </tbody>
      </table>
  </Container>
    )
}
