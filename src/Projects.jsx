import { useState } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/mystyle.css";

import cbt_image from "./Images/cbt_image.png";
import chat_img from "./Images/chat.jpg";
import ecommerce from "./Images/ecommerce.png";
import blog from "./Images/blog.png";
import stripe_dashboard from "./Images/stripe_dashboard.png";    
import vibestream from "./Images/vibestream.png";
import expenses from "./Images/expenses.png"; 
import award from "./Images/award.png"; 
import habit_tracker from "./Images/habit_tracker.png"; 
import personal_inventory from "./Images/personal_inventory.png"; 
import hayzed_blog_api from "./Images/blog_django_api.png"; 
import multitenant_saas from "./Images/multitenant-saas.png"; 
import tradetalk from "./Images/tradetalk.png";

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("mobile");

  const categories = [
    { id: "mobile", label: "Mobile Apps 📱" },
    { id: "backend", label: "Backend Engines ⚙️" },
    { id: "web", label: "Frontend & Fullstack Web 🌐" }
  ];

  const projects = [
    {
      id: 14,
      category: "mobile",
      title: "TradeTalk Real-Time Chat & Business App",
      desc: "A feature-rich real-time communication platform built with React Native and Supabase backend. It features instant direct messaging, live online presence & typing indicators, voice note recording & audio playback, dynamic light/dark theme switching, full-text message search, push notifications with Firebase FCM/Expo, and user blocking & moderation workflows.",
      img: tradetalk,
      demoLink: null,
      githubLink: "https://github.com/hayZedTech/TradeTalk",
      languages: ["React Native", "Expo", "TypeScript", "Supabase", "Firebase FCM", "AsyncStorage", "Context API"]
    },
    {
      id: 11,
      category: "mobile",
      title: "Personal Inventory",
      desc: "A smart cloud-based pantry management system. It features a high-speed barcode scanner that integrates with the Open Food Facts API and a custom Appwrite backend. It includes intelligent 'already-in-stock' detection, automated expiry date tracking with urgent alerts, and real-time inventory synchronization across devices.",
      img: personal_inventory,
      demoLink: null,
      githubLink: "https://github.com/hayzedTech/Personal-Inventory",
      languages: ["React Native", "Expo", "TypeScript", "Appwrite", "Barcode Scanner", "Context API"]
    },
    {
      id: 10,
      category: "mobile",
      title: "Momentum Habit Tracker",
      desc: "A high-performance mobile application designed for consistency. It features secure authentication, real-time data synchronization via Appwrite WebSockets, and dynamic progress analytics using interactive charts. Built with a focus on fluid UX and native performance.",
      img: habit_tracker,
      demoLink: null,
      githubLink: "https://github.com/hayzedTech/Habit_Tracker_App",
      languages: ["React Native", "Expo", "TypeScript", "Appwrite", "React Native Paper", "Chart Kit"]
    },
    {
      id: 12,
      category: "backend",
      title: "Hayzed Blog API Engine",
      desc: "A production-grade, highly secure backend infrastructure built using Django REST Framework. Features robust stateless JWT session management, custom object-level authorizations (IsAuthorOrReadOnly), optimized relational database processing eliminating N+1 queries, automated OpenAPI 3.0 specs with detailed interactive Swagger documentation routing, and Gunicorn web workers behind WhiteNoise compression utilities.",
      img: hayzed_blog_api,
      demoLink: null,
      docsLink: "https://django-blog-cyxr.onrender.com/api/docs/swagger/",
      githubLink: "https://github.com/hayZedTech/django-blog", 
      languages: ["Python", "Django", "DRF", "PostgreSQL", "JWT Auth", "drf-spectacular", "Gunicorn", "WhiteNoise"]
    },
    {
      id: 13,
      category: "backend",
      title: "Multi-Tenant SaaS B2B Inventory API",
      desc: "An enterprise-grade headless commerce backend featuring strict row-level tenant isolation via thread-local middleware and a custom database query manager. Includes a high-concurrency order engine protected by PostgreSQL pessimistic locks (SELECT FOR UPDATE) to prevent race conditions, and an asynchronous processing tier using Celery and Redis to handle bulk CSV reporting and automated webhook dispatch systems.",
      img: multitenant_saas,
      demoLink: null,
      docsLink: "https://multitenant-saas-byx3.onrender.com/api/v1/docs/",
      githubLink: "https://github.com/hayZedTech/multitenant-saas",
      languages: ["Python", "Django", "DRF", "PostgreSQL", "Celery", "Redis", "JWT Auth", "drf-spectacular"]
    },
    {
      id: 1,
      category: "web",
      title: "Real-Time Chat Application",
      desc: "A lightweight and fully featured real-time chat application built with React for the frontend, Node.js + Express for the backend, and PostgreSQL for data storage. It includes features such as real-time messaging with Socket.IO (both public and private), optimistic UI updates for instant feedback, message delivery and read receipts, inline reply and message editing/deleting, emoji reactions, file and image uploads with previews and progress tracking, and voice note recording and playback.",
      img: chat_img,
      demoLink: "https://chat-realtime-front.vercel.app/",
      githubLink: "https://github.com/hayZedTech/chat-frontend",
      languages: ["React", "Node.js", "Express.js", "PostgreSQL", "Socket.IO", "Bootstrap", "Axios"]
    },
    {
      id: 2,
      category: "web",
      title: "Expense Management Dashboard",
      desc: "A responsive expense tracking dashboard built with React, TypeScript, and Supabase. Features include CRUD operations for budgets and expenses, category-based charts using Recharts, and smooth UI interactions with Framer Motion and SweetAlert2.",
      img: expenses,
      demoLink: "https://expenses-tracker-swart-eight.vercel.app/",
      githubLink: "https://github.com/hayZedTech/expenses-tracker",
      languages: ["React", "TypeScript", "Supabase", "Recharts", "Framer Motion", "SweetAlert2", "Tailwind CSS", "Zustand"]
    },
    {
      id: 3,
      category: "web",
      title: "Computer Based Testing (App 2)",
      desc: "A computer-based testing (CBT) platform designed for conducting online exams. Built with PHP and PostgreSQL for backend management, JavaScript and jQuery for interactive features, and Bootstrap for layout.",
      img: cbt_image,
      demoLink: "https://hayzed-exam.onrender.com",
      githubLink: "https://github.com/hayZedTech/hayzed-exam",
      languages: ["PHP", "PostgreSQL", "JavaScript", "JQuery", "Bootstrap", "CSS"]
    },
    {
      id: 4,
      category: "web",
      title: "E-Commerce Digital Storefront",
      desc: "A fully functional ecommerce website where users can browse products, add to cart, and purchase online. Built with PHP and MySQL for backend, Bootstrap and jQuery for frontend interactivity.",
      img: ecommerce,
      demoLink: "https://jimmarof.com",
      githubLink: "https://github.com/hayZedTech",
      languages: ["PHP", "MySQL", "JavaScript", "JQuery", "Bootstrap"]
    },
    {
      id: 5,
      category: "web",
      title: "Dynamic Content Blog Platform",
      desc: "A dynamic blog platform allowing users to read and interact with published articles. Developed using PHP and MySQL for backend content management, Bootstrap for design, and jQuery + JavaScript for interactivity.",
      img: blog,
      demoLink: "https://jimmarof.com/jimmarof_blog/index.php",
      githubLink: "https://github.com/hayZedTech",
      languages: ["PHP", "MySQL", "JavaScript", "JQuery", "Bootstrap"]
    },
    {
      id: 6,
      category: "web",
      title: "Multi-Tenant SaaS Billing System",
      desc: "Developed a full-featured multi-tenant SaaS dashboard with subscription management and Stripe integration. Implements role-based access control, real-time project management, and secure API endpoints.",
      img: stripe_dashboard,
      demoLink: "https://saas-billing-frontend.vercel.app",
      githubLink: "https://github.com/hayZedTech/saas-billing-frontend",
      languages: ["React", "Node.js", "Express.js", "PostgreSQL", "Stripe API", "Bootstrap"]
    },
    {
      id: 7,
      category: "web",
      title: "Realtime Vibestream App",
      desc: "A real-time social media platform with private and group chat, instant notifications, and conversation management. Integrated Socket.io for real-time messaging and MongoDB for scalable data storage.",
      img: vibestream,
      demoLink: "https://vibestream-frontend-beige.vercel.app/",
      githubLink: "https://github.com/hayZedTech/vibestream-frontend",
      languages: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Bootstrap"]
    },
    {
      id: 8,
      category: "web",
      title: "Elite Award Nomination System",
      desc: "A sophisticated real-time voting platform featuring a secure administrative dashboard, live result tallying with automated tie-detection, and a high-fidelity 'glowing' light UI designed for prestigious ceremonies.",
      img: award,
      demoLink: "https://awards-theta-eight.vercel.app/",
      githubLink: "https://github.com/hayZedTech/awards",
      languages: ["React", "Supabase", "Tailwind CSS", "Lucide React", "SweetAlert2"]
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const filteredProjects = projects.filter((p) => p.category === activeTab);

  return (
    <>
      <section className=" py-5 min-vh-100" style={{backgroundColor:"#fff"}}>
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <h2 className="text-dark fw-bold position-relative d-inline-block pb-2">
              EXPERT PORTFOLIO ARCHITECTURE
              <span 
                className="position-absolute bottom-0 start-50 translate-middle-x bg-info rounded" 
                style={{ height: "4px", width: "60px" }}
              ></span>
            </h2>
            <p className="text-muted mt-2">Explore targeted engineering builds sorted by platform domains</p>
          </div>

          {/* Navigation Category Tabs */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {categories.map((tab) => (
              <button
                key={tab.id}
                className={`btn px-4 py-2 rounded-pill fw-bold transition-all shadow-sm ${
                  activeTab === tab.id 
                    ? "btn-info text-dark shadow animate-pulse" 
                    : "btn-outline-secondary bg-white text-secondary"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Animated Responsive Grid Array */}
          <motion.div layout className="row g-4 justify-content-center">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <div key={project.id} className="col-12 col-md-6 col-lg-4 d-flex">
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="card border-0 w-100 h-100 flex-column overflow-hidden bg-white custom-project-card"
                    style={{ 
                      borderRadius: "16px", 
                      cursor: "pointer",
                      boxShadow: "0 10px 20px 5px rgba(0,0,0,0.4), 0 4px 16px -8px rgba(0,0,0,0.4)"
                    }}
                    onClick={() => openModal(project)}
                    whileHover={{ 
                      y: -8, 
                      boxShadow: "0 20px 35px -10px rgba(0,0,0,0.18), 0 6px 20px -6px rgba(0,0,0,0.1)",
                      transition: { duration: 0.2 } 
                    }}
                  >
                    {/* Project Image Frame Layout */}
                    <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-100 h-100 object-cover"
                        style={{ objectFit: "cover" }}
                      />
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className="badge bg-dark bg-opacity-75 backdrop-blur px-3 py-2 rounded-pill small">
                          ID: #{project.id}
                        </span>
                      </div>
                    </div>

                    {/* Card Description Data Segment */}
                    <div className="card-body p-4 d-flex flex-column flex-grow-1">
                      <h5 className="card-title text-dark fw-bold mb-2 text-truncate-2">
                        {project.title}
                      </h5>
                      <p className="card-text text-secondary small flex-grow-1 mb-4 line-clamp-3">
                        {project.desc.length > 140
                          ? project.desc.slice(0, 140) + "..."
                          : project.desc}
                      </p>

                      {/* Chip Micro-Tags Mapping Component */}
                      <div className="d-flex flex-wrap gap-1 mb-3 overflow-hidden" style={{ maxHeight: "64px" }}>
                        {project.languages.slice(0, 4).map((lang, idx) => (
                          <span key={idx} className="badge bg-light text-secondary border px-2 py-1 small">
                            {lang}
                          </span>
                        ))}
                        {project.languages.length > 4 && (
                          <span className="badge bg-light text-info border px-2 py-1 small fw-bold">
                            +{project.languages.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="mt-auto pt-3 border-top d-flex align-items-center justify-content-between text-info fw-bold card-footer-action">
                        <span>Inspect System Specs</span>
                        <i className="bi bi-arrow-right-short fs-4"></i>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Details Expansion Modal Workspace */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg" className="portfolio-custom-modal">
        {selectedProject && (
          <>
            <Modal.Header closeButton className="border-0 pb-0">
              <Modal.Title className="fw-bold text-dark px-2 pt-2">
                {selectedProject.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
              <div className="rounded-4 overflow-hidden mb-4 position-relative" style={{ maxHeight: "400px", boxShadow: "0 8px 24px -6px rgba(0,0,0,0.15)" }}>
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="img-fluid w-100 object-cover"
                  style={{ objectFit: "cover", maxHeight: "400px", width: "100%" }}
                />
              </div>
              
              <h6 className="text-muted text-uppercase tracking-wider fw-bold mb-2">Project Overview</h6>
              <p className="text-dark lh-base fs-6 mb-4">{selectedProject.desc}</p>
              
              <hr className="my-4 text-muted" />
              
              <h6 className="text-muted text-uppercase tracking-wider fw-bold mb-3">Core Stack Architecture</h6>
              <div className="d-flex flex-wrap gap-2">
                {selectedProject.languages.map((lang, i) => (
                  <span key={i} className="badge bg-info text-dark px-3 py-2 fs-7 fw-semibold rounded-pill shadow-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </Modal.Body>
            <Modal.Footer className="border-0 p-4 pt-0 d-flex flex-wrap gap-2">
              {selectedProject.demoLink && (
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info flex-grow-1 py-2.5 fw-bold rounded-3 shadow-sm transition-all text-dark"
                >
                  🚀 Launch Live App
                </a>
              )}
              {selectedProject.docsLink && (
                <a
                  href={selectedProject.docsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark flex-grow-1 py-2.5 fw-bold rounded-3 shadow-sm transition-all text-dark"
                >
                  📄 Swagger API Docs
                </a>
              )}
              {selectedProject.githubLink && (
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark flex-grow-1 py-2.5 fw-bold rounded-3 shadow-sm transition-all text-white"
                >
                  📂 View Source Code
                </a>
              )}
            </Modal.Footer>
          </>
        )}
      </Modal>

      <Outlet />
    </>
  );
};