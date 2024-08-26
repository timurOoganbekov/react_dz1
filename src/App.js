import React from 'react';


const Title = ({ text }) => {
  return <h1>{text}</h1>;
};


const Header = () => {
  return (
    <header>
      <Title text="This is the Header" />
    </header>
  );
};


const Content = () => {
  return (
    <main>
      <Title text="This is the Content" />
    </main>
  );
};


const Footer = () => {
  return (
    <footer>
      <Title text="This is the Footer" />
    </footer>
  );
};


const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;

