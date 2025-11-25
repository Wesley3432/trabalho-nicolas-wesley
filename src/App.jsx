import styles from "./App.module.css";
import COP from "/COP30.png";
import COP30 from "/Logo_002.png";
import fotoCriadores from "/fotomtfodadvdd.png";

function App() {
  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">O que é COP</a>
        <a href="#s2">COP30</a>
        <a href="#s3">Acontecimentos</a>
        <a href="#s4">Amazônia</a>
        <a href="#s5">Opinião</a>
        <a href="#s6">Sobre</a>
      </nav>

      <main className={styles.container}>
        <section id="s1" className={styles.section}>
          <h1>O que é a COP?</h1>

          <div className={styles.row}>  
            <div className={styles.text}>
              <p>
              A COP é a Conferência das Partes da ONU sobre mudanças climáticas, onde representantes de dezenas de países se reúnem para discutir metas, estratégias e compromissos ligados ao combate ao aquecimento global. É nesse espaço que se definem caminhos para reduzir emissões de gases do efeito estufa e lidar com os impactos ambientais que já estão acontecendo.
              </p>

              <p>
               Na teoria, tudo gira em torno da cooperação e da ciência. Na prática, entretanto, interesses políticos e econômicos acabam influenciando as decisões, o que muitas vezes torna os acordos mais lentos e menos eficientes do que o necessário para enfrentar a crise climática.
              </p>

              <p>
               Mesmo assim, a COP continua sendo um dos poucos momentos em que o mundo inteiro volta sua atenção para um mesmo problema ambiental, criando pressão internacional e gerando debates que podem influenciar políticas públicas em vários países.
              </p>
                <details >
                   <summary>Mais Fontes de Pesquisa</summary>
                 <p>
                     Site oficial da ONU sobre mudanças climáticas: <a className={styles.azul} href="https://unfccc.int/">Link</a>
                 </p>                        
                 <p>
                     Artigo da BBC sobre a COP30 no Brasil: <a className={styles.azul} href="https://www.bbc.com/portuguese/topics/c0rg9wxw8ykt">Link</a>                            
                  </p>
                  <p>
                      Reportagem da National Geographic sobre a Amazônia: <a className={styles.azul} href="https://www.nationalgeographicbrasil.com/viagem/2025/11/o-que-a-capital-da-cop30-no-brasil-esconde-descubra-os-3-fatos-sobre-belem-a-metropole-da-amazonia">Link</a>
                  </p>
                 <p>
                     Vídeo explicativo sobre a COP30: <a className={styles.azul} href="https://www.youtube.com/watch?v=KDfbx9nwRHU">Link</a>
                 </p>
                    </details>
            </div>

            <img src={COP} alt="Imagem COP" className={styles.image} />


            
          </div>
          
        </section>

        <section id="s2" className={styles.sectionAlt}>
          <h1>COP30 no Brasil</h1>

          <div className={styles.rowReverse}>
            <img
              src={COP30}
              alt="Notícia COP30"
              className={styles.image}
            />

            <div className={styles.text}>
              <p>
               A COP30 acontece em Belém, no Pará, em plena Amazônia, o que já carrega um peso simbólico enorme. O Brasil se coloca no centro das discussões globais sobre clima ao sediar o evento no território do maior bioma tropical do planeta.
              </p>

              <p>
                Ao mesmo tempo em que há comemoração por essa visibilidade, também surgem dúvidas e críticas sobre a capacidade do país de lidar com a infraestrutura, a logística e os impactos ambientais que um evento desse porte exige. A cidade passa por mudanças aceleradas para receber líderes e delegações do mundo inteiro.
              </p>

              <p>
                Existe ainda um olhar desconfiado sobre as intenções por trás do evento. Para alguns, a COP30 precisa ser mais do que uma vitrine política: precisa se tornar uma oportunidade real de ação concreta em defesa do meio ambiente e da própria Amazônia.
              </p>
            </div>
            <div className={styles.videoWrapper}> <iframe width="560" height="315" src="https://www.youtube.com/embed/KDfbx9nwRHU?si=au9IJMPbgPjn4gQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> </div>
          </div>

             </section>
        

        <section id="s3" className={styles.section}>
          <h1>Acontecimentos e polêmicas</h1>

          <p>
           Desde já, a COP30 gera debates e controvérsias. Há críticas envolvendo gastos públicos, preparação da cidade e o risco de impactos ambientais provocados pelas próprias obras realizadas para o evento. Isso causa incômodo em parte da população local.
          </p>

          <p>
          Outra polêmica envolve a postura de países que se dizem comprometidos com o meio ambiente, mas continuam mantendo práticas poluentes em larga escala. Essa contradição torna o discurso climático frágil e gera desconfiança sobre a eficácia real das decisões tomadas nas conferências.
          </p>

          <p>
           Além disso, movimentos sociais, ambientalistas e organizações indígenas se mobilizam para cobrar ações mais firmes e menos promessas vazias. A presença dessas vozes torna a COP um espaço também de protesto e resistência.
          </p>
        </section>

        <section id="s4" className={styles.sectionAlt}>
          <h1>Amazônia no centro do debate</h1>

          <p>
     A Amazônia ocupa um papel central nas discussões climáticas, já que é uma das maiores responsáveis pelo equilíbrio ambiental do planeta. Ela influencia o regime de chuvas, abriga uma imensa biodiversidade e ajuda a regular a temperatura global.
          </p>

          <p>
           Mesmo com essa importância, a floresta continua ameaçada pelo desmatamento, pelas queimadas e pela exploração ilegal de seus recursos. Isso transforma a região em símbolo tanto de esperança quanto de alerta sobre os limites que a humanidade está ultrapassando.
          </p>

          <p>
           Com a COP30 acontecendo tão perto da floresta, cresce a expectativa por medidas concretas de proteção. Ainda assim, existe o medo de que tudo se resuma a discursos e imagens impactantes, sem mudanças reais capazes de garantir um futuro mais sustentável.
          </p>
        </section>

        <section id="s5" className={styles.section}>
          <h1>Minha opinião</h1>

          <p>
            Sinceramente? A COP virou quase um evento de fachada. Enquanto
            políticos tiram fotos e fazem discursos, o planeta continua
            esquentando, as florestas continuam queimando e o nível do mar
            continua subindo. Parece que tudo se resume a promessas para
            agradar a mídia.
          </p>

          <p>
            Isso não significa que a COP seja inútil. Ela ainda é importante e
            pode gerar mudanças reais, mas só se houver cobrança, pressão e
            atitudes fora das conferências. Não adianta falar em “salvar o
            planeta” uma vez por ano e ignorar o problema nos outros dias.
          </p>

          <p>
            Se a COP30 no Brasil quiser ser diferente, vai ter que provar com
            ações concretas, não apenas com palavras bonitas. O mundo não
            precisa de mais promessas. Precisa de soluções reais agora.
          </p>
        </section>

        <section id="s6" className={styles.sectionAlt}>
          <h1>Sobre os criadores</h1>

          <div className={styles.center}>
            <img
              src={fotoCriadores}
              alt="Criadores"
              className={styles.imageSmall}
            />
          </div>

          <p className={styles.centerText}>
            Este site foi criado como um projeto informativo e opinativo sobre
            a COP e suas consequências para o mundo e, principalmente, para o
            Brasil. A ideia é trazer reflexão, crítica e consciência ambiental
            de forma direta e acessível.
          </p>
        </section>
      </main>
<details>
  <summary>Github dos criadores</summary>
  <p><a className={styles.azul} href="https://github.com/Wesley3432">Github do Wesley</a></p>
  <p><a className={styles.azul} href="https://github.com/Nicolasink3">Github do Nicolas</a></p>
</details>
      <footer className={styles.footer}>
        <p>© 2025 - Site sobre COP30 e Meio Ambiente</p>
      </footer>
    </>
  );
}

export default App;
