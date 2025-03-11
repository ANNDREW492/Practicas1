
        document.addEventListener("DOMContentLoaded", function() {
            const title = document.querySelector('.main-title');
            const subText = document.querySelector('.sub-text');
            title.style.animationDelay = '0s'; 
            title.classList.add('slide-in');
            subText.style.animationDelay = '0s'; 
            subText.classList.add('slide-in');

            const buttons = document.querySelectorAll('.buttons .btn');
            buttons.forEach((button) => {
                button.style.animationDelay = '0.7s'; 
                button.classList.add('slide-in');         
               });
            const subtitle = document.querySelector('.trusted-text');
            subtitle.style.animationDelay = '0.3s'; 
            subtitle.classList.add('slide-in');
        });


        document.addEventListener("DOMContentLoaded", function() {
            const images = document.querySelectorAll('.logo-grid img');
    
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
    
            const callback = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = Array.from(images).indexOf(entry.target);
                        entry.target.style.animation = `slideUp 3s forwards`; // Aplica la animación
                        entry.target.style.animationDelay = `${index * 0.2}s`; // Retraso progresivo
                        entry.target.style.opacity = 1; // Asegúrate de que la imagen sea visible
                        observer.unobserve(entry.target); // Deja de observar la imagen después de que se anima
                    }
                });
            };
    
            const observer = new IntersectionObserver(callback, options);
            images.forEach(image => observer.observe(image)); // Observa cada imagen
        });




    document.addEventListener("DOMContentLoaded", function() {
        const imagenesDerecha = document.querySelector('.imagenes-derecha');
        const images = imagenesDerecha.querySelectorAll('img'); 
        const brazoRobot = document.querySelector('.brazo_robot1');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Se activa cuando al menos el 10% del bloque es visible
        };

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    imagenesDerecha.style.animation = 'slideInFromRight 1.5s forwards';
                    imagenesDerecha.style.opacity = 1;
                    images.forEach((image, index) => {
                        image.style.opacity = 1;
                        image.style.transitionDelay = `${index * 0.3}s`; 
                        image.style.transition = 'opacity 0.5s';
                    });
                    observer.unobserve(entry.target);
                }
            });
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(imagenesDerecha); 
    });




        document.addEventListener("DOMContentLoaded", function() {
    const cuadro = document.querySelector('.cuadro-azul');
    const imagen = document.querySelector('.info-image');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cuadro.style.animation = 'slideUp 2s forwards'; 
                cuadro.style.opacity = 1; 
                imagen.style.animation = 'slideDown 2s forwards'; 
                imagen.style.opacity = 1; 
                observer.unobserve(entry.target); 
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(cuadro);
});
  

        document.addEventListener("DOMContentLoaded", function() {
            const cuadros = document.querySelectorAll('.cuadro-blanco');
    
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 
            };
    
            const callback = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'slideUp 1.5s forwards'; 
                        entry.target.style.opacity = 1; 
    
                        const text1 = entry.target.querySelector('.cuadroblancotext11'); 
                        const text2 = entry.target.querySelector('.cuadroblancotext22'); 

                        text1.style.opacity = 1; 
                        text1.style.transition = 'opacity 0.5s'; 
                        text1.style.animation = 'slideInFromLeft2 2s forwards'; 

                        text2.style.opacity = 1; 
                        text2.style.transition = 'opacity 0.5s'; 
                        text2.style.animation = 'slideInFromRight2 2s forwards';
    
                        observer.unobserve(entry.target);
                    }
                });
            };
    
            const observer = new IntersectionObserver(callback, options);
            cuadros.forEach(cuadro => observer.observe(cuadro));
        });
   


        document.addEventListener("DOMContentLoaded", function() {
            const cuadroBlanco2 = document.querySelector('.cuadro-blanco2');
            const title = cuadroBlanco2.querySelector('.cuadroblancotext2');
            const paragraph = cuadroBlanco2.querySelector('.cuadroblancotext2_1');
    
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
    
            const callback = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        
                        cuadroBlanco2.style.opacity = 1; 
                        title.style.opacity = 1; 
                        title.style.animation = 'slideInFromLeft 1.5s forwards'; 
                        paragraph.style.opacity = 1; 
                        paragraph.style.animation = 'slideInFromRight 1.5s forwards'; 
                        paragraph.style.animationDelay = '0s'; 
                        observer.unobserve(entry.target);
                    }
                });
            };  
            const observer = new IntersectionObserver(callback, options);
            observer.observe(cuadroBlanco2); 
        });
  

        document.addEventListener("DOMContentLoaded", function() {
            const contenedoresLogo = document.querySelector('.contenedoreslogo');
            const fila2 = document.querySelector('.fila2');
    
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
    
            const callback = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        contenedoresLogo.style.opacity = 1; 
                        contenedoresLogo.style.animation = 'slideInFromLeft2 1.5s forwards'; 
                        fila2.style.opacity = 1; 
                        fila2.style.animation = 'slideInFromRight2 1.5s forwards'; 
    
                        observer.unobserve(entry.target);
                    }
                });
            };
    
            const observer = new IntersectionObserver(callback, options);
            observer.observe(contenedoresLogo); // Observa el bloque contenedoreslogo
            observer.observe(fila2); // Observa el bloque fila2
        });
   

        document.addEventListener("DOMContentLoaded", function() {
            const cuadrounlockText = document.querySelector('.cuadrounlocktext');
            const cuadrounlockImage = document.querySelector('.cuadrounlock img');
    
            const options = {
                root: null, 
                rootMargin: '0px',
                threshold: 0.2 
            };   
            const callback = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        cuadrounlockText.style.opacity = 1; 
                        cuadrounlockText.style.animation = 'slideInFromLeft 1.5s forwards'; 
                        cuadrounlockImage.style.opacity = 1; 
                        cuadrounlockImage.style.animation = 'slideInFromRight 1.5s forwards'; 
    
                        observer.unobserve(entry.target);
                    }
                });
            };   
            const observer = new IntersectionObserver(callback, options);
            observer.observe(cuadrounlockText); 
            observer.observe(cuadrounlockImage); 
        });
   
        document.addEventListener("DOMContentLoaded", function() {
            const icons = document.querySelectorAll('.contenedoresimagenes .iconos');
            const content = document.querySelector('.content');
    
            const observerOptions = {
                root: null, // Observa en relación al viewport
                rootMargin: '0px',
                threshold: 0.1 // 10% de visibilidad
            };
    
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const icon = entry.target;
                        const index = Array.from(icons).indexOf(icon);
                        setTimeout(() => {
                            icon.style.opacity = 1;
                            icon.style.transition = 'transform 1s ease-out'; 
                            icon.style.transform = 'translate(20%, 20%)'; 
                        }, index * 200); // Retraso progresivo
                    }
                });
            }, observerOptions);  
            icons.forEach(icon => {
                observer.observe(icon); 
            });
 
            const contentObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        content.style.opacity = 1; 
                        content.style.animation = 'slideUp 1.5s forwards'; 
                    }
                });
            }, observerOptions);  
            contentObserver.observe(content); 
        });
   

        document.addEventListener("DOMContentLoaded", function() {
            const contentWrapper = document.querySelector('.content-wrapper');
            const imgIzquierda = document.querySelector('.info-cards img:nth-of-type(1)'); 
            const imgDerecha = document.querySelector('.info-cards img:nth-of-type(2)'); 
            const textContent = document.querySelector('.text-content h1');
            const textParagraph = document.querySelector('.text-content p');
            const buttons = document.querySelectorAll('.buttons11 .btn');
    
            const observerOptions = {
                root: null, 
                rootMargin: '0px',
                threshold: 0.1 
            };
    
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        contentWrapper.style.opacity = 1; 
                        contentWrapper.style.animation = 'slideUp 1.5s forwards'; 

                        imgIzquierda.style.opacity = 1; 
                        imgIzquierda.style.animation = 'curveInLeft 2s forwards'; 

                        imgDerecha.style.opacity = 1; 
                        imgDerecha.style.animation = 'curveInRight 2s forwards'; 

                        textContent.style.opacity = 1; 
                        textContent.style.animation = 'fadeInText 1.5s forwards'; 

                        textParagraph.style.opacity = 1; 
                        textParagraph.style.animation = 'fadeInText 1.5s forwards'; 

                        buttons.forEach((button, index) => {
                            setTimeout(() => {
                                button.style.opacity = 1; 
                                button.style.animation = 'fadeInButton 1.5s forwards'; 
                            }, index * 200);
                        });
                    }
                });
            });   
            observer.observe(contentWrapper); 
        });
   
        
        
        document.addEventListener("DOMContentLoaded", () => {
    const leftSection = document.querySelector(".left-section");
    const rightSection = document.querySelector(".right-section");
    const contentFinal = document.querySelector(".contentfinal");

    const options = {
        root: null, 
        threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contentFinal.style.opacity = "1";
                leftSection.style.animation = "slideInFromLeft 1.5s ease-out forwards";
                rightSection.style.animation = "slideInFromRight 1.5s ease-out forwards";
                observer.disconnect(); 
            }
        });
    }, options);

    observer.observe(contentFinal);
});

    