import 'tailwindcss/tailwind.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <section className="bg-gray-900 min-h-screen">
      <div className="w-1/2 mx-auto">
        <Header />
        <div class="bg-white rounded-lg shadow p-10">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </section>
  )
}

export default MyApp
