import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import TvGlobo from '../../public/tv-globo.png';
import TvVerdesMares from '../../public/tv-verdes-mares.png';
import TvDiario from '../../public/tv-diario.png';
import TvSbt from '../../public/tv-sbt.png';
import TvBand from '../../public/tv-band.png';
import TvRecord from '../../public/tv-record.png';
import TvDiscovery from '../../public/tv-discovery.png';

const channels = [
  {
    number: 1,
    name: 'Globo',
    logo: TvGlobo,
    link: 'http://coreplayer.me/canal.php?sessao=0371uEqsjs66N7RyEvhguSluq1h1JYpHF40lgKgJfktTgYpK3JpJ22Rr7Sf20GKzPbJqiPbwoxOG8XKRI7ri1OjTKN1W8d1C7l9BL3FjWMHh76sDOUqW98rydfTaco76pp6W3HfatVV1br2NLL7Z1xuzZP5EbNxNh6xYEhiYlH4A5NYlzVDPOki25Ltfm6e6I9u49AxJcvLZbjVIT21okXF7aEHsXPnqA70vzjgiM6IM6etfXIwzWMZJcgVci3Xp&stream=394&streamtipo=live&canal=Globo+SP+HD&img=http%3A%2F%2Fp6.vc%2FATA&catg=2',
  },
  {
    number: 2,
    name: 'Verdes Mares',
    logo: TvVerdesMares,
    link: 'http://coreplayer.me/canal.php?sessao=bC00ZQsRg8xtzMhggYwNMAEko8wH10YMa9eHeZn8zZ3orq5P8r2fOE4AH0iuugnhPLL4HWT8LRtF0hFXVn216drFpT87U7Cc6XIuZrGYxucxsCDVLtDPS008u2pSw00x0638lK6Vu1xAvtnhJzz9aU8Z8go8BMwhRFHvrC3E6FDmK0SOyYhtq16pnZ3gCH80gBfJb7KvebVOYDiME73fhAsnrNAHZyjeMDaHYJQyOeGroUCkt5Ekzk500bbB6NPh&stream=65252&streamtipo=live&canal=Globo+Tv+Verdes+Mares+Fortaleza+HD&img=http%3A%2F%2Fp6.vc%2FVFL&catg=2',
  },
  {
    number: 3,
    name: 'Tv Diário',
    logo: TvDiario,
    link: 'http://coreplayer.me/canal.php?sessao=qQSmDi2j750wmWQghcYzGZKIYHrTkWK55RsD6js3i2oELIPVVwv07icA7KdzkC7UjvtOfHhgPFY0kzGsTJC7AtNCAcSKk3NFZ4EJ7ENeoBO0q7jm0Uo0JaU77QLB0BU9ulnalLgX7PhwABw4yo7MEtDJwUPI6NHQZxN9AuVAkIS7vz2I70zxN88H0ipl3SVsaQ6bLxs8WbkUXc3HA7xaWIJqJvtgAyJxz40jC74uLNQAr9K2brHVWTZRhgI7laKw&stream=418&streamtipo=live&canal=TV+Diario+Fortaleza+HD&img=http%3A%2F%2Fp6.vc%2FATW&catg=1',
  },
  {
    number: 4,
    name: 'SBT',
    logo: TvSbt,
    link: 'http://coreplayer.me/canal.php?sessao=kbRlAhc7Vc4Tyerj9QpS4kprsjM2PY5uszhfert4kECE5IJAcqsDpunMTqcOvDe4KpXb6kpWQ7SgYhjQrZ6N92DkxMO5D7WHOZMdvoNzq7N5J6Si7WK7Y42GgF34asXWHZzQ7Xz5zszMFyObW4a0fEqIOOrsNTz1zgLFRbp0y7CP4dqEMwpVxmmN3SWIMFV7b7AMau4ut9SlZfpYTZtUXM3FNyQWfGfZ7SI50uMm2jJlPBurPp48iCuAuHPi0FhQ&stream=55&streamtipo=live&canal=SBT+SP+HD&img=http%3A%2F%2Fp6.vc%2FAGZ&catg=1',
  },
  {
    number: 5,
    name: 'Band',
    logo: TvBand,
    link: 'http://coreplayer.me/canal.php?sessao=O4tuAWd44D6eZdXRQKaD4YHN1LrFuJL5RA48Si1pxVQmF0THPe431RGVUZIaj9NUJ9XARZlccmKYi6JvxU13cF0y0FDpOaiLrIkY8RMddZoX61ZdJvY6woTecsCwFOvhBghYwzJmA8h1RkPV0LB6EODt5K6Rh4I6dVecM2r4XlGc1iGqd5Rrjqqjpe2OfgGn6smUdrmLWsyo79zd3GioYE0Db3Han65nhqAtKBzfIRxgpg9v2901Z66JCzRo6oDJ&stream=113584&streamtipo=live&canal=Band+SP+HD&img=http%3A%2F%2Fp6.vc%2FVVG&catg=1',
  },
  {
    number: 6,
    name: 'Record',
    logo: TvRecord,
    link: 'http://coreplayer.me/canal.php?sessao=h15x7AAZpNh6j3XcZezeCIiWmuu3nBaw3Y7ZJukbQyrianyJahv0P5MF9ALrWBgifvQGtIBZbV73eE9rhUbfMa3Q0NW235mkeQYSndyur5v0YEcPx52f3e1HjBBRobIbo3faJrpl3A8Ie29zMrLXD2Bm375mnxf63j9lPMjSj6VmkvFc1Mk3SkM3O4vFbbRjQSU1JaNAzWwevMtWkKws7B3G4E3kh1yYf3YFB2FDapnbnJNeMI7U413eK1wXaD7P&stream=52&streamtipo=live&canal=RecordTV+SP+HD&img=http%3A%2F%2Fp6.vc%2FAGW&catg=1',
  },
  {
    number: 7,
    name: 'Dicovery ID',
    logo: TvDiscovery,
    link: 'http://google.com/',
  },
];

export default function Home() {
  const [channelNumber, setChannelNumber] = useState('');

  const getChannel = useCallback(() => {
    const _channel = channels.find(
      (channel) => String(channel.number) === String(channelNumber)
    );

    if (_channel) {
      window.open(_channel.link, '_self');
      return;
    }
  }, [channelNumber]);

  const handleChannel = useCallback(
    (e) => {
      if (!isNaN(e.key)) {
        setChannelNumber((prev) => (prev += e.key));
        return;
      }
      if (e.key.toUpperCase() == 'ENTER') {
        getChannel();
      }
      if (e.key.toUpperCase() == 'BACKSPACE') {
        setChannelNumber((prev) => prev.slice(0, -1));
      }
    },
    [getChannel]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleChannel);

    return () => {
      document.removeEventListener('keydown', handleChannel);
    };
  }, [handleChannel]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de canais</title>
        <meta name='description' content='Lista com os canais da Tv' />
      </Head>

      <main className={styles.main}>
        <ul>
          {channels.map((canal) => (
            <li key={canal.name}>
              <a href={canal.link}>
                <div className={styles.card}>
                  <Image
                    src={canal.logo.src}
                    width={80}
                    height={80}
                    alt={canal.name}
                  />
                  <p>{canal.name}</p>
                </div>
              </a>
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
