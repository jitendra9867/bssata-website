import ProgramPage, { getStaticData, PROGRAMS } from '../../components/ProgramPage';
import { getAllPrograms } from '../../lib/wordpress';

/* Catch-all detail page for programs created in the WordPress admin.
   The ten curated programs keep their own page files (those win over this
   dynamic route); anything new added under Programs → Add Program is built
   on demand and refreshed every 60 seconds. */
export default function ProgramSlugPage(props) {
  return <ProgramPage {...props} />;
}

export async function getStaticPaths() {
  const wpPrograms = (await getAllPrograms()) || [];
  /* The ten curated programs have their own page files — pre-generating
     them here would create conflicting paths. Anything else is built on
     demand by the fallback below. */
  const curated = new Set(PROGRAMS.map((p) => p.slug));
  return {
    paths: wpPrograms
      .filter((p) => !curated.has(p.slug))
      .map((p) => ({ params: { slug: p.slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const data = await getStaticData(params.slug);
  if (!data.program) return { notFound: true };
  return {
    props: data,
    revalidate: 60,
  };
}
