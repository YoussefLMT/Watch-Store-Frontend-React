import React from 'react'

function Footer() {
    return (
        <>
            <div class="footer d-flex justify-content-around">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="d-flex flex-column">
                                <h5 class="navbar-brand fw-bold fs-2"><span class="text-fo">H</span>S</h5>
                                <p class="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                                    veniam excepturi. Laboriosam doloremque cupiditate animi eius est possimus
                                    saepe quo, deleniti aperiam ad ex enim assumenda rem temporibus error modi?
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="d-flex flex-column text-center mt-5">
                                <h5>Services</h5>
                                <a class="link mt-2" href="#">Activities</a>
                                <a class="link mt-3" href="#">Terms and Conditions</a>
                                <a class="link mt-3" href="#">Privacy Policy</a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="d-flex flex-column text-center mt-5">
                                <h5>Support</h5>
                                <a class="link mt-2" href="#">Contact Us</a>
                                <a class="link mt-3" href="#">Guide</a>
                                <a class="link mt-3" href="#">Help</a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="d-flex flex-column text-center mt-5">
                                <h5>Social Media</h5>
                                <div class="social-media">
                                    <div class="d-flex mt-2">
                                        <span><i class="fa-brands fa-facebook fs-4"></i></span>
                                        <a class="ms-2 link" href="#">Facebook</a>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <span><i class="fa-brands fa-twitter fs-4"></i></span>
                                        <a class="ms-2 link" href="#">Twitter</a>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <span><i class="fa-brands fa-instagram fs-4"></i></span>
                                        <a class="ms-2 link" href="#">Instagram</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center py-auto footer-in">
                <p class="my-auto">All rights are reserved</p>
            </div>
        </>
    )
}

export default Footer