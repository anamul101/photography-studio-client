import React from 'react';

const Featured = () => {
    return (
        <>
            <h1 className='text-5xl text-center text-orange-600 mt-12'>Featured Weddings</h1>
            <div className='grid lg:grid-cols-3 gap-8 mx-20 my-12'>
                <div>
                    <img src="https://www.lukebellphotography.co.uk/wp-content/uploads/2022/10/Cliveden-House-Wedding-Photography-354x200.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.lukebellphotography.co.uk/wp-content/uploads/2021/10/NoMad-Hotel-London-Wedding-Photography-2-354x200.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.lukebellphotography.co.uk/wp-content/uploads/2022/07/GRANTLEY-HALL-WEDDING-PHOTOGRAPHY-354x200.jpg" alt="" />
                </div>   
                <div>
                    <img src="https://www.lukebellphotography.co.uk/wp-content/uploads/2021/11/Maverick-Projects-Brunswick-House-Wedding-354x200.jpg" alt="" />
                </div>   
                <div>
                    <img src="https://www.lukebellphotography.co.uk/wp-content/uploads/2022/06/Elegant-Savile-Club-Wedding-354x200.jpg" alt="" />
                </div>   
                <div>
                    <img src="https://www.lukebellphotography.co.uk/wp-content/uploads/2021/12/Wilderness-Reserve-Wedding-Photography-354x200.jpg" alt="" />
                </div>   
            </div>
        </>
    );
};

export default Featured;