import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div className='w-75 mx-auto'>
            <h2 className='text-center'>Terms And Conditions</h2>
            <p>Amet consectetur adipisicing elit. Quia modi et reiciendis neque ex quod dignissimos at blanditiis unde, porro consequuntur facere, possimus dolore sit eligendi autem reprehenderit accusamus? Exercitationem.</p>

            <p>Debitis ratione iure dolore aspernatur, fugiat quisquam distinctio culpa nobis illum adipisci pariatur reiciendis id magnam cumque beatae eaque quia sapiente. Magni praesentium, et consequuntur repellendus minima quibusdam perferendis asperiores aut nostrum, aspernatur beatae laborum saepe pariatur numquam architecto cupiditate fuga mollitia rem sunt? Eum autem unde voluptatibus culpa excepturi saepe commodi iusto veritatis, aliquam neque, maiores odit assumenda porro alias blanditiis sequi exercitationem molestias. Fuga placeat eveniet omnis pariatur doloribus quam possimus, rem, vel perspiciatis non culpa totam, in laboriosam. Ex nobis maxime cupiditate, inventore dolore iure dolor quisquam. Iste, laudantium.</p>

            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;