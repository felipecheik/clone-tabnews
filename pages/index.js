import dicaprioGif from '../GIF/09_dicaprio.gif';

function Home() {
  const src = typeof dicaprioGif === 'string' ? dicaprioGif : dicaprioGif.src;

  return (
    <>
      <h1>Ladies and gentlemen... We did it</h1>
      <img src={src} alt="Leonardo DiCaprio (GIF)" />
    </>
  );
}

export default Home;
