// Import styles
import './styles/main.css'

// Import assets to ensure they're processed by Vite
import './assets/images/img1.webp'
import './assets/images/img2.webp'
import './assets/images/img3.webp'
import './assets/images/img4.webp'
import './assets/images/img5.webp'
import './assets/images/logo1.png'
import './assets/images/logo2.png'
import './assets/images/logo3.png'
import './assets/images/logo4.png'
import './assets/images/preview.webp'
import './assets/images/vikram-star.png'
import './assets/images/instagram-icon.png'
import './assets/images/location-icon.png'

// Utility function to announce to screen readers
function announceToScreenReader(message) {
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', 'polite')
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  document.body.appendChild(announcement)
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// Enhanced smooth scrolling with focus management
function smoothScrollToElement(targetElement, announce = true) {
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    
    // Set focus to the target element for screen readers
    setTimeout(() => {
      targetElement.focus()
      if (announce) {
        announceToScreenReader(`Navegando a la sección ${targetElement.textContent || targetElement.getAttribute('aria-label') || 'destino'}`)
      }
    }, 500)
  }
}

// Keyboard navigation handler for interactive elements
function handleKeyboardNavigation(event) {
  // Handle Enter and Space as click for elements with role="button"
  if ((event.key === 'Enter' || event.key === ' ') && 
      (event.target.getAttribute('role') === 'button' || event.target.tagName === 'A')) {
    event.preventDefault()
    event.target.click()
  }
  
  // Escape key handling for any future modal implementations
  if (event.key === 'Escape') {
    // Close any potential modals or focused overlays
    document.activeElement.blur()
  }
}

// Initialize accessibility features and existing functionality
document.addEventListener('DOMContentLoaded', () => {
  // Add keyboard navigation listener
  document.addEventListener('keydown', handleKeyboardNavigation)
  
  // Enhanced smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]')
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)
      
      smoothScrollToElement(targetElement)
    })
    
    // Ensure proper ARIA attributes for anchor links
    if (!link.getAttribute('aria-label') && !link.getAttribute('aria-describedby')) {
      const href = link.getAttribute('href')
      if (href.startsWith('#')) {
        const targetId = href.substring(1)
        link.setAttribute('aria-describedby', `${targetId}-description`)
      }
    }
  })

  // Enhanced image loading with accessibility considerations
  const images = document.querySelectorAll('img')
  images.forEach(img => {
    // Function to mark image as loaded
    const markAsLoaded = () => {
      img.classList.add('loaded')
      
      // Announce image loading completion for decorative images if needed
      if (img.getAttribute('role') === 'presentation' || img.getAttribute('aria-hidden') === 'true') {
        // Don't announce decorative images
        return
      }
      
      // For important images, we could announce but it might be too verbose
      // Only announce for hero image
      if (img.closest('.hero-image')) {
        announceToScreenReader('Imagen principal cargada')
      }
    }
    
    // If image is already loaded (cached), mark it immediately
    if (img.complete && img.naturalHeight !== 0) {
      markAsLoaded()
    } else {
      // Otherwise, wait for load event
      img.addEventListener('load', markAsLoaded)
      // Also handle error case to prevent images from staying invisible
      img.addEventListener('error', markAsLoaded)
    }
  })

  // Enhanced intersection observer for animations with reduced motion support
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (prefersReducedMotion) {
          // For users who prefer reduced motion, just show the element without animation
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'none'
        } else {
          entry.target.classList.add('animate-in')
        }
        
        // Optionally announce section visibility for screen readers
        const heading = entry.target.querySelector('h2, h3')
        if (heading && entry.target.classList.contains('benefits')) {
          announceToScreenReader(`Sección ${heading.textContent} ahora visible`)
        }
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.program-card, .benefit-item, .pricing-card')
  animateElements.forEach(el => observer.observe(el))
  
  // Add skip link functionality
  const skipLink = document.querySelector('.skip-link')
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault()
      const targetElement = document.getElementById('main-content')
      smoothScrollToElement(targetElement, false)
    })
  }
  
  // Enhance external link accessibility
  const externalLinks = document.querySelectorAll('a[target="_blank"]')
  externalLinks.forEach(link => {
    // Ensure external links have proper security attributes
    if (!link.getAttribute('rel')) {
      link.setAttribute('rel', 'noopener noreferrer')
    }
    
    // Add visual indicator for external links if needed
    if (!link.getAttribute('aria-label') || !link.getAttribute('aria-label').includes('nueva ventana')) {
      const currentLabel = link.getAttribute('aria-label') || link.textContent
      link.setAttribute('aria-label', `${currentLabel} (se abre en nueva ventana)`)
    }
  })
  
  // Add focus trap for better keyboard navigation in card elements
  const interactiveCards = document.querySelectorAll('.program-card, .pricing-card, .benefit-item')
  interactiveCards.forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        // If card contains a link, trigger it
        const link = card.querySelector('a')
        if (link) {
          link.click()
        }
      }
    })
  })
  
  // Initialize live region for dynamic announcements
  const liveRegion = document.createElement('div')
  liveRegion.setAttribute('aria-live', 'polite')
  liveRegion.setAttribute('aria-atomic', 'true')
  liveRegion.className = 'sr-only'
  liveRegion.id = 'live-region'
  document.body.appendChild(liveRegion)
})

console.log('Vikram Singh Ecuador - Landing Page Loaded with Enhanced Accessibility') 