'use client';

/**
 * Professional Scroll Animations and Micro-Interactions
 * Phase 9: Global Enhancements for Vanguard Technology DGDP Agent Landing Page
 */

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

class VanguardScrollAnimations {
  private observer: IntersectionObserver | null = null;
  private parallaxElements: Element[] = [];
  private ticking = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.init();
    }
  }

  private init() {
    this.setupIntersectionObserver();
    this.setupParallaxElements();
    this.setupScrollListener();
    this.setupMicroInteractions();
  }

  /**
   * Set up Intersection Observer for scroll-triggered animations
   */
  private setupIntersectionObserver() {
    const options: ScrollAnimationOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add staggered animations for children
          if (entry.target.classList.contains('vt-stagger-children')) {
            this.animateChildren(entry.target);
          }
        }
      });
    }, options);

    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.vt-reveal');
    revealElements.forEach((el) => {
      this.observer?.observe(el);
    });
  }

  /**
   * Animate children with stagger effect
   */
  private animateChildren(parent: Element) {
    const children = Array.from(parent.children);
    children.forEach((child, index) => {
      setTimeout(() => {
        child.classList.add('vt-animate-fadeInUp');
      }, index * 100);
    });
  }

  /**
   * Set up parallax elements
   */
  private setupParallaxElements() {
    this.parallaxElements = Array.from(document.querySelectorAll('[class*="vt-parallax"]'));
  }

  /**
   * Set up scroll listener for parallax effects
   */
  private setupScrollListener() {
    window.addEventListener('scroll', () => {
      if (!this.ticking) {
        requestAnimationFrame(() => {
          this.updateParallax();
          this.ticking = false;
        });
        this.ticking = true;
      }
    });
  }

  /**
   * Update parallax transformations
   */
  private updateParallax() {
    const scrollY = window.pageYOffset;
    
    this.parallaxElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const speed = this.getParallaxSpeed(element);
      
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        const yPos = -(scrollY * speed);
        element.setAttribute('style', `transform: translate3d(0, ${yPos}px, 0)`);
      }
    });
  }

  /**
   * Get parallax speed based on class
   */
  private getParallaxSpeed(element: Element): number {
    if (element.classList.contains('vt-parallax-slow')) return 0.3;
    if (element.classList.contains('vt-parallax-medium')) return 0.5;
    if (element.classList.contains('vt-parallax-fast')) return 0.8;
    return 0.2; // default
  }

  /**
   * Set up micro-interactions
   */
  private setupMicroInteractions() {
    // Shimmer effects on cards
    const shimmerElements = document.querySelectorAll('.vt-micro-shimmer');
    shimmerElements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        element.classList.add('shimmer-active');
      });
    });

    // Tilt effects on hover
    const tiltElements = document.querySelectorAll('.vt-micro-tilt');
    tiltElements.forEach((element) => {
      element.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        this.handleTilt(element as HTMLElement, mouseEvent);
      });

      element.addEventListener('mouseleave', () => {
        (element as HTMLElement).style.transform = '';
      });
    });

    // Professional button interactions
    const buttons = document.querySelectorAll('.vt-button-primary');
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', () => {
        button.classList.add('shimmer-effect');
      });
    });
  }

  /**
   * Handle tilt micro-interaction
   */
  private handleTilt(element: HTMLElement, e: MouseEvent) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / centerY * -10;
    const rotateY = (x - centerX) / centerX * 10;
    
    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }

  /**
   * Add scroll-triggered counter animations
   */
  public animateCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-counter') || '0');
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.floor(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };

      updateCounter();
    });
  }

  /**
   * Smooth scroll to section with offset
   */
  public scrollToSection(targetId: string, offset = 80) {
    const target = document.getElementById(targetId);
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Clean up observers and listeners
   */
  public destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener('scroll', this.updateParallax);
  }
}

// Initialize scroll animations when DOM is loaded
if (typeof window !== 'undefined') {
  let scrollAnimations: VanguardScrollAnimations;

  document.addEventListener('DOMContentLoaded', () => {
    scrollAnimations = new VanguardScrollAnimations();
  });

  // Clean up on page unload
  window.addEventListener('beforeunload', () => {
    if (scrollAnimations) {
      scrollAnimations.destroy();
    }
  });
}

export default VanguardScrollAnimations;