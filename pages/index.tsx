import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Folklore from "../components/Folklore";
import Debut from "../components/Debut";
import Evermore from "../components/Evermore";
import N1989 from "../components/1989";
import Red from "../components/Red";
import Lover from "../components/Lover";
import Reputation from "../components/Reputation";
import Sn from "../components/Sn";
import Fearless from "../components/Fearless";
import Midnights from "../components/Midnights";

export default function Home(props: any) {
  const [cover, setCover] = useState();
  useEffect(() => {
    setCover(props.response.album);
  });

  return (
    <>
      <Head>
        <title>Random Taylor Swift Songs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark gap-8 flex flex-col bg-[#0b0b0b] items-center justify-start font-Inter min-w-full max-w-full min-h-screen md:gap-12">
        <h1 className="text-white font-bold text-2xl mt-8 md:text-3xl">
          Random Taylor Swift Songs
        </h1>
        <div className="w-3/4 flex flex-col items-center justify-center gap-8 md:flex-row  md:gap-0 md:w-3/6 md:justify-between md:mt-6">
          <div className="w-52 h-52">
            <div className="w-52 h-52 z-10 rounded-lg absolute"></div>
            {cover == "Folklore" && <Folklore></Folklore>}
            {cover == "Evermore" && <Evermore></Evermore>}
            {cover == "Fearless" && <Fearless></Fearless>}
            {cover == "Red" && <Red></Red>}
            {cover == "Reputation" && <Reputation></Reputation>}
            {cover == "Lover" && <Lover></Lover>}
            {cover == "Speak Now" && <Sn></Sn>}
            {cover == "Taylor Swift" && <Debut></Debut>}
            {cover == "1989" && <N1989></N1989>}
            {cover == "Midnights" && <Midnights></Midnights>}
          </div>
          <div className="flex flex-col gap-4 items-center justify-center md:gap-6 md:items-end md:ml-8">
            <h2 className="ml-3 mr-3 text-white font-semibold text-xl md:text-2xl md:ml-0 md:mr-0">
              {cover == "Folklore" && (
                <h2 className="ml-3 mr-3 text-white font-semibold text-xl md:text-2xl md:ml-0 md:mr-0 lowercase">
                  {props.response.song}
                </h2>
              )}
              {cover == "Evermore" && (
                <h2 className="ml-3 mr-3 text-white font-semibold text-xl md:text-2xl md:ml-0 md:mr-0 lowercase">
                  {props.response.song}
                </h2>
              )}
              {cover == "Midnights" && (
                <h2 className="ml-3 mr-3 text-white font-semibold text-xl md:text-2xl md:ml-0 md:mr-0 lowercase">
                  {props.response.song}
                </h2>
              )}
              {cover == "Reputation" && (
                <h2 className="ml-3 mr-3 text-white font-semibold text-xl md:text-2xl md:ml-0 md:mr-0">
                  {props.response.song}
                </h2>
              )}
              {cover == "1989" && (
                <h2 className="ml-3 mr-3 text-white font-semibold text-xl md:text-2xl md:ml-0 md:mr-0">
                  {props.response.song}
                </h2>
              )}
              {cover == "Red" && (
                <h2 className="ml-3 mr-3 text-white font-semibold text-xl md:text-2xl md:ml-0 md:mr-0">
                  {props.response.song}
                </h2>
              )}
              {cover == "Speak Now" && (
                <h2 className="ml-3 mr-3 text-white font-semibold text-xl md:text-2xl md:ml-0 md:mr-0">
                  {props.response.song}
                </h2>
              )}

              {cover == "Taylor Swift" && (
                <h2 className="ml-3 mr-3 text-white font-semibold text-xl md:text-2xl md:ml-0 md:mr-0">
                  {props.response.song}
                </h2>
              )}
              {cover == "Fearless" && (
                <h2 className="ml-3 mr-3 text-white font-semibold text-xl md:text-2xl md:ml-0 md:mr-0">
                  {props.response.song}
                </h2>
              )}
              {cover == "Lover" && (
                <h2 className="ml-3 mr-3 text-white font-semibold text-xl md:text-2xl md:ml-0 md:mr-0">
                  {props.response.song}
                </h2>
              )}
            </h2>
            <h3 className="text-white font-semibold text-l md:text-xl">
              {cover == "Folklore" && (
                <h3 className="text-white font-semibold text-l md:text-xl lowercase">
                  {props.response.album}
                </h3>
              )}
              {cover == "evermore" && (
                <h3 className="text-white font-semibold text-l md:text-xl lowercase">
                  {props.response.album}
                </h3>
              )}
              {cover == "Reputation" && (
                <h3 className="text-white font-semibold text-l md:text-xl lowercase">
                  {props.response.album}
                </h3>
              )}
              {cover == "1989" && (
                <h3 className="text-white font-semibold text-l md:text-xl">
                  {props.response.album}
                </h3>
              )}
              {cover == "Red" && (
                <h3 className="text-white font-semibold text-l md:text-xl">
                  {props.response.album}
                </h3>
              )}
              {cover == "Speak Now" && (
                <h3 className="text-white font-semibold text-l md:text-xl">
                  {props.response.album}
                </h3>
              )}

              {cover == "Taylor Swift" && (
                <h3 className="text-white font-semibold text-l md:text-xl">
                  {props.response.album}
                </h3>
              )}
              {cover == "Fearless" && (
                <h3 className="text-white font-semibold text-l md:text-xl">
                  {props.response.album}
                </h3>
              )}
              {cover == "Lover" && (
                <h3 className="text-white font-semibold text-l md:text-xl">
                  {props.response.album}
                </h3>
              )}
            </h3>
          </div>
        </div>
        <p className="w-1/2 font-medium text-center ml-3 mr-3 text-neutral-100">
          {props.response.quote}
        </p>
        <div className="flex items-center justify-center gap-6">
          {cover == "Folklore" && (
            <Link
              href={"https://open.spotify.com/album/2fenSS68JI1h4Fo296JfGr"}
            >
              <a className="px-8 py-2 text-white font-medium border-2 border-[#1DB954] rounded-full hover:bg-[#1DB954] transition hover:text-[#191414]">
                Listen on Spotify
              </a>
            </Link>
          )}
          {cover == "Midnights" && (
            <Link
              href={"https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3"}
            >
              <a className="px-8 py-2 text-white font-medium border-2 border-[#1DB954] rounded-full hover:bg-[#1DB954] transition hover:text-[#191414]">
                Listen on Spotify
              </a>
            </Link>
          )}
          {cover == "Evermore" && (
            <Link
              href={"https://open.spotify.com/album/2Xoteh7uEpea4TohMxjtaq"}
            >
              <a className="px-8 py-2 text-white font-medium border-2 border-[#1DB954] rounded-full hover:bg-[#1DB954] transition hover:text-[#191414]">
                Listen on Spotify
              </a>
            </Link>
          )}
          {cover == "Reputation" && (
            <Link
              href={"https://open.spotify.com/album/6DEjYFkNZh67HP7R9PSZvv"}
            >
              <a className="px-8 py-2 text-white font-medium border-2 border-[#1DB954] rounded-full hover:bg-[#1DB954] transition hover:text-[#191414]">
                Listen on Spotify
              </a>
            </Link>
          )}
          {cover == "1989" && (
            <Link
              href={"https://open.spotify.com/album/5fy0X0JmZRZnVa2UEicIOl"}
            >
              <a className="px-8 py-2 text-white font-medium border-2 border-[#1DB954] rounded-full hover:bg-[#1DB954] transition hover:text-[#191414]">
                Listen on Spotify
              </a>
            </Link>
          )}
          {cover == "Fearless" && (
            <Link
              href={"https://open.spotify.com/album/4hDok0OAJd57SGIT8xuWJH"}
            >
              <a className="px-8 py-2 text-white font-medium border-2 border-[#1DB954] rounded-full hover:bg-[#1DB954] transition hover:text-[#191414]">
                Listen on Spotify
              </a>
            </Link>
          )}
          {cover == "Speak Now" && (
            <Link
              href={"https://open.spotify.com/album/6Ar2o9KCqcyYF9J0aQP3au"}
            >
              <a className="px-8 py-2 text-white font-medium border-2 border-[#1DB954] rounded-full hover:bg-[#1DB954] transition hover:text-[#191414]">
                Listen on Spotify
              </a>
            </Link>
          )}
          {cover == "Taylor Swift" && (
            <Link
              href={"https://open.spotify.com/album/5eyZZoQEFQWRHkV2xgAeBw"}
            >
              <a className="px-8 py-2 text-white font-medium border-2 border-[#1DB954] rounded-full hover:bg-[#1DB954] transition hover:text-[#191414]">
                Listen on Spotify
              </a>
            </Link>
          )}
          {cover == "Lover" && (
            <Link
              href={"https://open.spotify.com/album/1NAmidJlEaVgA3MpcPFYGq"}
            >
              <a className="px-8 py-2 text-white font-medium border-2 border-[#1DB954] rounded-full hover:bg-[#1DB954] transition hover:text-[#191414]">
                Listen on Spotify
              </a>
            </Link>
          )}
          {cover == "Red" && (
            <Link
              href={"https://open.spotify.com/album/6kZ42qRrzov54LcAk4onW9"}
            >
              <a className="px-8 py-2 text-white font-medium border-2 border-[#1DB954] rounded-full hover:bg-[#1DB954] transition hover:text-[#191414]">
                Listen on Spotify
              </a>
            </Link>
          )}

          <Link href={"/"}>
            <a className="px-8 py-2 text-white font-medium border-2 border-zinc-800 rounded-full hover:bg-zinc-800 transition">
              Refresh
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("https://taylorswiftapi.onrender.com/get").then(
    (res) => res.json()
  );

  return {
    props: {
      response,
    },
  };
};
