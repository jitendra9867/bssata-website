import ProgramPage, { getStaticData } from '../../components/ProgramPage';

export default function Page(props) {
  return <ProgramPage {...props} />;
}

/* ISR: program content + photo gallery from headless WordPress,
   refreshed every 60 seconds. */
export async function getStaticProps() {
  return {
    props: await getStaticData('karthika-samaradhana'),
    revalidate: 60,
  };
}
