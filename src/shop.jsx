import React, {useEffect, useRef, useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Swal from 'sweetalert2';

function Shop() {
    useEffect(() => {
        AOS.init({
          duration: 1000
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
        {img: "./src/assets/product/1.jpg",brand: 'Nike', brandDetails: "Nike Gold Space Slim Fit Polo Men's", price: 100, amount: 1},
        {img: "./src/assets/product/2.jpg",brand: 'Nike', brandDetails: "Nike Dry Fit Challenger Short Men's", price: 90, amount: 1},
        {img: "./src/assets/product/3.jpg",brand: 'Nike', brandDetails: "Nike Dry Fit Tight Top Men's", price: 80, amount: 1},
        {img: "./src/assets/product/4.jpg",brand: 'Adidas', brandDetails: "ADIDAS SPORTS PERFORMANCE SWEATER", price: 75, amount: 1},
        {img: "./src/assets/product/5.jpg", brand: 'Adidas', brandDetails: 'ADIDAS ESSENTIALS EMBROIDERED T-SHIRT', price: 80, amount: 1},
        {img: "./src/assets/product/6.jpg", brand: 'Adidas', brandDetails: 'ADIDAS VS PACE SHOES MEN', price: 120, amount: 1},
        {img: "./src/assets/product/7.jpg", brand: 'Adidas', brandDetails: 'ADIDAS CORE BRA W BL BT', price: 40, amount: 1},
        {img: "./src/assets/product/8.jpg", brand: 'Nike', brandDetails: "Nike Quest 4 Running Men's", price: 168, amount: 1},
        {img: "./src/assets/new-arrivals/1.jpg", brand: 'Adidas', brandDetails: "3-STRIPES SPORT TANK TOP WOMEN", price: 100, amount: 1},
        {img: "./src/assets/new-arrivals/2.jpg", brand: 'Adidas', brandDetails: "FACE MASKS FACE COVERS", price: 35, amount: 1},
        {img: "./src/assets/new-arrivals/3.jpg", brand: 'Adidas', brandDetails: "ADIDAS SPORTS SOCKS", price: 20, amount: 1},
        {img: "./src/assets/new-arrivals/4.jpg", brand: 'Danami', brandDetails: "Danami Throne Of Grace Printed Hoodie", price: 125, amount: 1},
        {img: "./src/assets/new-arrivals/5.jpg", brand: 'Jones Wears', brandDetails: "Jones Wears Marshmello Printed Hoodie", price: 105, amount: 1},
        {img: "./src/assets/new-arrivals/6.jpg", brand: 'Protective', brandDetails: "Anti Blue Light Protective Computer Glasses", price: 15, amount: 1},
        {img: "./src/assets/new-arrivals/7.jpg", brand: 'Yemlays', brandDetails: "Yemlays Men's Casual Shoe", price: 120, amount: 1},
        {img: "./src/assets/new-arrivals/8.jpg", brand: 'Yemlays', brandDetails: "Men's Breathable Lace-up Canvas Sneakers", price: 115, amount: 1},
        ];

const [cart, setCart] = useState([]);

function addToCart(index) {
const itemToAdd = storeItems[index];

let isItemAlreadyAdded = cart.some(item => 
item.img === itemToAdd.img &&
item.brand === itemToAdd.brand && 
item.brandDetails === itemToAdd.brandDetails
// item.price === itemToAdd.price
);

if (isItemAlreadyAdded) {
Swal.fire({
    title: 'Unsuccessful',
    text: 'Item exist in cart already',
    icon: 'error',
    confirmButtonText: 'continue'
});
return false;
} else {    setCart([...cart, itemToAdd]);
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

    // to show cart
    const [showPopup, setShowPopup] = useState(false);     

    const togglePopup = () => {
        return setShowPopup(true);
    };

    let cartDisappear = useRef(null);

    const continueShopping = () => {
       
        cartDisappear.current.style.marginTop = "100vw";
        cartDisappear.current.style.transition = "4s ease";

        setTimeout(() => {
           return setShowPopup(false);
        }, 4000);
    }


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
    <div  style={{ width: '100vw' }}>

            {/* navbar and header */}
    <nav className="navbar navbar-expand-lg bg-warning fixed-top" style={{width: '100vw'}} >
  <div className="container">
    <a className="navbar-nav" data-aos="fade-down"><img src="./src/assets/ecommerce.jpg" alt="Logo" id="nav-logo" style={{width: '40px', height: '35px'}}/></a>

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

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-pills gap-3">

        <li data-aos="fade-down" className="nav-item text-center"><a className="nav-link" aria-current="page" ><Link style={{color: "#088178"}} to="/shopping-website/">Home</Link></a></li>

        <li data-aos="fade-down" className="nav-item text-center"><a style={{backgroundColor: "#088178"}} className="nav-link " aria-current="page" ><Link style={{color: "#ffc107"}} to="/shopping-website/shop">Shop</Link></a></li>

        <li data-aos="fade-down" className="nav-item text-center"><a style={{color: "#088178", cursor: 'pointer'}} className="nav-link" aria-current="page" onClick={togglePopup}><i className="fad fa-shopping-cart"></i></a></li>

      </ul>
    </div>
  </div>
</nav>

    {/* shop banner */}
    <section id="hero">
            <h2 data-aos="fade-left" style={{color: "#088178"}}>Look no further, <br /> shop with us</h2>        
            <p data-aos="fade-left">Your One-Stop Shop <br /> for Everything You Need</p>
            <button data-aos="fade-right">Shop Now</button>
        </section>

    {/* product */}
    <section id="product1" className="section-p1">
            <h2>Collections</h2>
            <p>Your One-Stop Shop for Everything You Need.</p>
        
        <div className="product-container">

        {storeItems.map((item, index) => (
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
                        <a onClick={() => addToCart(index)}><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                ))}

            

        </div>
    </section>

    {/* pagination */}
    <section id="pagination" className="section-p1" data-aos="fade-ease-out">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#"><i className="fal fa-long-arrow-alt-right"></i></a>
    </section>

    {/* Newsletter */}
    <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext" data-aos="fade-left">
            <h4>Sign Up For Newsletter</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>

        <div className="newsletter-form" data-aos="fade-right">
            <input type="text" placeholder="Email"/>
            <button className="normal">Sign Up</button>
        </div>
    </section>


{/* footer */}
<footer className="section-p1" id='footer-container'>
            <div className="col" data-aos="fade-right">
                <img className="footerlogo" src="./src/assets/ecommerce.jpg" alt="" style={{width: '40px', height: '35px'}}/>
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
        
            <div className="col" data-aos="fade-ease-out">
                <h4>About</h4>
                <a href="#">About us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact Us</a>            
            </div>
        
            <div className="col" data-aos="fade-ease-out">
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
                    <img src="./src/assets/app store.JPG" alt=""/>
                    <img src="./src/assets/play store.JPG" alt=""/>
                </div>
                <p>Secured Payment Getways</p>
                <img src="./src/assets/payment.JPG" alt=""/>
            </div>
        
            <div className="copyright">
                <p>© {new Date().getFullYear()}, Larry's Tech. HTML & CSS Ecommerce Templates.</p>
            </div>
        </footer>

{/* cart */}
{showPopup && (
        <div className="overlay" ref={cartDisappear} data-aos="fade-up">
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
                                    <i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping
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
                                    <div className="card mb-3 p-4" key={index}>
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
                                            <div className='flex-sm-row' style={{ width: "50px" }}>
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
                                    <img src="./src/assets/ecommerce.jpg" className="img-fluid rounded-3" alt="Logo" style={{width: '40px', height: '35px'}}/>
                                    
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



<Outlet />
        </div>
    );
}

export default Shop;
