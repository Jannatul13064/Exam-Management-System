import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Slider = () => {
    const navigate = useNavigate();
    const handleHomeRegButton = () => {
        navigate('/registration')
    }
    return (

        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4900">
                    <img src="https://media-exp1.licdn.com/dms/image/C561BAQGDfHTOp4ZSOQ/company-background_10000/0/1600930180447?e=2147483647&v=beta&t=D2VQIU583WDM9vSjfyZm4VeO6DqAPE9-beKOWVKEL_k" className="d-block w-100" alt="..." />
                    <div className='position-absolute top-50 start-50 translate-middle'>
                        <span className='align-center'>
                            <button className='btn btn-danger btn-lg' onClick={handleHomeRegButton}>Register to Exam Managment System</button>
                        </span>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3500">
                    <img src="https://venue.daffodilvarsity.edu.bd/images/img/1.JPG" className="d-block w-100" alt="..." />

                </div>
                <div className="carousel-item">
                    <img src="https://daffodilvarsity.edu.bd/template/images/social-share/bg4.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Slider;