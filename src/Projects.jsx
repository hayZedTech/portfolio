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
import stephotec_api_docs from "./Images/stephotec_api_docs.jpg";
import stephotec_portal from "./Images/stephotec_portal.png";

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
      id: 15,
      category: "backend",
      title: "Stephotec Student Management API",
      desc: "An enterprise-grade education management backend built using Django REST Framework and PostgreSQL. Features multi-course student enrollment pipelines, per-course auto-generated matriculation IDs, course history tracking, JWT authentication, and automated OpenAPI 3.0 specs. Includes standalone, read-only Redoc interactive documentation displaying 50+ endpoints, schemas, and request/response models in a Stripe-style 3-column layout without live database exposure.",
      img: stephotec_api_docs,
      demoLink: null,
      docsLink: "/stephotec-api-docs.html",
      docsLabel: "📖 Redoc OpenAPI Docs",
      githubLink: "https://github.com/hayZedTech/stephotec_backend",
      languages: ["Python", "Django", "DRF", "PostgreSQL", "JWT Auth", "drf-spectacular", "OpenAPI 3.0", "Redoc"]
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
      title: "Computer Based Testing (CBT) Portal",
      desc: "A full-featured Computer Based Testing (CBT) platform built with PHP and Supabase PostgreSQL. Features include secure candidate authentication, server-anchored anti-cheat countdown timers, question navigation matrix, and an automated grading engine supporting official WAEC, NECO, and JAMB standards across 18 subjects with instant score analytics and step-by-step answer explanations.",
      img: cbt_image,
      demoLink: "https://hayzed-exam.onrender.com",
      githubLink: "https://github.com/hayZedTech/hayzed-exam",
      languages: ["PHP", "PostgreSQL", "Supabase", "JavaScript", "JQuery", "Bootstrap", "Docker", "REST API"]
    },
    {
      id: 4,
      category: "web",
      title: "E-Commerce Digital Storefront",
      desc: "A fully functional ecommerce website where users can browse products, add to cart, and purchase online. Built with PHP and MySQL for backend, Bootstrap and jQuery for frontend interactivity.",
      img: ecommerce,
      demoLink: "https://qidaf.com",
      githubLink: "https://github.com/hayZedTech",
      languages: ["PHP", "MySQL", "JavaScript", "JQuery", "Bootstrap"]
    },
    {
      id: 5,
      category: "web",
      title: "Dynamic Content Blog Platform",
      desc: "A dynamic blog platform allowing users to read and interact with published articles. Developed using PHP and MySQL for backend content management, Bootstrap for design, and jQuery + JavaScript for interactivity.",
      img: blog,
      demoLink: "https://qidaf.com/qidaf_blog/index.php",
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
    },
    {
      id: 9,
      category: "web",
      title: "Stephotec Student & Institution Portal",
      desc: "An enterprise-grade education management portal built with Next.js 16, React 19, Material-UI, and Tailwind CSS, powered by a high-performance Python & Django REST Framework backend with PostgreSQL. Features dynamic role-based dashboards (Admin & Student), advanced data grids for student records, interactive weekly timetable scheduling, course progress tracking, automated ID card & certificate generation (PDF/canvas), quiz player engine, and RESTful API integration with JWT session security.",
      img: stephotec_portal,
      demoLink: "https://stephotec-portal.vercel.app/",
      docsLink: "/stephotec-api-docs.html",
      docsLabel: "📖 API Specification",
      githubLink: "https://github.com/hayZedTech/stephotec-portal",
      languages: ["Next.js", "React", "Django (Backend)", "DRF", "PostgreSQL", "Material-UI", "Tailwind CSS", "Axios"]
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const filteredProjects = projects.filter((p) => p.category === activeTab);

  return (
    <>
      <section 
        id="projects" 
        className="py-5 min-vh-100 position-relative" 
        style={{
          background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
          borderTop: "1px solid #e2e8f0"
        }}
      >
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
                className={`btn px-4 py-2 rounded-pill fw-bold transition-all ${
                  activeTab === tab.id 
                    ? "btn-info text-dark shadow-sm" 
                    : "btn-outline-secondary bg-white text-secondary border"
                }`}
                style={{
                  borderColor: activeTab === tab.id ? "transparent" : "#e2e8f0",
                  fontSize: "0.92rem"
                }}
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
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="card border w-100 h-100 flex-column overflow-hidden bg-white custom-project-card"
                    style={{ 
                      borderRadius: "16px", 
                      borderColor: "#e2e8f0",
                      boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)"
                    }}
                    whileHover={{ 
                      y: -6, 
                      boxShadow: "0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.04)",
                      borderColor: "#cbd5e1",
                      transition: { duration: 0.2 } 
                    }}
                  >
                    {/* Project Image Frame Layout */}
                    <div 
                      className="position-relative overflow-hidden" 
                      style={{ height: "205px", cursor: "pointer" }}
                      onClick={() => openModal(project)}
                    >
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-100 h-100 object-cover"
                        style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                      />
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className="badge bg-dark bg-opacity-75 backdrop-blur px-3 py-1.5 rounded-pill small fw-semibold">
                          ID: #{project.id}
                        </span>
                      </div>
                    </div>

                    {/* Card Description Data Segment */}
                    <div className="card-body p-4 d-flex flex-column flex-grow-1">
                      <h5 
                        className="card-title text-dark fw-bold mb-2 text-truncate-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => openModal(project)}
                      >
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
                          <span key={idx} className="badge bg-light text-secondary border px-2 py-1 small fw-medium" style={{ borderColor: "#e2e8f0" }}>
                            {lang}
                          </span>
                        ))}
                        {project.languages.length > 4 && (
                          <span className="badge bg-info bg-opacity-10 text-primary border border-info border-opacity-25 px-2 py-1 small fw-bold">
                            +{project.languages.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Direct Action Buttons matching requested design */}
                      <div className="mt-auto pt-3 border-top d-flex align-items-center gap-2 flex-wrap">
                        {project.demoLink && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="btn btn-sm text-white fw-semibold d-inline-flex align-items-center text-decoration-none shadow-sm"
                            style={{
                              backgroundColor: "#0284c7",
                              borderRadius: "8px",
                              padding: "7px 14px",
                              fontSize: "0.85rem",
                              boxShadow: "0 4px 14px 0 rgba(2, 132, 199, 0.35)",
                              border: "none",
                              transition: "all 0.2s ease"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#0369a1";
                              e.currentTarget.style.transform = "translateY(-1px)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "#0284c7";
                              e.currentTarget.style.transform = "translateY(0)";
                            }}
                            title="Open Live Application"
                          >
                            <span>Live Demo</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ms-1.5">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          </a>
                        )}

                        {!project.demoLink && project.docsLink && (
                          <a
                            href={project.docsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="btn btn-sm text-white fw-semibold d-inline-flex align-items-center text-decoration-none shadow-sm"
                            style={{
                              backgroundColor: "#0284c7",
                              borderRadius: "8px",
                              padding: "7px 14px",
                              fontSize: "0.85rem",
                              boxShadow: "0 4px 14px 0 rgba(2, 132, 199, 0.35)",
                              border: "none",
                              transition: "all 0.2s ease"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#0369a1";
                              e.currentTarget.style.transform = "translateY(-1px)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "#0284c7";
                              e.currentTarget.style.transform = "translateY(0)";
                            }}
                            title="View Interactive API Documentation"
                          >
                            <span>API Docs</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ms-1.5">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          </a>
                        )}

                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="btn btn-sm text-white fw-semibold d-inline-flex align-items-center text-decoration-none shadow-sm"
                            style={{
                              backgroundColor: "#0f172a",
                              borderRadius: "8px",
                              padding: "7px 14px",
                              fontSize: "0.85rem",
                              border: "none",
                              transition: "all 0.2s ease"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#1e293b";
                              e.currentTarget.style.transform = "translateY(-1px)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "#0f172a";
                              e.currentTarget.style.transform = "translateY(0)";
                            }}
                            title="View GitHub Repository"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="me-1.5">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                            <span>Code</span>
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(project);
                          }}
                          className="btn btn-sm fw-semibold d-inline-flex align-items-center justify-content-center"
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#334155",
                            border: "1.5px solid #cbd5e1",
                            borderRadius: "8px",
                            padding: "6px 14px",
                            fontSize: "0.85rem",
                            transition: "all 0.2s ease"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f8fafc";
                            e.currentTarget.style.borderColor = "#94a3b8";
                            e.currentTarget.style.transform = "translateY(-1px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#ffffff";
                            e.currentTarget.style.borderColor = "#cbd5e1";
                            e.currentTarget.style.transform = "translateY(0)";
                          }}
                          title="View System Details and Architecture"
                        >
                          <span>Details</span>
                        </button>
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
                  {selectedProject.docsLabel || "📄 Swagger API Docs"}
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