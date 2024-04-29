import Contextual from '../components/Contextual.jsx'
import Cards from '../components/Cards.jsx'
import JobList from '../components/JobList.jsx'
import ViewAllJobs from '../components/ViewAllJobs.jsx'
const Home = () => {
  return (
    <>
        <Contextual/>
        <Cards/>
        <JobList isHome={true}/>
        <ViewAllJobs/>
    </>
  )
}

export default Home