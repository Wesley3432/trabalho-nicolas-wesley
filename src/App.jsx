import styles from './App.module.css'
import COP from '/COP30.png'
import bccNews from '/bccNews.png'
import fotoCriadores from '/fotomtfodadvdd.png'
function App() {

    return (
        <>
        <nav className={styles.menu}>
            <a href='#s1'>Oq é COP</a>
            <a href="#s2">COP30</a>
            <a href="#s3">acontecimentos</a>
            <a href="#s4">polemicas</a>
        </nav>
        <main>
                 <section className={styles.s1} id='s1'>
          <div className={styles.left}>
            <img className={styles.imgCOP} src={COP} alt="Foto perfil" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>COP</h2>
            <p className={styles.paragraph}>COP é a sigla para "Conferência das Partes", que é o órgão supremo da Convenção-Quadro das Nações Unidas sobre Mudança do Clima (UNFCCC). É uma reunião anual dos países signatários da convenção para debater e tomar decisões sobre as mudanças climáticas, como a redução de emissões de gases do efeito estufa. </p>
          </div>
        </section>


<section className={styles.s2} id='s2'>
  <div className={styles.left}>
    <h2 className={styles.title}>COP30</h2>
    <p className={styles.paragraph}>
      A COP30 será realizada no Brasil, em Belém, e representa um marco importante
      para a agenda climática mundial. O evento reúne líderes globais, cientistas
      e organizações para debater ações urgentes de preservação ambiental, justiça
      climática e políticas sustentáveis.
    </p>
  </div>
</section>

<section className={styles.s3} id='s3'>
  <div className={styles.right}>
    <h2 className={styles.title}>Acontecimentos</h2>
    <p className={styles.paragraph}>
      Durante a COP, diversos acordos são discutidos: redução de emissão de carbono,
      preservação de florestas, investimentos em energia limpa e compromissos de
      adaptação climática. Também ocorrem discursos, reuniões fechadas e anúncios
      importantes feitos pelas delegações internacionais.
    </p>
  </div>
</section>



   <section className={styles.s4} id='s4'>
    <div className={styles.right}>
     <h2 className={styles.title}>polemicas</h2>
     <p className={styles.paragraph}>
       A COP30 virou polêmica porque muita gente duvida da estrutura de Belém
       pra receber o evento e critica a ideia de fazer uma conferência climática
       no meio da Amazônia enquanto o desmatamento e o garimpo ainda acontecem.
       Também pegou mal o gasto alto com obras de última hora e o medo de que seja
       só mais uma COP cheia de promessa e pouca ação.
      </p>
    </div>               
   </section>


             <footer className={styles.rodape}>
             <a href="https://www.bbc.com/portuguese/articles/cpq1gnp807wo" target='blank' rel='nooperner'><img width={70} src={bccNews} alt="BCC" /></a>
             <a href="https://rickroll.it/rickroll.mp4"><img width={70} src={fotoCriadores} alt="Criadores" /></a>
             </footer>



 </main>
  </>
  )
}

export default App