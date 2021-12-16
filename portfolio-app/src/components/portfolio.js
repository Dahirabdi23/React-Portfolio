import React, { useState } from 'react';
import NavTabs from './NavTab';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    const headerStyle = {
        backgroundColor: "lightgrey",
        fontweight: "bold" 
    }

    const navStyle={
        color: "blue"
    }
    return (
        <div>
            <header style={headerStyle}>
                <h1>Dahir</h1>
                {/* We are passing the currentPage from state and the function to update it */}
                <NavTabs style={navStyle} currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
            {/* Footer Component  */}
        </div>
    );
}