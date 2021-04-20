import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-[#000] flex flex-col min-h-screen">
      <Head>
        <title>Cosmic Dev Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <div className="py-12 h-screen flex flex-grow flex-col items-center justify-center">
          <h1 className="text-white text-8xl text-center mb-4">Let's build the future together.</h1>
          <h2 className="text-white mb-8 text-xl mb-12 text-opacity-50">Over the last decade we helped several companies take their complex products from concept to market delivery. We can help you do the same.</h2>

          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only text-white text-center">Launch your idea to market</h2>
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <dt>
                  <p className="mt-5 text-lg leading-6 font-medium text-white text-center">Launch your idea to market</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500 text-center">
                  Provide cross-functional team of Product, Engineering and Design.
                </dd>
              </div>

              <div>
                <dt>
                  <p className="mt-5 text-lg leading-6 font-medium text-white text-center">Accelerate your product development</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500 text-center">
                  Integrate top quality engineers to accelerate product launches.
                </dd>
              </div>

              <div>
                <dt>
                  <p className="mt-5 text-lg leading-6 font-medium text-white text-center">Increase your revenue with services team</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500 text-center">
                  We manage your services while you focus on building the highest quality Platform.
                </dd>
              </div>
            </dl>
          </div>
          <div className="bg-[#125EF6] p-4 px-20 text-center mt-16 rounded-md">
            <Link href="/contact"><a className="text-white text-3xl">Let's talk about your project</a></Link>
          </div>
        </div>
        <div>

          <div>
            <h2 className="text-6xl text-white my-16 mt-16">Our core values</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h3 className="text-white">Founder Mentality</h3>
                <p className="text-white text-opacity-50">We treat our client’s company as our own.</p>
              </div>
              <div>
                <h3 className="text-white">Do the right thing</h3>
                <p className="text-white text-opacity-50">We don’t shy away from doing the right thing even if it’s harder</p>
              </div>
              <div>
                <h3 className="text-white">We are builders</h3>
                <p className="text-white text-opacity-50">We love building innovative products that’ll change the world.</p>
              </div>
              <div>
                <h3 className="text-white">Go the extra mile</h3>
                <p className="text-white text-opacity-50">We do everything within our power to help you succeed.</p>
              </div>
              <div>
                <h3 className="text-white">Be transparent</h3>
                <p className="text-white text-opacity-50">We’re the partner that always tells it like it is.</p>
              </div>
              <div>
                <h3 className="text-white">Prioritization and Speed</h3>
                <p className="text-white text-opacity-50">We are obsessed with focus and execution.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
