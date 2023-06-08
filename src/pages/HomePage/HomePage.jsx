import MainPageHero from '../../components/hero/MainPageHero';
import MainPageMain from '../../components/main/MainPageMain';

function HomePage(props) {
  return (
    <>
        <MainPageHero activeVideo={props.activeVideo}/>
        <MainPageMain activeVideo={props.activeVideo}
            videoList={props.videoList}
            changeActiveVideo={props.changeActiveVideo}/>
    </>
  )
}

export default HomePage