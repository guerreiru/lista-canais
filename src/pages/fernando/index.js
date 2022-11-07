import Head from 'next/head';
import styles from '../../styles/Home.module.css';

const channels = [
  {
    name: 'Ver todos',
    link: 'http://coreplayer.me/painel.php?sessao=VtOkFVGir0VEz02A7D50ZR6vyrS0tFxVPmXS7aVi81lY6Fj7m80hu4ha3BePu74s58WtVbWW2sVTEHyNosiVg8D0roIZeJfC93aclNagAUIt7H9SmioVGDxcU060gUFGBzUXNz5zF0jFaI5CvRt5eiuxyVnBdWtFpbI5kuuD2KOk1F0h2fCfukIfdqj9XhzKcBw5BWc2is2G2448dqVDy58SA6lzRYl2iq20gSsRbKQzd75Mdmd33Zx6YW6ZI8qB',
  },
  {
    name: 'Animal Planet',
    link: 'http://coreplayer.me/canal.php?sessao=ziUe69cS9SA34jbGwnu6swEzo2Nl2DFZC64b8BGk6Iyscwbo2M6TtOkr6psXsMFMhvWiLke5pis9UEEt2xeiolPOzPvlo1fzSgcuhkAGu7Gw9N2PZoZna6QE4ZDCklNokFa4LaI5W3UEZabtwk5qXqmGmOZehTU8sFHnLETf4gfKxk8it00oeTDvTAM1Is2k6tzHe1HDoET2ebx7184nQatSa2aiTaMT6R4Xi43afnj0Se3uW8QpR9g6cxXbtNq7&stream=179&streamtipo=live&canal=Animal+Planet+HD&img=http%3A%2F%2Fp6.vc%2Fbb&catg=9',
  },
  {
    name: 'Animal Planet FHD',
    link: 'http://coreplayer.me/canal.php?sessao=ziUe69cS9SA34jbGwnu6swEzo2Nl2DFZC64b8BGk6Iyscwbo2M6TtOkr6psXsMFMhvWiLke5pis9UEEt2xeiolPOzPvlo1fzSgcuhkAGu7Gw9N2PZoZna6QE4ZDCklNokFa4LaI5W3UEZabtwk5qXqmGmOZehTU8sFHnLETf4gfKxk8it00oeTDvTAM1Is2k6tzHe1HDoET2ebx7184nQatSa2aiTaMT6R4Xi43afnj0Se3uW8QpR9g6cxXbtNq7&stream=164&streamtipo=live&canal=Animal+Planet+FHD&img=http%3A%2F%2Fp6.vc%2Fbb&catg=9',
  },
  {
    name: 'Discovery Channel',
    link: 'http://coreplayer.me/canal.php?sessao=ziUe69cS9SA34jbGwnu6swEzo2Nl2DFZC64b8BGk6Iyscwbo2M6TtOkr6psXsMFMhvWiLke5pis9UEEt2xeiolPOzPvlo1fzSgcuhkAGu7Gw9N2PZoZna6QE4ZDCklNokFa4LaI5W3UEZabtwk5qXqmGmOZehTU8sFHnLETf4gfKxk8it00oeTDvTAM1Is2k6tzHe1HDoET2ebx7184nQatSa2aiTaMT6R4Xi43afnj0Se3uW8QpR9g6cxXbtNq7&stream=181&streamtipo=live&canal=Discovery+Channel+HD&img=http%3A%2F%2Fp6.vc%2FALO&catg=9',
  },
  {
    name: 'Discovery Channel FHD',
    link: 'http://coreplayer.me/canal.php?sessao=ziUe69cS9SA34jbGwnu6swEzo2Nl2DFZC64b8BGk6Iyscwbo2M6TtOkr6psXsMFMhvWiLke5pis9UEEt2xeiolPOzPvlo1fzSgcuhkAGu7Gw9N2PZoZna6QE4ZDCklNokFa4LaI5W3UEZabtwk5qXqmGmOZehTU8sFHnLETf4gfKxk8it00oeTDvTAM1Is2k6tzHe1HDoET2ebx7184nQatSa2aiTaMT6R4Xi43afnj0Se3uW8QpR9g6cxXbtNq7&stream=166&streamtipo=live&canal=Discovery+Channel+FHD&img=http%3A%2F%2Fp6.vc%2FALA&catg=9',
  },
  {
    name: 'Dicovery ID',
    link: 'http://coreplayer.me/canal.php?sessao=p05oKS2j18rVJDrPVlbc6AJFTuLEgNzpL5jcv0Vy6CdmZtQU8AylPBCTqrTMsuZ1qsbdE74HAR3aL3XmgwxizIb5c31WKgykFAVlBqopQYbgYYhcL2s9Gg4JI5i66N25yW8N6aLkLbWDlpTNRJOC6p5LvU4fCZGEugQ3YBb02QJnUm6Seds6MPGnYLh8BNteYR9G8PWL8Okt0J6LxKqDD6qALVo5NomZGwjFOfsqQFIilXfSXWMN3Kk428tya4XI&stream=190&streamtipo=live&canal=Investigacao+Discovery+HD&img=http%3A%2F%2Fp6.vc%2FeK7&catg=9',
  },
  {
    name: 'Dicovery ID FHD',
    link: 'http://coreplayer.me/canal.php?sessao=chYMU5IjF2wXjt1DAR2zQ1njnjBaWQ5iWlPog1gQ1yx1qQ7E4wslX8wqXD3ihn82V3zcqQ2D8kvocCUlB73FR8jhrqhpN0ysxqtUfkrqccQ76yVTpRLUhXincuaxofndmkuNm5orR0qOD339jnlakp1XrobO7erzIc7stfH3001zhc0jhKYi13Pjo3M4YsRkzk1ZI1IPWQwgGXRAITJyFIKu5qSvH1ml77X7kNEoFf8xmK0um1TulN1D9GHSShCz&stream=175&streamtipo=live&canal=Investigacao+Discovery+FHD&img=http%3A%2F%2Fp6.vc%2FeK7&catg=9',
  },

  {
    name: 'History Channel',
    link: 'http://coreplayer.me/canal.php?sessao=ziUe69cS9SA34jbGwnu6swEzo2Nl2DFZC64b8BGk6Iyscwbo2M6TtOkr6psXsMFMhvWiLke5pis9UEEt2xeiolPOzPvlo1fzSgcuhkAGu7Gw9N2PZoZna6QE4ZDCklNokFa4LaI5W3UEZabtwk5qXqmGmOZehTU8sFHnLETf4gfKxk8it00oeTDvTAM1Is2k6tzHe1HDoET2ebx7184nQatSa2aiTaMT6R4Xi43afnj0Se3uW8QpR9g6cxXbtNq7&stream=189&streamtipo=live&canal=History+Channel+HD&img=http%3A%2F%2Fp6.vc%2FeK6&catg=9',
  },
  {
    name: 'History Channel FHD',
    link: 'http://coreplayer.me/canal.php?sessao=ziUe69cS9SA34jbGwnu6swEzo2Nl2DFZC64b8BGk6Iyscwbo2M6TtOkr6psXsMFMhvWiLke5pis9UEEt2xeiolPOzPvlo1fzSgcuhkAGu7Gw9N2PZoZna6QE4ZDCklNokFa4LaI5W3UEZabtwk5qXqmGmOZehTU8sFHnLETf4gfKxk8it00oeTDvTAM1Is2k6tzHe1HDoET2ebx7184nQatSa2aiTaMT6R4Xi43afnj0Se3uW8QpR9g6cxXbtNq7&stream=174&streamtipo=live&canal=History+Channel+FHD&img=http%3A%2F%2Fp6.vc%2FeK6&catg=9',
  },
];

export default function CanaisFernando() {
  const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de canais de Fernando</title>
        <meta
          name='description'
          content='Lista com os canais da Tv de Fernando'
        />
      </Head>

      <main className={styles.main}>
        <ul className={styles.flexColumn}>
          {channels.map((canal) => (
            <li key={canal.name}>
              <span
                className={styles.linkDot}
                style={{ backgroundColor: `#${randomColor()}` }}
              ></span>
              <a href={canal.link}>{canal.name}</a>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://www.linkedin.com/in/guerreiru/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by Fernando Guerreiro
        </a>
      </footer>
    </div>
  );
}
