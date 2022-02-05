import React from "react"

// COMPONENTS
import Header from './components/Header'
import TopSection from './components/TopSection'
import OurNumbers from './components/OurNumbers'
import OurTrainers from './components/OurTrainers'
import OurServices from './components/OurServices'
import OurGallery from './components/OurGallery'
import OurPricing from './components/OurPricing'
import OurReviews from './components/OurReviews'
import OurContacts from './components/OurContacts'
import SiteBanner from './components/SiteBanner'

function App() {
  return (
    <>
      <Header />
      <TopSection />
      <OurNumbers />
      <OurTrainers />
      <OurServices />
      <OurGallery />
      <SiteBanner src="/images/gallery/gallery-img-6.jpg" alt="Spinning Class" />
      <OurPricing />
      <SiteBanner src="/images/gallery/gallery-img-3.jpg" alt="Power Lifting" />
      <OurReviews />
      <SiteBanner src="/images/gallery/gallery-img-7.jpg" alt="Body Building" />
      <OurContacts />
      <div className="section bg-gray-100">
        <h6 className="text-sm text-center text-gray-400">hernandez maikol {new Date().getFullYear()}</h6>
      </div> 
    </>
  )
}

export default App
