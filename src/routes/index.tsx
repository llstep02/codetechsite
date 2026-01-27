import App from '../App'
import HomePage from './../pages/HomePage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ServicesPage from './../pages/ServicesPage'
import ServiceDetailPage from './../pages/ServiceDetailPage'
import ProjectsPage from './../pages/ProjectsPage'
import ProjectDetailPage from './../pages/ProjectDetailPage'
import FAQPage from './../pages/FAQPage'
import TeamPage from './../pages/TeamPage'
import ContactPage from './../pages/ContactPage'
import BlogsPage from './../pages/BlogsPage'
import BlogDetailPage from './../pages/BlogDetailPage'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} >
                    <Route index element={<HomePage />} />
                    <Route path="services" element={<ServicesPage />} />
                    <Route path="services/:id" element={<ServiceDetailPage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="projects/:id" element={<ProjectDetailPage />} />
                    <Route path="faq" element={<FAQPage />} />
                    <Route path="team" element={<TeamPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="blog/">
                        <Route index element={<BlogsPage />} />
                        <Route path=":id" element={<BlogDetailPage />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}