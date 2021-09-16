import React,{ useEffect, useRef ,useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
const Main = () => {
    const [data, setData] = useState<any>({});
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }, []);
    return (
      <div style={{ height: "600px" }}>
        <img src={data.url} alt="pic" />
      </div>
    );
  }
  
  const pageSize = 5;
  export default function App() {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
  
    const isBottomVisible = useIntersectionObserver(
      ref,
      {
        threshold: 0
      },
      false
    );
  
    useEffect(() => {
      isBottomVisible && setCount(count + 1);
    }, [isBottomVisible]);
  
    return (
      <div className="App">
        {(() => {
          const children = [];
          for (let i = 1; i <= count * pageSize; i++) {
            children.push(<Component key={i} id={i} />);
          }
          return children;
        })()}
        <div ref={ref} style={{ width: "100%", height: "20px" }}>
          Bottom
        </div>
      </div>
    );
  }
  
export default Main
