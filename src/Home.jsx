import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Outlet, Link, useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import logo from '../src/assets/ecommerce.jpg';
import product1 from  '../src/assets/product/1.jpg';
import product2 from  '../src/assets/product/2.jpg';
import product3 from  '../src/assets/product/3.jpg';
import product4 from  '../src/assets/product/4.jpg';
import product5 from  '../src/assets/product/5.jpg';
import product6 from  '../src/assets/product/6.jpg';
import product7 from  '../src/assets/product/7.jpg';
import product8 from  '../src/assets/product/8.jpg';
import newArrival1 from '../src/assets/new-arrivals/1.jpg';
import newArrival2 from '../src/assets/new-arrivals/2.jpg';
import newArrival3 from '../src/assets/new-arrivals/3.jpg';
import newArrival4 from '../src/assets/new-arrivals/4.jpg';
import newArrival5 from '../src/assets/new-arrivals/5.jpg';
import newArrival6 from '../src/assets/new-arrivals/6.jpg';
import newArrival7 from '../src/assets/new-arrivals/7.jpg';
import newArrival8 from '../src/assets/new-arrivals/8.jpg';
import newArrival9 from '../src/assets/new-arrivals/9.jpg';
import newArrival10 from '../src/assets/new-arrivals/10.jpg';
import feature1 from "../src/assets/features/f1.jpg";
import feature2 from "../src/assets/features/f2.jpg";
import feature3 from "../src/assets/features/f3.jpg";
import feature4 from "../src/assets/features/f4.jpg";
import feature5 from "../src/assets/features/f5.jpg";
import feature6 from "../src/assets/features/f6.jpg";
import appStore from "../src/assets/app store.jpg";
import playStore from "../src/assets/play store.jpg";
import payment from "../src/assets/payment.jpg";



const Home = () => {

    // to make page scroll top
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

    useEffect(() => {
        AOS.init({
          duration: 450
        });
      }, []);

      // AOS
      function getRandomAnimation() {
        let animations = ['fade', 'fade-up', 'fade-down', 'fade-left', 'fade-right',
        'fade-up-right', 'fade-up-left', 'fade-down-right', 'fade-down-left',
        'flip-left', 'flip-right', 'flip-up', 'flip-down',
        'zoom-in', 'zoom-in-up', 'zoom-in-down', 'zoom-in-left', 'zoom-in-right',
        'zoom-out', 'zoom-out-up', 'zoom-out-down', 'zoom-out-left', 'zoom-out-right'];
        let randomIndex = Math.floor(Math.random() * animations.length);
        return animations[randomIndex];
      }

    const storeItems = [
        {img: `${product1}`, brand: 'Nike', brandDetails: "Nike Gold Space Slim Fit Polo Men's", price: 100, amount: 1},
        {img: `${product2}`, brand: 'Nike', brandDetails: "Nike Dry Fit Challenger Short Men's", price: 90, amount: 1},
        {img: `${product3}`, brand: 'Nike', brandDetails: "Nike Dry Fit Tight Top Men's", price: 80, amount: 1},
        {img: `${product4}`, brand: 'Adidas', brandDetails: "ADIDAS SPORTS PERFORMANCE SWEATER", price: 75, amount: 1},
        {img: `${product5}`, brand: 'Adidas', brandDetails: 'ADIDAS ESSENTIALS EMBROIDERED T-SHIRT', price: 80, amount: 1},
        {img: `${product6}`, brand: 'Adidas', brandDetails: 'ADIDAS VS PACE SHOES MEN', price: 120, amount: 1},
        {img: `${product7}`, brand: 'Adidas', brandDetails: 'ADIDAS CORE BRA W BL BT', price: 40, amount: 1},
        {img: `${product8}`, brand: 'Nike', brandDetails: "Nike Quest 4 Running Men's", price: 168, amount: 1},
        {img: `${newArrival1}`, brand: 'Adidas', brandDetails: "3-STRIPES SPORT TANK TOP WOMEN", price: 100, amount: 1},
        {img: `${newArrival2}`, brand: 'Adidas', brandDetails: "FACE MASKS FACE COVERS", price: 35, amount: 1},
        {img: `${newArrival3}`, brand: 'Adidas', brandDetails: "ADIDAS SPORTS SOCKS", price: 20, amount: 1},
        {img: `${newArrival4}`, brand: 'Danami', brandDetails: "Danami Throne Of Grace Printed Hoodie", price: 125, amount: 1},
        {img: `${newArrival5}`, brand: 'Jones Wears', brandDetails: "Jones Wears Marshmello Printed Hoodie", price: 105, amount: 1},
        {img: `${newArrival6}`, brand: 'Protective', brandDetails: "Anti Blue Light Protective Computer Glasses", price: 15, amount: 1},
        {img: `${newArrival7}`, brand: 'Yemlays', brandDetails: "Yemlays Men's Casual Shoe", price: 120, amount: 1},
        {img: `${newArrival8}`, brand: 'Yemlays', brandDetails: "Men's Breathable Lace-up Canvas Sneakers", price: 115, amount: 1},
        {img: `${newArrival9}`, brand: 'Yemlays', brandDetails: "Wlisth Luminous Quartz Watch", price: 175, amount: 1},
        {img: `${newArrival10}`, brand: 'Cuban', brandDetails: "ICED Wrist Watch - Cuban Gold", price: 200, amount: 1},
        ];
                    const featuredProduct = storeItems.slice(0, 9);
                    const newArivalProduct = storeItems.slice(9, 18);

    const [cart, setCart] = useState([]);

    function addFeaturedProductToCart(index) {
        const itemToAdd = featuredProduct[index];

        let isItemAlreadyAdded = cart.some(item => 
            item.img === itemToAdd.img &&
            item.brand === itemToAdd.brand && 
            item.brandDetails === itemToAdd.brandDetails
        );
    
        if (isItemAlreadyAdded) {
            Swal.fire({
                title: 'Unsuccessful',
                text: 'Item exist in cart already',
                icon: 'error',
                confirmButtonText: 'continue'
            });
            return false;
        } else {
            setCart([...cart, itemToAdd]);
            Swal.fire({
                title: 'Successful',
                text: `${itemToAdd.brandDetails} added to cart`,
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to cart"
            }).then((result) => {
                if (result.isConfirmed) {
                    return setShowPopup(true);
                }
            });
        }
    }

    function addNewArivalProductToCart(index){
        const itemToAdd = newArivalProduct[index];

        let isItemAlreadyAdded = cart.some(item => 
            item.img === itemToAdd.img &&
            item.brand === itemToAdd.brand && 
            item.brandDetails === itemToAdd.brandDetails && 
            item.price === itemToAdd.price
        );
    
        if (isItemAlreadyAdded) {
            Swal.fire({
                title: 'Unsuccessful',
                text: 'Item exist in cart already',
                icon: 'error',
                confirmButtonText: 'continue'
            });
            return false;
        } else {
            setCart([...cart, itemToAdd]);
            Swal.fire({
                title: 'Successful',
                text: `${itemToAdd.brandDetails} added to cart`,
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to cart"
            }).then((result) => {
                if (result.isConfirmed) {
                    return setShowPopup(true);
                }
            });
        }
    }

    let totalCartPrice = 0;
    function incrementPrices() {
        cart.map((item) => {
            totalCartPrice += Number(item.price);
        });
    }

    incrementPrices();
    

        // to show cart
        const [showPopup, setShowPopup] = useState(false);     

        const togglePopup = () => {
            return setShowPopup(true);
        };
    
        let cartDisappear = useRef(null);
    
        const continueShopping = () => {
           
            cartDisappear.current.style.marginTop = "100vw";
            cartDisappear.current.style.transition = "2s ease";
    
            setTimeout(() => {
               return setShowPopup(false);
            }, 1000);
        }

    function removeItem(index) {
        
        // sweetalert
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: `${cart[index].brandDetails} removed from cart`,
    });
        cart.splice(index, 1);
        setCart([...cart]);
    }

    function checkOut(){
        
        if (cart.length == 0) {
            Swal.fire({
                title: 'Unsuccessful',
                text: `Cart is empty`,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        } else {
            setCart([]);
            Swal.fire({
                title: 'Successful',
                text: `Thank you for your order! 🎉`,
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    }

    // for navbar responsiveness
    const [isActive, setIsActive] = useState(false);

    const openNavbar = () => {
        setIsActive(true);
      };
    
      const closeNavbar = () => {
        setIsActive(false);
      };

      //to increment cart quantity
      let [cartInput, setCartInput] = useState(1);
      function incrementCartQuantity(index){
          
          // function to the selected item in cart that matches the one in the storeItem
      function findIndexInStoreItem(cartItem) {
          return storeItems.findIndex(item => 
          item.brand === cartItem.brand &&
          item.brandDetails === cartItem.brandDetails &&
          item.img === cartItem.img
          );
      }

      let selectedItemPrice = storeItems[findIndexInStoreItem(cart[index])].price;
      
      cart[index].amount = cart[index].amount + 1;

      cart[index] = {...cart[index], price: selectedItemPrice * cart[index].amount, amount: cart[index].amount};
      setCartInput(cartInput + 1)
      }

      //to decrement cart quantity
      function decrementCartQuantity(index){
          
          // function to the selected item in cart that matches the one in the storeItem
      function findIndexInStoreItem(cartItem) {
          return storeItems.findIndex(item => 
          item.brand === cartItem.brand &&
          item.brandDetails === cartItem.brandDetails &&
          item.img === cartItem.img
          );
      }

      let selectedItemPrice = storeItems[findIndexInStoreItem(cart[index])].price;
      
      cart[index].amount = cart[index].amount - 1;

      if(cart[index].amount < 1){
          cart[index].amount = 1;
          return false
      } else{
          cart[index] = {...cart[index], price: selectedItemPrice * cart[index].amount, amount: cart[index].amount};
      }
      setCartInput(cartInput - 1)
      }


    return (
        <div>

        {/* navbar and header */}
        <nav className="navbar navbar-expand-lg bg-warning fixed-top" style={{width: '100vw'}} >
  <div className="container">
    <a className="navbar-nav" data-aos="fade-down"><img src={logo} alt="Logo" id="nav-logo" style={{width: '40px', height: '35px', cursor: "pointer"}}/></a>

    <button
    data-aos="fade-down"
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-pills">

        <li data-aos="fade-down" className="nav-item text-center"><a style={{backgroundColor: "#088178", cursor: "pointer"}} className="nav-link" aria-current="page" ><Link style={{color: "#ffc107"}} to="/shopping-website/">Home</Link></a></li>

        <li data-aos="fade-down" className="nav-item text-center"><a className="nav-link" aria-current="page" ><Link style={{color: "#088178", cursor: "pointer"}} to="/shopping-website/shop">Shop</Link></a></li>

        <li data-aos="fade-down" className="nav-item text-center"><a style={{color: "#088178", cursor: "pointer"}} className="nav-link" aria-current="page" onClick={togglePopup}><i className="fad fa-shopping-cart"></i></a></li>

      </ul>
    </div>
  </div>
</nav>
        
        {/* big img and details */}
        <section id="hero">
            <h4 data-aos="fade-right">Trade-in-offer</h4>
            <h2 data-aos="fade-right">Super value deals</h2>
            <h1 data-aos="fade-right">On all products</h1>
            <button data-aos="fade-right">Shop Now</button>
        </section>
        
        {/* features */}
        <section id="feature" className="section-p1">
            <div className="fe-box"  data-aos="fade-right">
                <img src={feature1} alt=""/>
                <h6>Free Shipping</h6>
            </div>
        
        
            <div className="fe-box" data-aos="fade-up">
                <img src={feature2} alt=""/>
                <h6>Product Reviews</h6>
            </div>
        
            <div className="fe-box" data-aos="fade-down">
                <img src={feature3} alt=""/>
                <h6>Branded</h6>
            </div>
        
            <div className="fe-box" data-aos="fade-down">
                <img src={feature4} alt=""/>
                <h6>Clear Polices</h6>
            </div>
        
            <div className="fe-box" data-aos="fade-up">
                <img src={feature5} alt=""/>
                <h6>Customer Support</h6>
            </div>
        
           
            <div className="fe-box" data-aos="fade-left">
                <img src={feature6} alt=""/>
                <h6>Security</h6>
            </div>
        
        </section>

        {/* product */}
        <section id="product1" className="section-p1">
            <h2>Featured Products</h2>
            <p>Your One-Stop Shop for Everything You Need.</p>

            <div className="product-container">
                {featuredProduct.map((item, index) => (
                    <div className='product' key={index} data-aos={getRandomAnimation()} style={{overflowY: 'hidden'}}>
                        <img src={item.img} alt="Product"/>
                        <div className="description">
                            <span>{item.brand}</span>
                            <h5>{item.brandDetails}</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>${item.price}</h4>
                        </div>
                        <a onClick={() => addFeaturedProductToCart(index)}><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                ))}
            </div>

</section>
        
        {/* banner */}
        <section id="barner" className="section-m1">
            <h4>Repair Services</h4>
            <h2>Enjoy up to <span>50% off</span> Shipping Fees on all t-Shirt & Sneakers</h2>
            <button className="normal">Learn More</button>
        </section>
        
        {/* new arrivals */}
        <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Your One-Stop Shop for Everything You Need"</p>
        
        
        <div className="product-container">
        
        {newArivalProduct.map((item, index) => (
                    <div className='product' key={index} data-aos={getRandomAnimation()}>
                        <img src={item.img} alt="Product"/>
                        <div className="description">
                            <span>{item.brand}</span>
                            <h5>{item.brandDetails}</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>${item.price}</h4>
                        </div>
                        <a onClick={() => addNewArivalProductToCart(index)}><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                ))}
        
            
        
        </div>
        </section>
        
        {/* small banner */}
        <section id="sm-banner" className="section-p1">
            <div className="banner-box" data-aos="fade-right">
                <h4>Crazy deals</h4>
                <h2>Buy 1 get 1 free</h2>
                <span>The Hurry-Up Limited Offer ongoing at our store.</span>
                <button className="white">Learn More</button>
            </div>
        
            <div className="banner-box banner-box2" data-aos="fade-left">
                <h4>Spring & Summer</h4>
                <h2>Upcoming season</h2>
                <span>The Hurry-Up Limited Offer ongoing at our store.</span>
                <button className="white">Collection</button>
            </div>
        </section>
        
        {/* banner3 */}
        <section id="banner3" className="section-p1">
            <div className="banner-box" data-aos="fade-right">
                <h2>Seasonal Sales</h2>
                <h3>Winter Collection -50% OFF</h3>
            </div>
        
            <div className="banner-box banner-box2" data-aos="fade-up">
                <h2>New Wears Collection</h2>
                <h3>Summer Collection -30% OFF</h3>
            </div>
        
            <div className="banner-box banner-box3" data-aos="fade-left">
                <h2>T-shirt</h2>
                <h3>Enjoy up to 10% discount</h3>
            </div>
        </section>
        
        
        {/* Newsletter */}
        <section id="newsletter" className="section-p1 section-m1">
            <div className="newstext" data-aos="fade-left">
                <h4>Sign Up For Newsletter</h4>
                <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
            </div>
        
            <div className="newsletter-form" data-aos="fade-right">
                <input type="text" name="" id=""  placeholder="Email" style={{height: "50px"}}/>
                <button className="normal" style={{height: "50px"}}>Sign Up</button>
            </div>
        </section>
                
        {/* footer */}
        <section>
        <footer className="section-p1" id='footer-container'>
            <div className="col" data-aos="fade-right">
                <img className="footerlogo" src={logo} alt="" style={{width: '40px', height: '35px'}}/>
                <h4>Contact</h4>
                <p>Address:Pepper Road, Hazel Grove, Stockport, Cheshire, SK7 5SA, UK.</p>
                <p>Phone:+44 2035 143305</p>
                <p>Hours: 10:00 - 18:00, Mon - Fri</p>
                <div className="follow">
                    <h4>Follow Us</h4>
                    <div className="icon">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-pinterest"></i>
                    </div>
                </div>
            </div>
        
            <div className="col" data-aos="fade-up">
                <h4>About</h4>
                <a href="#">About us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact Us</a>            
            </div>
        
            <div className="col" data-aos="fade-up">
                <h4>My Account</h4>
                <a href="#">Sign In</a>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track My Order</a>
                <a href="#">Help</a>            
            </div>
        
            <div className="col install" data-aos="fade-left">
                <h4>Install App</h4>
                <p>Get app on Apple store or Play store</p>
                <div className="row">
                    <img src={appStore} alt=""/>
                    <img src={playStore} alt=""/>
                </div>
                <p>Secured Payment Getways</p>
                <img src={payment} alt=""/>
            </div>
        </footer>

        <div className="copyright" >
                <p>© {new Date().getFullYear()}, Larry's Tech. HTML & CSS Ecommerce Templates.</p>
        </div>
        </section>

{/* cart */}
{showPopup && (
        <div className="overlay" data-aos="fade-up" ref={cartDisappear}>
            <div className="popup">
            <section style={{ height: "80vh" }}>
                <div className="container py-5">
                    <div className="row d-flex justify-content-center align-items-center">
                    <div className="col" >
                        <div className="card" >
                        <div className="card-body p-4" >
                            <div className="row">
                            <div className="col-lg-7">
                                <h5 className="mb-3">
                                <a href="#!" className="text-body" onClick={continueShopping}>
                                    <i className="fas fa-long-arrow-alt-left me-2" ></i>Continue shopping
                                </a>
                                </h5>
                                <hr />
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                <div>
                                    <p className="mb-1">Shopping cart</p>
                                    <p className="mb-0">You have {cart.length} item(s) in your cart</p>
                                </div>
                                <div>
                                    <p className="mb-0">
                                    <span className="text-muted">Sort by:</span>{" "}
                                    <a href="#!" className="text-body">
                                        price <i className="fas fa-angle-down mt-1"></i>
                                    </a>
                                    </p>
                                </div>
                                </div>

                                {cart.map((item, index) => (
                                    <div className="card mb-3 p-3" key={index}>
                                        <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center flex-wrap">
                                            <div>
                                            <img src={item.img}
                                                className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px", height: '50px' }} />
                                            </div>
                                            <div className="ms-3">
                                            <h5>{item.brand}</h5>
                                            <p className="small mb-0 break-word">{item.brandDetails}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row justify-content-center align-items-center flex-wrap">
                                            <div className='flex-sm-row' >
                                                <div  style={{display: "flex", justifyContent: "center", alignSelf:"center", }}>
                                                    <div><button onClick={() => decrementCartQuantity(index)} style={{width: "20px", height: '20px', borderRadius: "50px", border: "2px solid black", display: "flex", justifyContent: "center", alignItems: "center"}}>-</button></div>
                                                    <div>
                                                    <input  type="text" className="form-group fw-normal cart-input" min={1} value={cart[index].amount}  style={{width: '30px', height: '20px', fontSize: '16px', marginLeft: '10px', marginRight: '10px', textAlign: "center"}}/>
                                                    </div>
                                                    <div >
                                                    <button onClick={() => incrementCartQuantity(index)} id='cartInput' style={{width: "20px", height: '20px', borderRadius: "50px", border: "2px solid black", display: "flex", justifyContent: "center", alignItems: "center"}}>+</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ width: "80px", marginLeft: '30px'}}>
                                                <h5 className="mb-0">${item.price}</h5>
                                            </div>
                                            <div>
                                                <a onClick={() => removeItem(index)} style={{ color: "#cecece", cursor: 'pointer' }}><i className="fas fa-trash-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    ))}

                            </div>


                            <div className="col-lg-5">
                                <div className="card bg-warning text-white rounded-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h5 className="mb-0">Card details</h5>
                                    <img src={logo} className="img-fluid rounded-3" alt="Logo" style={{width: '40px', height: '35px'}}/>
                                    
                                    </div>
                                    <p className="small mb-2">Card type</p>
                                    <a  type="submit" className="text-white"><i
                                    className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                                    <a href="#!" type="submit" className="text-white"><i
                                    className="fab fa-cc-visa fa-2x me-2"></i></a>
                                    <a href="#!" type="submit" className="text-white"><i
                                    className="fab fa-cc-amex fa-2x me-2"></i></a>
                                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>
                                    <form className="mt-4">
                                    <div className="form-outline form-white mb-4">
                                        <input type="text" className="form-control form-control-lg" 
                                        placeholder="Cardholder's Name" />
                                        <label className="form-label" >Cardholder's Name</label>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input type="text" className="form-control form-control-lg"
                                        placeholder="1234 5678 9012 3457" />
                                        <label className="form-label">Card Number</label>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                        <div className="form-outline form-white">
                                            <input type="text" className="form-control form-control-lg"
                                            placeholder="MM/YYYY" />
                                            <label className="form-label">Expiration</label>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="form-outline form-white">
                                            <input type="password" className="form-control form-control-lg"
                                            placeholder="&#9679;&#9679;&#9679;" />
                                            <label className="form-label">Cvv</label>
                                        </div>
                                        </div>
                                    </div>
                                    </form>
                                    <hr className="my-4" />
                                    <div className="d-flex justify-content-between">
                                    <p className="mb-2">Subtotal</p>
                                    <p className="mb-2">${totalCartPrice}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                    <p className="mb-2">Shipping</p>
                                    <p className="mb-2">$20.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-4">
                                    <p className="mb-2">Total(Incl. taxes)</p>
                                    <p className="mb-2">${totalCartPrice + 20}</p>
                                    </div>
                                    <button type="button" onClick={() => checkOut()} className="btn btn-success btn-block btn-lg">
                                    <div className="d-flex justify-content-between">
                                        <span>{`$${totalCartPrice + 20} Checkout`}<i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                                    </div>
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            </div>
        </div>
    )}
    
</div>
    );
}

export default Home