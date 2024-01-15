import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col md:min-h-screen md:max-h-screen min-h-none">
      <Head>
        <title>Cosmic Dev Studio.</title>
        <meta
          name="description"
          content="CosmicStudio is a Studio based in Austin TX. We team up with startups and industries icons to help them build their projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container px-4 mx-auto">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="flex flex-col items-center justify-center flex-grow py-12 md:h-screen">
          <h1 className="mb-4 text-4xl text-center text-white md:text-7xl">Let's build the future together.</h1>
          <h2 className="md:mb-12 mb-6 text-xl text-white text-opacity-50 md:max-w-[50%] max-w-[80%] text-center">
            Over the last decade we helped several companies take their complex products from concept to market
            delivery. We can help you do the same.
          </h2>

          <div className="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center text-white sr-only">Launch your idea to market</h2>
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <dt>
                  <p className="mt-5 text-lg font-medium leading-6 text-center text-white">
                    Launch your idea to market
                  </p>
                </dt>
                <dd className="mt-2 text-base text-center text-gray-500">
                  Provide cross-functional team of Product, Engineering and Design.
                </dd>
              </div>

              <div>
                <dt>
                  <p className="mt-5 text-lg font-medium leading-6 text-center text-white">
                    Accelerate your product development
                  </p>
                </dt>
                <dd className="mt-2 text-base text-center text-gray-500">
                  Integrate top quality engineers to accelerate product launches.
                </dd>
              </div>

              <div>
                <dt>
                  <p className="mt-5 text-lg font-medium leading-6 text-center text-white">
                    Increase your revenue with services team
                  </p>
                </dt>
                <dd className="mt-2 text-base text-center text-gray-500">
                  We manage your services while you focus on building the highest quality Platform.
                </dd>
              </div>
            </dl>
          </div>
          <div className="bg-[#125EF6] p-4 px-6 text-center md:mt-16 rounded-md md:mb-24 mt-12">
            <Link href="/contact" className="text-2xl text-white">
              Let's talk about your project
            </Link>
          </div>
          <div className="bottom-0 mt-12 mb-12 md:px-12 md:absolute">
            <h2 className="my-6 mt-16 text-4xl text-white">Our core values</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <div>
                <h3 className="text-white">Founder Mentality</h3>
                <p className="text-white text-opacity-50">We treat our client’s company as our own.</p>
              </div>
              <div>
                <h3 className="text-white">Do the right thing</h3>
                <p className="text-white text-opacity-50">
                  We don’t shy away from doing the right thing even if it’s harder
                </p>
              </div>
              <div>
                <h3 className="text-white">We are builders</h3>
                <p className="text-white text-opacity-50">
                  We love building innovative products that’ll change the world.
                </p>
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
      {/* <Footer /> */}
    </div>
  )
}
