// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            
            // Cambiar icono
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
                mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Typewriter Effect
        const words = ["diversión", "flow", "alegría", "locura", "encanto", "estilo", "magia"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 200;
        let pauseTime = 2000;
        
        function typeEffect() {
            const currentWord = words[wordIndex];
            const textElement = document.getElementById('typewriter');
            
            if (isDeleting) {
                // Borrar caracter
                textElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 100;
            } else {
                // Escribir caracter
                textElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 200;
            }
            
            // Cambio de palabra
            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = pauseTime;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
            
            setTimeout(typeEffect, typeSpeed);
        }
        
        // Iniciar el efecto typewriter cuando el documento esté cargado
        document.addEventListener('DOMContentLoaded', function() {
            // Iniciar typewriter
            setTimeout(typeEffect, 1000);
            
            // Animaciones para las tarjetas de estadísticas
            const stats = document.querySelectorAll('.stat-item');
            stats.forEach(stat => {
                stat.style.opacity = '0';
                stat.style.transform = 'translateY(30px)';
            });
            
            setTimeout(() => {
                stats.forEach((stat, index) => {
                    setTimeout(() => {
                        stat.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        stat.style.opacity = '1';
                        stat.style.transform = 'translateY(0)';
                    }, 300 * index);
                });
            }, 1500);
        });
        
        // Formulario de contacto
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('phone').value;
                const eventType = document.getElementById('eventType').value;
                const message = document.getElementById('message').value;
                
                // Crear el mensaje para WhatsApp
                const whatsappMessage = 
                    `*Nuevo mensaje de contacto VivaLaParty*%0A%0A` +
                    `*Nombre:* ${name}%0A` +
                    `*Email:* ${email}%0A` +
                    `*Teléfono:* ${phone}%0A` +
                    `*Tipo de evento:* ${eventType}%0A` +
                    `*Mensaje:* ${message}`;
                
                // Crear el enlace de WhatsApp
                const whatsappLink = `https://wa.me/526634625234?text=${encodeURIComponent(whatsappMessage)}`;
                
                // Abrir WhatsApp
                window.open(whatsappLink, '_blank');
                
                // Resetear el formulario
                this.reset();
            });
        }
    