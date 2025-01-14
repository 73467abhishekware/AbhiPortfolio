import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import AboutMe from './AboutMe';
import EducationExperience from './EduAndExp';
import App from '../App';
import Me from './Me';
import ProjectsSection from './ProjectsSection';
import Categories from './Categories';
import JavaProject from './JavaProject';
import ContactMe from './ContactMe';
import Footer from './Footer';

const customRounter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/aboutMe',
                element: <AboutMe />
            },
            {
                path: '/educationexperience',
                element: <EducationExperience />
            },
            {
                path: '/me',
                element: <Me />
            },
            {
                path: '/project',
                element: <ProjectsSection />
            },
            {
                path: '/categories',
                element: <Categories />
            },
            {
                path: '/java',
                element: <JavaProject />
            },
            {
                path: '/contactMe',
                element: <ContactMe />
            },
            {
                path: '/footer',
                element: <Footer />
            },
        ]
    }
]);

export default customRounter;

      