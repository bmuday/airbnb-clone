import type { NextPage } from "next";
import Head from "next/head";
import Banner from "./components/Banner";
import Header from "./components/Header";
import SmallCard from "./components/SmallCard";
import MediumCard from "./components/MediumCard";
import LargeCard from "./components/LargeCard";
import Footer from "./components/Footer";

interface DataProps {
  exploreData: Small_Card[];
  cardsData: Medium_Card[];
}

export interface Small_Card {
  img: string;
  location: string;
  distance: string;
}

export interface Medium_Card {
  img: string;
  title: string;
}

export interface Large_Card {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

const Home: NextPage<DataProps> = ({ exploreData, cardsData }) => {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-2xl font-semibold py-5">Explore Nearby</h2>

          {/* Pull data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols:2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={location}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold py-5">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={title} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get inspired"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}

export type Props = {};
