import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollProgress from '../../components/ScrollProgress'
import StableITRipple from '../../components/StableITRipple'

// Section Components for Portfolio page
// import CoffeeSection from '../../components/sections/CoffeeSection'
import NewsSection from '../../components/sections/NewsSection'
// import WebDevSection from '../../components/sections/WebDevSection'

export default function Portfolio() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/istockphoto-876010626-1024x1024.jpg)',
          backgroundAttachment: 'fixed',
          zIndex: -1,
          filter: 'brightness(0.95) contrast(1.1) saturate(1.0)',
          opacity: 0.3
        }}
      />
      
      <Header />
      <ScrollProgress />
      <StableITRipple />
      
      <main className="relative z-10 pt-20">
        {/* <CoffeeSection /> */}
        <NewsSection />
        {/* <WebDevSection /> */}
      </main>
      
      <Footer />
    </div>
  )
}
