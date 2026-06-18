/**
 * NWA Roleplay — FiveM Server Website
 * Premium PC-First App Script
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';
  
    /* --- Smooth Navbar Scrolled State --- */
    const navbar = document.querySelector('.glass-nav');
    
    function updateNavbar() {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(8, 8, 12, 0.9)';
        navbar.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
      } else {
        navbar.style.background = 'rgba(8, 8, 12, 0.7)';
        navbar.style.boxShadow = 'none';
      }
    }
  
    window.addEventListener('scroll', updateNavbar);
    updateNavbar();
  
    /* --- Parallax Effect on Hero Visual (PC Only) --- */
    const heroSection = document.querySelector('.hero-section');
    const visualCard = document.querySelector('.visual-card');
    const floatEl1 = document.querySelector('.el-1');
    const floatEl2 = document.querySelector('.el-2');
  
    if (heroSection && window.innerWidth > 1024) {
      heroSection.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        
        if (visualCard) {
            visualCard.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
        
        if (floatEl1) {
            floatEl1.style.transform = `translate(${xAxis * 2}px, ${yAxis * 2}px)`;
        }
        
        if (floatEl2) {
            floatEl2.style.transform = `translate(${xAxis * -2}px, ${yAxis * -2}px)`;
        }
      });
  
      heroSection.addEventListener('mouseleave', () => {
        if (visualCard) visualCard.style.transform = `perspective(1000px) rotateY(-5deg) rotateX(2deg)`;
        if (floatEl1) floatEl1.style.transform = `translate(0px, 0px)`;
        if (floatEl2) floatEl2.style.transform = `translate(0px, 0px)`;
      });
    }

    /* --- Smooth Scrolling for Anchor Links --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update active state in nav
                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                if (this.classList.contains('nav-link')) {
                    this.classList.add('active');
                }
            }
        });
    });
});
