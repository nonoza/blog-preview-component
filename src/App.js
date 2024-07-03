import image from './image.svg';
import profile from './profile.png';
import Category from './components/Category';
import Date from './components/Date';
import Paragraph from './components/Pagragrap';
import Heading from './components/Heading';
import Author from './components/Author';
import './App.css';


function App() {
  return (
    <article className="blog-preview-container" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
      < img src = {image} alt = "image" className ="main-image" />
      <Category />
      <Date />
      <Heading  />
      <Paragraph  />
      <Author />

    </article>
  );
}

export default App;
