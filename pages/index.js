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

      <main className="container mx-auto px-4 flex flex-grow flex-col items-center justify-center">
        <h1 className="text-white text-8xl text-center">Let's build the future together.</h1>
        <div className="py-12">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only text-white">Launch your idea to market</h2>
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <dt>
                  <p className="mt-5 text-lg leading-6 font-medium text-white">Launch your idea to market</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Provide cross-functional team of Product, Engineering and Design.
                </dd>
              </div>

              <div>
                <dt>
                  <p className="mt-5 text-lg leading-6 font-medium text-white">Accelerate your product development</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Integrate top quality engineers to accelerate product launches.
                </dd>
              </div>

              <div>
                <dt>
                  <p className="mt-5 text-lg leading-6 font-medium text-white">Increase your revenue with services team</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We manage your services while you focus on building the highest quality Platform.
                </dd>
              </div>
            </dl>
          </div>

          <div className="bg-[#125EF6] p-4 text-center mt-16">
            <Link href="/contact"><a className="text-white text-3xl">Let's talk about your project</a></Link>
          </div>

          <div>
            <h2 className="text-6xl text-white text-opacity-50 my-4 mt-16">Our core values</h2>
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
