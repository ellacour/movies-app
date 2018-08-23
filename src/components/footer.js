import React from 'react'

const CustomFooter = () => {
  return(
<footer className="page-footer font-small indigo">

    <div className="container">

      <div className="row text-center d-flex justify-content-center pt-5 mb-3">

        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold custom-link">
            <a href="https://www.linkedin.com/in/marion-gobin-ab5519137">About us</a>
          </h6>
        </div>
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold custom-link">
            <a href="mailto:someone@yoursite.com?subject=Mail from Our Site">Contact</a>
          </h6>
        </div>
      </div>
      <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
        <div className="col-md-8 col-12 mt-5">
          <p line-height="1.5rem">Projet réalisé et personnalisé dans le cadre de ma formation à React et Redux,<br/>
          <a href="https://github.com/RobinLebhar/ReactMovies">basé sur un projet existant</a> de Robin Lebhar.</p>
        </div>

      </div>
    </div>
    <div className="footer-copyright text-center py-3">
      <a className="custom-link" href="https://www.linkedin.com/in/marion-gobin-ab5519137"> Marion GOBIN</a>
    </div>
  </footer>
  );
}

export default CustomFooter;