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
                A COP é a Conferência das Partes da ONU sobre mudanças
                climáticas. Todos os anos, líderes de vários países se reúnem
                para discutir metas, compromissos e ações contra a crise
                climática. O objetivo principal é tentar reduzir a emissão de
                gases do efeito estufa e encontrar caminhos para um futuro mais
                sustentável.
              </p>

              <p>
                Na teoria, tudo parece perfeito: acordos, metas, relatórios e
                promessas. Mas, na prática, muitos desses compromissos demoram
                para sair do papel. A COP acaba sendo, muitas vezes, mais palco
                político do que um espaço real de mudança.
              </p>

              <p>
                Mesmo assim, ela continua sendo um dos poucos espaços globais
                onde o mundo inteiro discute o mesmo problema: o aquecimento
                global e suas consequências diretas na vida de milhões de
                pessoas.
              </p>
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
                A COP30 será sediada em Belém, no Pará, em plena região
                amazônica. Isso, por si só, já é simbólico. Afinal, estamos
                falando do maior bioma tropical do mundo, que sofre diariamente
                com desmatamento, queimadas e exploração ilegal.
              </p>

              <p>
                Muita gente comemora o fato de o Brasil ser o anfitrião, mas
                também surgem críticas: será que o país está preparado para
                receber um evento desse porte? Infraestrutura, segurança,
                impacto ambiental do próprio evento... tudo isso entra em jogo.
              </p>

              <p>
                Existe também uma sensação de que a COP30 pode virar só mais
                uma vitrine para discursos bonitos. O mundo vai olhar para a
                Amazônia, mas será que vai ajudar de verdade a protegê-la, ou
                apenas transformar tudo em marketing verde?
              </p>
            </div>
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_zp6kAIhZC8?si=HTfJ8ykEY0GIFdD9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>

        <section id="s3" className={styles.section}>
          <h1>Acontecimentos e polêmicas</h1>

          <p>
            Toda COP vem acompanhada de polêmicas. Desde protestos de
            ativistas até acusações de hipocrisia por parte de grandes países
            poluidores. Muitos líderes discursam sobre sustentabilidade, mas
            continuam financiando indústrias que destroem o meio ambiente.
          </p>

          <p>
            Outro ponto polêmico é que, muitas vezes, quem mais sofre com as
            mudanças climáticas são os países mais pobres — justamente aqueles
            que menos contribuíram para a crise. Enquanto isso, nações ricas
            costumam fugir de responsabilidades reais ou oferecem ajudas que
            estão longe do suficiente.
          </p>

          <p>
            A COP também vira palco para grandes manifestações, principalmente
            de jovens que cobram ações concretas. A mensagem é clara: não dá
            mais para adiar decisões enquanto o planeta dá sinais de colapso.
          </p>
        </section>

        <section id="s4" className={styles.sectionAlt}>
          <h1>Amazônia no centro do debate</h1>

          <p>
            É impossível falar de clima sem falar da Amazônia. Ela é um dos
            maiores reguladores climáticos do planeta, mas continua sendo
            destruída por ganância, descaso e políticas ineficientes. O
            desmatamento ilegal, o garimpo e as queimadas avançam a cada ano.
          </p>

          <p>
            Ao mesmo tempo, comunidades indígenas e povos tradicionais lutam
            diariamente para proteger a floresta. São eles que muitas vezes
            fazem o trabalho que governos inteiros ignoram. Mesmo assim,
            recebem pouca visibilidade e quase nenhum apoio real.
          </p>

          <p>
            A COP30, acontecendo tão perto da floresta, deveria ser um marco de
            mudança. Seria a chance perfeita de transformar discurso em ação.
            Mas o medo é que continue tudo como está: muito debate e pouca
            transformação de verdade.
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

      <footer className={styles.footer}>
        <p>© 2025 - Site sobre COP30 e Meio Ambiente</p>
      </footer>
    </>
  );
}

export default App;
