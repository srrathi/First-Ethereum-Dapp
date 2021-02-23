import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-light text-center text-white">
            {/* <!-- Grid container --> */}
            <div className="container p-4 pb-0">
                {/* <!-- Section: Social media --> */}
                <section className="mb-4">
                    {/* <!-- Facebook --> */}
                    {/* <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#3b5998" }}
                        href="#!"
                        target="_blank"
                        role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a> */}

                    {/* <!-- Twitter --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#55acee" }}
                        href="https://twitter.com/SitaramRathi5?s=20"
                        target="_blank"
                        role="button"
                    ><i className="fab fa-twitter"></i
                    ></a>

                    {/* <!-- Google --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#dd4b39" }}
                        href="mailto:sitaramrathi2000@gmail.com"
                        target="_blank"
                        role="button"
                    ><i className="fas fa-envelope-square"></i></a>

                    {/* <!-- Instagram --> */}
                    {/* <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#ac2bac" }}
                        href="#!"
                        target="_blank"
                        role="button"
                    ><i className="fab fa-instagram"></i
                    ></a> */}

                    {/* <!-- Linkedin --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#0082ca" }}
                        href="https://linkedin.com/in/sitaram-rathi-519152197/"
                        target="_blank"
                        role="button"
                    ><i className="fab fa-linkedin-in"></i
                    ></a>
                    {/* <!-- Github --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#333333" }}
                        href="https://github.com/srrathi"
                        target="_blank"
                        role="button"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>
                {/* <!-- Section: Social media --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-3 bg-dark shadow" target="_blank" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2021 Copyright: Sitaram Rathi<div>

                </div>
                <a className="text-white" href="https://github.com/srrathi">@srrathi</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
    )
}

export default Footer
