// src/components/CertificateSection.jsx
import React from "react";
import "./certificate.css";

const certificates = [
    {
        title: 'Hackathon: Code-A-Haunt 2.0',
        provider: 'Coding Ninjas',
        description: 'Our team has successfully qualified for the 2nd round of the hackathon, showcasing strong problem-solving skills and effective team collaboration.',
        link: 'https://certificate.givemycertificate.com/c/761f0666-26ba-42c0-82ff-e5b57889f80f',
    },
    {
        title: 'AI for Everyone: Master the Basics',
        provider: 'EdX',
        description: 'Successfully completed the "AI0101EN: AI for Everyone – Master the Basics" course offered by IBM, demonstrating foundational knowledge in AI and real-world applications.',
        link: 'https://courses.edx.org/certificates/1f4c231e9065464dbd88077f51269c0d',
    },
    {
        title: 'UI/UX for Beginners',
        provider: 'Great Learning',
        description: 'Completed a foundational UI/UX design course covering interface principles, user experience basics, and modern design practices using Figma.',
        link: 'https://www.mygreatlearning.com/certificate/GJMUMFMV',
    },
];


export default function CertificateSection() {
    return (
        <section className="cert-section" id="Certifications">
            <h2 className="cert-title">Certifications</h2>
            <div className="underline"></div>
            <p className="cert-subtitle">
                Achievements and certifications that highlight my continuous learning journey
            </p>
            <div className="cert-grid">
                {certificates.map((cert, idx) => (
                <div className="cert-card" key={idx}>
                    <h3 className="cert-heading">{cert.title}</h3>
                    <span className="cert-provider">{cert.provider}</span>
                    <p className="cert-desc">{cert.description}</p>
                    <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-btn">
                    Certificate
                    </a>
                </div>
                ))}
            </div>
        </section>
    );
}
