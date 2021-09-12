// @ts-ignore
import classes from "../styles/HomeLeftSlide.module.css";
import HomeLeftSide from "../components/HomeLeftSlide/HomeLeftSide";
import Posts from "../components/Posts";
import Share from "../components/Share";
import posts from "../dummyData";
import HomeRightSlide from "../components/HomeRightSlide/HomeRightSlide";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function App() {
  const [fetchPosts, setFetchPosts] = useState([]);

  useEffect(() => {
    setFetchPosts(posts);
  }, []);

  return (
    <>
      <Head>
        <title>Cheat Chat</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="flex">
        <div className={classes.left__container}>
          <HomeLeftSide />
        </div>
        <div className="w-full flex justify-center">
          <div className={classes.middle__container}>
            <Share />
            {fetchPosts.map((fetchpost) => {
              return <Posts post={fetchpost} key={fetchpost.id} />;
            })}
          </div>
        </div>
        <div className={classes.right__container}>
          <HomeRightSlide users={fetchPosts} />
        </div>
      </div>
    </>
  );
}
