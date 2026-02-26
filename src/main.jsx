import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import './CSS/shared.css'

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CVPage from './CVPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import AIMePage from './AIMePage';
import Blogg from './blogg';
import NotFoundPage from './NotFoundPage';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cv" element={<CVPage />} />
      <Route path="/project" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/ai-me" element={<AIMePage />} />
      <Route path="/blogg" element={<Blogg />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);