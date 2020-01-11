import React from 'react';

const Services = () => {
    return (
        <div className='services'>
            <h2>Services</h2>
            <h3>We offer a full range of services for small businesses and entrepreneurs.</h3>
            <div>
                <div className='service-div'>
                    <div className='left-column'>
                        <i class="fas fa-globe-americas"></i>
                    </div>
                    <div className='right-column'>
                        <p>Domain Management</p>
                    </div>
                </div>
                <div className='service-div'>
                    <div className='left-column'>
                        <i class="fas fa-server"></i>
                    </div>
                    <div className='right-column'>
                        <p>Hosting</p>
                    </div>
                </div>
                <div className='service-div'>
                    <div className='left-column'>
                        <i class="fas fa-paint-brush"></i>
                    </div>
                    <div className='right-column'>
                        <p>Design</p>
                    </div>
                </div>
                <div className='service-div'>
                    <div className='left-column'>
                        <i class="fas fa-laptop-code"></i>
                    </div>
                    <div className='right-column'>
                        <p>Development</p>
                    </div>
                </div>
                <div className='service-div'>
                    <div className='left-column'>
                        <i class="far fa-file-alt"></i>
                    </div>
                    <div className='right-column'>
                        <p>Form Management</p>
                    </div>
                </div>
                <div className='service-div'>
                    <div className='left-column'>
                        <i class="fas fa-search"></i>
                    </div>
                    <div className='right-column'>
                        <p>Search Engine Optimization</p>
                    </div>
                </div>
                <div className='service-div'>
                    <div className='left-column'>
                        <i class="fas fa-user-friends"></i>
                    </div>
                    <div className='right-column'>
                        <p>Consulting</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;