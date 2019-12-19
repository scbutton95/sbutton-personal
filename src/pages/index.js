import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  thesisLink = "https://dataspace.princeton.edu/jspui/handle/88435/dsp01ft848t351";
  sortingLink = "https://sbutton-sorting.herokuapp.com/";
  pathfindingLink = "https://sbutton-pathfinding.herokuapp.com/";
  newsLink = "https://sbutton-news.herokuapp.com/";
  githubLink = "https://github.com/scbutton95";

  render() {
    return (
      <Layout>
        <SEO title="Home"/>
        <section className="page-section bg-primary" id="resume">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 ">
                <h5 className=" mt-0 resume-section">From a strong foundation in computer science and technical analysis</h5>
                <hr className="divider light my-4"/>
                <ul class="list-unstyled">
                  <p className="d-flex resume-item">Educated in programming and computer science theory at Princeton University</p>
                  <li className="resume-detail">
                  <div className="resume-checkmark">&#10003;</div><div className="resume-inline-block">Earned Degree in Operations Research and Financial Engineering</div>
                  </li>
                  <li className="resume-detail">
                  <div className="resume-checkmark">&#10003;</div><div className="resume-inline-block">Earned Certificate in Computer Science</div>
                  </li>
                </ul>
                <ul class="list-unstyled">
                  <p className="d-flex resume-item">Experienced technically and professionally through banking at Barclays Capital</p>
                  <li className="resume-detail">
                  <div className="resume-checkmark">&#10003;</div><div className="resume-inline-block">Executed 20+ deals and led technical side of transactions, including process management and product delivery</div>
                  </li>
                  <li className="resume-detail">
                  <div className="resume-checkmark">&#10003;</div><div className="resume-inline-block">Educated 5+ clients on esoteric structured products, demonstrating deep understanding of complex concepts</div>
                  </li>
                </ul>
                <div className="button-container">
                  <a className="btn js-scroll-trigger resume-button" href="#projects"
                      onClick={Scroller.handleAnchorScroll}>Development Projects!</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="projects">
          <div className="container">
            <h5 className="project-section mt-0">Demonstrating ability through personally motivated projects and study</h5>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                <a target="_blank" rel="noopener noreferrer" href={this.pathfindingLink}><i className="fas fa-4x fa-wave-square text-primary mb-4"></i></a>
                  <h3 className="h4 mb-2">Pathfinding Algorithm Visualizer</h3>
                  <a className="text-muted mb-0" target="_blank" rel="noopener noreferrer" href={this.pathfindingLink}>An application for finding a path from A to B - React&nbsp;/&nbsp;Node</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <a target="_blank" rel="noopener noreferrer" href={this.newsLink}><i className="fas fa-4x fa-newspaper text-primary mb-4"></i></a>
                  <h3 className="h4 mb-2">Queryable News Digest</h3>
                  <a className="text-muted mb-0" target="_blank" rel="noopener noreferrer" href={this.newsLink}>A news digest pulling custom content from NewsAPI.org - Go</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                <a target="_blank" rel="noopener noreferrer" href={this.sortingLink}><i className="fas fa-4x fa-chart-bar text-primary mb-4"></i></a>
                  <h3 className="h4 mb-2">Sorting Algorithm Visualizer</h3>
                  <a className="text-muted mb-0" target="_blank" rel="noopener noreferrer" href={this.sortingLink}>An application for simple sort of an array - React&nbsp;/&nbsp;Node</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <a target="_blank" rel="noopener noreferrer" href={this.thesisLink}><i className="fas fa-4x fa-car text-primary mb-4"/></a>
                  <h3 className="h4 mb-2">A Future for American Mobility</h3>
                  <a className="text-muted mb-0" target="_blank" rel="noopener noreferrer" href={this.thesisLink}>Princeton Thesis on network optimization - Matlab&nbsp;/&nbsp;Bash</a>
                </div>
              </div>
                <div className="button-container col-lg-12">
                  <a className="btn project-button" target="_blank" rel="noopener noreferrer" href={this.githubLink}>View on Github</a>
                </div>
            </div>
          </div>
        </section>

        {/* <section id="projects">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="images/portfolio/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                  <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                  <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
            <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">Download Now!</a>
          </div>
        </section> */}

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Connect!</h2>
                <hr className="divider my-4"/>
                <p className=" mb-5">I am looking for opportunities to build a career in 
                software engineering at a company that creates positive change through smart engineering.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 "></i>
                <div>+1 (973) 975-8660</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3"></i>
                <a className="d-block" id="email-link" href="mailto:sbutton@alumni.princeton.edu">sbutton@alumni.princeton.edu</a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
