import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LatestPodcastSection from './components/LatestPodcastSection';
import TopicsSection from './components/TopicsSection';
import ProfileCard from './components/ProfileCard';
import { profiles } from './data/profile';
import TrendingPodcastSection from './components/TrendingPodcastSection';
import SiteFooter from './components/SiteFooter';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <LatestPodcastSection/>
      <TopicsSection/>
      <TrendingPodcastSection/>
      <SiteFooter/>
    </div>
  );
}

export default App;
