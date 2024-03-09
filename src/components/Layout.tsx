import React, { ReactNode, useState } from 'react';
import NavItem from './NavItem'; // Update the import path if necessary
import BasicMenu from './BasicMenu';

interface LayoutProps {
    children: ReactNode; // Define children as ReactNode type
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <BasicMenu>
        </BasicMenu>
        <div className="bg-gray-100">
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="/" className="text-white font-bold text-lg">Next.js App</a>
                    <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:space-x-8 md:items-center`}>
                        <NavItem href="/">Home</NavItem>
                        <NavItem href="/about">About</NavItem>
                        <NavItem href="/services">Services</NavItem>
                        <NavItem href="/account">Account</NavItem>
                        <NavItem href="/contact">Contact</NavItem>
                    </ul>
                </div>
            </nav>
            <div className="container mx-auto mt-8">
                {children}
            </div>
        </div></>
    );
};

export default Layout;
