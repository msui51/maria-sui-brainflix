import Hero from '../../components/hero/Hero';
import Main from '../../components/main/Main';

function HomePage(props) {
  return (
    <>
        <Hero activeVideo={props.activeVideo}/>
        <Main activeVideo={props.activeVideo}
            videoList={props.videoList}
            changeActiveVideo={props.changeActiveVideo}/>
    </>
  )
}

export default HomePage