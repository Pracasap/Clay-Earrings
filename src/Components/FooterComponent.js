import React from 'react'

function Footer() {
    return (
        <footer className="site-footer p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 copyright">
                        <h6>© 2021 Copyrights ForeverCreating.com</h6>
                    </div>
                    <div className="col-md-6 social-links d-flex justify-content-end align-items-end">
                        <a href="https://www.facebook.com/forevercreating" target="_blank" rel="noreferrer">
                        <span className="footer-icon"><ion-icon name="logo-facebook" /></span>
                        </a>&#8194;
                        <a href="http://instagram.com/forevercreating" target="_blank" rel="noreferrer">
                        <span className="footer-icon"><ion-icon name="logo-instagram" /></span>
                        </a>&#8194;
                        <a href="http://twitter.com/forevercreating" target="_blank" rel="noreferrer">
                        <span className="footer-icon"><ion-icon name="logo-twitter" /></span>
                        </a>&#8194;
                        <a href="mailto:forevercreating@gmail.com" target="_blank" rel="noreferrer">
                        <span className="footer-icon"><ion-icon name="mail" /></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;