import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

function FetchData() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const getData = async () => {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/photos?page=${page}&_limit=5`
    );
    const userData = await resp.json();
    setData((prevData) => [...prevData, ...userData]);
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePage = () => {
    setPage((prev) => prev + 1);
    getData();
  };

  const fetchMoreData = () => {
    handlePage();
  };
  return (
    <>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <ul>
          {data.map((items, index) => (
            <li key={index}>
              <Link to="/details">
                <Card
                  imageSrc={items.thumbnailUrl ? items.thumbnailUrl : ""}
                  userId={items.id}
                  userName={items.title}
                  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, dignissimos?"
                />
              </Link>
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </>
  );
}

export default FetchData;
