import React, {useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
import styles from './PageNotFound.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function PageNotFound() {

  useEffect(() => {
    AOS.init({
      duration: 1000 
    });
  }, []);

    return(
        <section data-aos="fade-ease-out">
    <div className={styles.container} >
      <div className={styles.text} data-aos="fade-left">
        <h1>Page Not Found</h1>
        <p>We can't seem to find the page you're looking for. Please check the URL for any typos.</p>
        <div className="input-box">
          <input type="text" placeholder="Search..."/>
          <button><i className="fas fa-search"></i></button>
        </div>
        <ul className={styles.menu}>
          <li><Link to="/shopping-website/">Home</Link></li>
        </ul>
      </div>
      <div data-aos="fade-right"><img className={styles.image} src="https://omjsblog.files.wordpress.com/2023/07/errorimg.png" alt=""/></div>
    </div>
    <Outlet/>
  </section>

    )
}

export default PageNotFound