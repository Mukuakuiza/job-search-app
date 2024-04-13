import Navbar from "./components/Navbar.jsx"
import Contextual from "./components/Contextual.jsx"
import Cards from "./components/Cards.jsx"
import JobList from "./components/JobList.jsx"
import ViewAllJobs from "./components/ViewAllJobs.jsx"
const App = () => {
  return (
    <>
      <Navbar/>
      <Contextual title='We Have your Back' subtitle='Find the best jobs that fits your skills and needs.'/>
      <Cards/>
      <JobList/>
      <ViewAllJobs/>

    </>
  )
}


export default App