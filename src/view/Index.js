
import '../css/style.css'
import image1 from '../images/1.webp';
import image2 from '../images/2.webp';
import image3 from '../images/7.jpg';
import Card from "../components/Card";
import image4 from "../images/8.webp";
import image5 from '../images/10.webp';
import Form from '../components/Form'
function Index() {
     return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6" id='section1'>
                        <img src={image1} className="img-fluid"></img>
                    </div>
                    <div className='col-md-6 text-center section1'>
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="display-1">Ayush Suyal</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h6 className="display-6">React Developer</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 ">
                                <button type="button" 
                                href='#section7'
                                className="btn btn-dark btnn">Reach out</button>
                            </div>
                        </div>


                    </div>
                </div>
                {/* section 1 ends  */}
                <div className="row my-3" id="row2">
                    <div className="col-md-6 section2 text-center">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="display-1">About Me</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="">“I’m a software developer who has been working in the field for eight years. I’m passionate about creating quality products that meet all of the customer’s needs, and I love learning new techniques and technologies that allow me to make that happen.”</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={image2} className="img-fluid" />
                    </div>
                </div>

                {/* section 2 ends */}
                <div className="row" id='section3'>
                    <div className="col-md-4 text-center section3">
                        <h1 className="display-1">Experience</h1>
                        <h1 className="display-1">&Education</h1>
                    </div>
                    <div className="col-md-8  section3r">
                        <div className="row">
                            <div className="col-md-4">
                                <h5 className="h5 text-center">2022</h5></div>
                            <div className="col-md-8">
                                <h5 className="h5 ">SOFTWARE DEVELOPER</h5>
                                <p>EXTROVERT INFORMATION TECHNOLOGIES</p>
                                <p>I joined as a Full Stack Developer.I learn about multiple technologies while working in the company and applied those technologies in the multiple projects to built </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 ">
                                <h5 className="h5 text-center">2022</h5></div>
                            <div className="col-md-8">
                                <h5 className="h5">SOFTWARE DEVELOPER</h5>
                                <p>EXTROVERT INFORMATION TECHNOLOGIES</p>
                                <p>I joined as a Full Stack Developer.I learn about multiple technologies while working in the company and applied those technologies in the multiple projects to built </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <h5 className="h5 text-center">2022</h5></div>
                            <div className="col-md-8">
                                <h5 className="h5">SOFTWARE DEVELOPER</h5>
                                <p>EXTROVERT INFORMATION TECHNOLOGIES</p>
                                <p>I joined as a Full Stack Developer.I learn about multiple technologies while working in the company and applied those technologies in the multiple projects to built </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section 3 ends */}
                <div className="row" id='section4'>
                    <div className="col-md-6">
                        <h4 className="display-4">
                            Skills&
                        </h4>
                        <h4 className="display-4">
                            Proficiencies
                        </h4>

                        <h5 className="margin-y">TECHNICAL SKILLS</h5>
                        <p>HTML,CSS,JAVASCRIPT,BOOTSTRAP,REACTJS</p>
                        <div className="progress">
                            <div className="progress-bar w-75 bg-secondary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p>HTML,CSS,JAVASCRIPT,BOOTSTRAP,REACTJS</p>
                        <div className="progress">
                            <div className="progress-bar w-75 bg-secondary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5 className="margin-yy">TECHNICAL SKILLS</h5>
                        <p>HTML,CSS,JAVASCRIPT,BOOTSTRAP,REACTJS</p>
                        <div className="progress">
                            <div className="progress-bar w-75 bg-secondary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p>HTML,CSS,JAVASCRIPT,BOOTSTRAP,REACTJS</p>
                        <div className="progress">
                            <div className="progress-bar w-75 bg-secondary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>

                {/* section 4 ends  */}

                {/* section 5 start */}
                <div className="row" id="section5">
                    <div className="col-md-12 ">
                <div className="row" >
                    <div className="col-md-12 text-center"><h1 className="display-1">Sample Work</h1></div><div className="col-md-12"></div>
                </div>
                <div className="row text-center row5">
                    <div className="col-md-3 col-sm-12 my-3 ">
                        <Card image={image3} />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 col-sm-12 my-3">
                    <Card image={image3} />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 col-sm-12 my-3">
                    <Card image={image3} />
                    </div>

                </div>
                </div>
                </div>

                {/* section 5 ends  */}

                {/* section 6 starts */}

                <div className="row">
                    <div className="col-md-12">
                        <img src={image4} alt='this is image' className="img-fluid" />
                    </div>
                </div>

                {/* section 6 ends  */}

                {/* section 7 starts  */}
                <div className="row" id='section7'>
                <div className="col-md-6">
                    <img src={image5} className="img-fluid"/>
                </div>
                <div className="col-md-4" id='formm'>
                    <Form className="center"/>
                </div>
            </div>
            </div>
        </>
    );
}
export default Index;