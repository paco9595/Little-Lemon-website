import "./App.css";
import Book from './components/book';
import CommentList from './components/commentList';
import Footer from './components/footer';
import Header from './components/header';
import MenuSection from './components/menuSection';
import Navbar from './components/navbar';
import Section from './components/section';

function App() {
  return (
    <div className='max-w-5xl mx-auto'>
      <Navbar/>
      <Header/>
      <Section>
        <div>
          <img src="/794a4fda36a64b7fafd20fbcb5971633-768x768.webp" alt="" />
        </div>
        <MenuSection/> 
      </Section>
      <Section>
        <Book/>
        <div>
          <img src="Puerto-Vallarta-restaurante-mexicano-porfirios.jpeg" alt="" />
        </div>
      </Section>
      <CommentList/>
      <Footer/>
    </div>
  );
}

export default App;
