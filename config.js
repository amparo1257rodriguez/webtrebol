// Archivo de configuración para el número de línea de WhatsApp
export const NUMERO_DE_LINEA = '5491176116901';
// Configuración de Meta Pixel
export const META_PIXEL_ID = '1310425690151156';
export const META_EVENT_NAME = 'ClickTrebol';

// Mensaje predeterminado
const MENSAJE_WA = encodeURIComponent('¡Hola! Quiero un USU4RIO. Me llamo: ');

// Función para obtener el enlace de WhatsApp
function getWhatsappLink() {
    return `https://wa.me/${NUMERO_DE_LINEA}?text=${MENSAJE_WA}`;
}

// Función para inicializar el pixel de Meta
function initMetaPixel() {
    if (typeof fbq !== 'undefined' && PIXEL_ID) {
        fbq('init', PIXEL_ID);
        fbq('track', 'PageView');
        
        // Configurar también el noscript fallback
        const noscriptImg = document.getElementById('meta-pixel-noscript');
        if (noscriptImg) {
            noscriptImg.src = `https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`;
        }
    }
}

// Actualiza el botón en el index.html
window.addEventListener('DOMContentLoaded', function() {
    // Inicializar el pixel de Meta con el ID del config
    initMetaPixel();
    
    const btn = document.getElementById('whatsapp-btn');
    if (btn) {
        btn.setAttribute('href', getWhatsappLink());
        btn.setAttribute('target', '_blank');
        
        // Agregar evento de Meta Pixel para tracking de clics
        btn.addEventListener('click', function() {
            // Evento personalizado de Meta Pixel
            if (typeof fbq !== 'undefined' && EVENTO_CLICK) {
                fbq('trackCustom', EVENTO_CLICK, {
                    website: 'webtrebol',
                    platform: 'WhatsApp',
                    page: document.title,
                    url: window.location.href,
                    timestamp: new Date().toISOString()
                });
            }
        });
    }
});


