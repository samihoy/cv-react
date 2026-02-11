import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './style.css';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CVPage from './CVPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import NotFoundPage from './NotFoundPage';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cv" element={<CVPage />} />
      <Route path="/project" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);