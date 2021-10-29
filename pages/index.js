import Hero from "@components/Hero/Hero";
import Main from "@components/Main/Main";
import LinkBlocks from "@components/Blocks/LinkBlocks/LinkBlocks";
import MailChimp from "@components/MailChimp/MailChimp";
import * as api from "@utils/server";

const Index = ({ favorites }) => {
  return (
    <Main>
      <Hero main={true} collage={{ images: favorites, slides: 3 }} id="home" />
      <LinkBlocks />
      <MailChimp />
    </Main>
  );
};

export default Index;

export async function getStaticProps() {
  const favorites = await api.fetchFavorites();
  return { props: { favorites: favorites }, revalidate: 5 };
}
