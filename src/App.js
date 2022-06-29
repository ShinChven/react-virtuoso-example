import './App.css';
import { Virtuoso } from 'react-virtuoso'

function App() {
  // populate demo data
  const items = [];
  for (let i = 0; i < 200; i++) {
    const arr = [];
    for (let j = 0; j < i; j++) {
      arr.push(j);
    }
    items.push(arr.join("-"));
  }

  const cellCount = 4;

  const getRow = (rowIndex) => {
    const idx = [];
    for (let i = 0; i < cellCount; i++) {
      idx.push(rowIndex * cellCount + i);
    }
    const cells = idx.map(i => <div key={i} className={'cell'}>{items[i]}</div>);
    return <div className={'row'}>{cells}</div>
  }

  return (
    <Virtuoso
      className={'grid'}
      style={{
        height: '100vh',
        width: '100vw',
      }}
      totalCount={items.length/cellCount}
      itemContent={getRow}>
    </Virtuoso>
  );
}

// const App = () => {
//   return <Virtuoso style={{ height: '400px' }} totalCount={200} itemContent={index => <div>Item {index}</div>} />
// }

export default App;
