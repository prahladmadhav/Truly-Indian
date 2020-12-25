import React from 'react'

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <div className="carousel-main-container-home-page">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src="https://scontent.fbom19-1.fna.fbcdn.net/v/t1.0-0/s600x600/132000935_3525187900870489_6621156467161379934_o.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=CB-5d54ZwfsAX_FD3tC&_nc_ht=scontent.fbom19-1.fna&tp=7&oh=cb567883348d0ef195d4c853c4dfcbc3&oe=6009EC1D" 
                            alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="https://scontent.fbom19-2.fna.fbcdn.net/v/t1.0-0/s600x600/131986216_3525187844203828_2040670071962080388_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_ohc=PtWZmfECfTYAX_RRgOn&_nc_ht=scontent.fbom19-2.fna&tp=7&oh=17bf0d60180242abb558af8989153fd3&oe=600AD902" 
                            alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="https://scontent.fbom19-2.fna.fbcdn.net/v/t1.0-0/s600x600/131987116_3525187757537170_5706816006873818650_o.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_ohc=tzJRn1CXfaMAX9_Eh9H&_nc_ht=scontent.fbom19-2.fna&tp=7&oh=863a786c1809ed612cbfaf12136ad67a&oe=60098007" 
                            alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
        
    )
}

export default Home
