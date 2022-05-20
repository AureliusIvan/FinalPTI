import { ChakraProvider, theme, Text } from '@chakra-ui/react';
import { useMemo, useState, useEffect, useRef } from 'react';
import './App.css';
import PageOne from './Pages/Start';
import SelectChar from './Pages/SelectChar';
import Home from './Pages/Home/Home';
import Eat from './Pages/Home/Eat/Eat';
import Cafe from './Pages/Cafe/Cafe';
import ToMall from './Pages/Mall/shopLinking';
import Ngopi from './Pages/Cafe/Ngopi/PokemonBook/Ngopi';
import Uni from './Pages/Universitas/UnivHall';
import { AllContext } from './components/Value/CoinContext';
import Clock from 'react-clock/dist/umd/Clock';
import MiniGames from './Pages/Home/MiniGames/MiniGames';

/*
1. nama
2. jurusan
3. api
4. character
5. currency
6. status dll
7. clock
8. inventory (opsional)
9. baju
10. cuaca
*/

function App() {
  const [coin, setCoin] = useState(0);
  const [nama, setNama] = useState('');
  const [name, setName] = useState('');
  const [Day, setDay] = useState(0);
  const [hour, setHour] = useState(23);
  const [minute, setCount] = useState(0);
  const [makan, setMakan] = useState(70);
  const [tidur, setTidur] = useState(70);
  const [main, setMain] = useState(70);
  const [belajar, setBelajar] = useState(70);
  const [weather, setWeather] = useState('');

  useInterval(() => {
    setCount(minute + 1);
    if (minute >= 59) {
      setHour(hour + 1);
      setCount(0);
    }
    if (hour >= 23 && minute === 59) {
      setDay(Day + 1);
      setHour(0);
    }
  }, 1000);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const providerValue = useMemo(
    () => ({
      coin,
      setCoin,
      name,
      setName,
    }),
    [coin, name]
  );

  const [jurusan, setJurusan] = useState(0);
  const [character, setCharacter] = useState([]);

  const [value, setValue] = useState(0);
  const test = useMemo(() => ({ value, setValue }), [value, setValue]);
  const [game, setGame] = useState('start');
  const handleClick = gameState => {
    setGame(gameState);
    console.log(game);
  };

  return (
    <ChakraProvider theme={theme}>
      <AllContext.Provider
        value={{
          coin,
          setCoin,
          nama,
          setNama,
          jurusan,
          setJurusan,
          Day,
          setDay,
          hour,
          setHour,
          minute,
          setCount,
          makan,
          setMakan,
          tidur,
          setTidur,
          main,
          setMain,
          belajar,
          setBelajar,
          weather,
          setWeather,
        }}
      >
        {(() => {
          switch (game) {
            case 'start':
              return <PageOne handleClick={handleClick} />;
            case 'selectchar':
              return <SelectChar handleClick={handleClick} />;
            case 'home':
              return <Home handleClick={handleClick} />;
            case 'eat':
              return <Eat handleClick={handleClick} />;
            case 'cafe':
              return <Cafe handleClick={handleClick} />;
            case 'ngopi':
              return <Ngopi handleClick={handleClick} />;
            case 'mall':
              return <ToMall handleClick={handleClick} />;
            case 'uni':
              return <Uni handleClick={handleClick} />;
            case 'Minigames':
              return <MiniGames handleClick={handleClick}/>
              default:
              return null;
          }
        })()}
      </AllContext.Provider>
    </ChakraProvider>
  );
}

export default App;

// {items.map(createList)}
