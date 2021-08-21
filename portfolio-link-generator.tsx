/* eslint-disable no-undef */

import PageWithLayoutType from "../types/PageWithLayout";
import MainLayout from "../components/common/layout/Layout";
import HomeSlider from "../components/home-slider";
import WhoWeAreSection from "../components/home/who-we-are";
import Portfolio from "../components/home/portfolio";
import OurServices from "../components/home/our-services";
import Testimonials from "../components/home/testimonials";
import LinkGenerator from "../components/link-generator/link-generator";

const PortfolioLinkGenerator: React.FC = ({
  projects,
  categories,
  reviews,
  projectsTags,
}: any) => {

  return (
  <>
   <LinkGenerator categories={categories} projectsTags={projectsTags} />
  </>
  )};
(PortfolioLinkGenerator as PageWithLayoutType).layout = MainLayout;

export default PortfolioLinkGenerator;

export async function getStaticProps() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const apiVersion = process.env.NEXT_PUBLIC_API_VER;

  const projRes = await fetch(`${url}/${apiVersion}/our_portfolio?per_page=100`);
  const catRes = await fetch(`${url}/${apiVersion}/portfolio_categories`);
  const projRviews = await fetch(`${url}/${apiVersion}/reviews`);
  const projTags = await fetch(`${url}/${apiVersion}/portfolio_tags?per_page=20`);

  const projects = await projRes.json();
  const categories = await catRes.json();
  const reviews = await projRviews.json();
  const projectsTags = await projTags.json();

  if (!projects && !categories && !reviews && !projectsTags) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projects, categories, reviews, projectsTags },
  };
}
