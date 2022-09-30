import React from 'react';

export default function Footer(props) {
    let { } = props;

    return (
        <>
            <footer className="containerfluid p-0">
                <section className="row f1 m-0 flex-wrap olxApp">
                    <div className="cont1 col-lg-4">
                        <img src="./images/olxMobileApp.webp" alt="" />
                    </div>
                    <div className="cont2 my-5 px-5 col-lg-4">
                        <h3 className="font-weight-bold">
                            TRY THE OLX APP
                        </h3>
                        <p>
                            Buy, sell and find just about anything using the App on your mobile.
                        </p>
                    </div>
                    <div className="cont3 py-5 pl-5 col-lg-4 yourApp">
                        <p className="font-weight-bold head">GET YOUR APP TODAY</p>
                        <a href="#"><img src="./images/iconAppStore.svg" alt="" /></a>
                        <a href=""><img src="./images/iconGooglePlay.svg" alt="" /></a>
                        <a href=""><img src="./images/iconAppGallery.svg" alt="" /></a>
                    </div>
                </section>


                <section className="d-flex f2">
                    <div className="d-flex justify-content-between py-3 px-5 col-lg-8 col-md-8 col-sm-12 lists flex-wrap">
                        <ul className="list-unstyled">
                            <li className="font-weight-bold mb-1 head">POPULAR CATEGORIES</li>
                            <li><a href="">Cars</a></li>
                            <li><a href="">Flats for rent</a></li>
                            <li><a href="">Mobile Phones</a></li>
                            <li><a href="">Jobs</a></li>
                        </ul>
                        <ul>
                            <li className="font-weight-bold mb-1 head">TRENDING SEARCHES</li>
                            <li><a href="">Bikes</a></li>
                            <li><a href="">Watches</a></li>
                            <li><a href="">Books</a></li>
                            <li><a href="">Dogs</a></li>
                        </ul>
                        <ul>
                            <li className="font-weight-bold mb-1 head">ABOUT US</li>
                            <li><a href="">About EMPG</a></li>
                            <li><a href="">OLX Blog</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">OLX for Businesses</a></li>
                        </ul>
                        <ul>
                            <li className="font-weight-bold mb-1 head">OLX</li>
                            <li><a href="">Help</a></li>
                            <li><a href="">Sitemap</a></li>
                            <li><a href="">Terms of use</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-0 follow">
                    </div>

                    <div className="col-lg-3 d-flex flex-column justify-content-between col-lg-1 follow">
                        <section>
                            <p className="font-weight-bold pt-3 head">Follow Us</p>
                            <ul className="d-flex icons m-0 p-0">
                                <li><a href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href=""><i className="fa-solid fa-play"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </section>
                        <section className="mb-4 justify-content-around">
                            <a href=""><img className="w-25" src="./images/iconAppStore.svg" alt="" /></a>
                            <a href=""><img className="w-25" src="./images/iconGooglePlay.svg" alt="" /></a>
                            <a href=""><img className="w-25" src="./images/iconAppGallery.svg" alt="" /></a>
                        </section>
                    </div>

                </section>

                <section class="m-0 py-3 px-4 d-flex justify-content-end lastbox">
            <p class="font-weight-bold m-0 p-1">
                Free Classifieds in Pakistan
            </p>
            <p class="m-0 p-1">
                . &copy; 2006-2022 OLX
            </p>
        </section>
            </footer>
        </>
    )
}