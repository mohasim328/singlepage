import React, { useEffect, useRef, useState } from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Header from './components/Header.jsx'

const App = () => {

  const HomeSec = useRef();
  const AboutSec = useRef();
  const ContactSec = useRef();
  const ServicesSec = useRef();
  const toTop = useRef();
  const [show , setShow] = useState(false);

  
  const ScrollHandler = (eleRef) => {

    // console.log(eleRef.current)
  
      window.scrollTo({ top: eleRef.current.offsetTop, behavior: "smooth" });
    
  };

  const ScrollToTop = (eleRef) => {

      window.scrollTo({ top: 0, behavior: "smooth" });
    
  };

  useEffect(()=>{

    const handleScroll = () =>{

      if(window.scrollY >500){
      //  console.log(scrollY)
        setShow(true);
      }else{
        setShow(false);
      }


    };

    window.addEventListener('scroll' , handleScroll);
    return () =>{
      window.addEventListener('scroll' , handleScroll);
    }
    
  },[])

  return (
    <div>
      <Header HomeSec={HomeSec} AboutSec={AboutSec} ContactSec={ContactSec} ServicesSec={ServicesSec}   ScrollHandler={ScrollHandler} />
      <section
      ref={HomeSec}
      >
        <Home />
      </section>

      <section
      ref={AboutSec}
      >
        <About />
      </section>

      <section
      ref={ContactSec}
      >
        <Contact />
      </section>
      <section
      ref={ServicesSec}
      >
        <Contact />
      </section>

      <div onClick={()=> ScrollToTop(toTop) } className='fixed right-4 bottom-4 rounded-full bg-black text-white '> { show &&  <h1 className='p-5'>Top</h1> }</div>
     
    </div>
  )
}

export default App
