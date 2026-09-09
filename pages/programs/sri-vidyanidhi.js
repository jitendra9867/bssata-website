import ProgramPage, { getProgram } from '../../components/ProgramPage';

export default function Page() {
  return <ProgramPage program={getProgram('sri-vidyanidhi')} />;
}
