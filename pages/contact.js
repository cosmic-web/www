import Head from 'next/head';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import superagent from 'superagent';
import Footer from '../components/Footer';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Home() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = async(data) => {
    try {
      // Submit form to Netlify forms
      await superagent
        .post('/')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(encode({ 'form-name': 'contact', ...data }))
    } catch (error) {
      console.error(error)
    } finally {
      reset();
      setShowSuccessMessage(true);
    }
  };

  if (showSuccessMessage) {
    return (
      <div className="bg-white h-screen	w-screen text-center items-center justify-center flex flex-col">
        <h1 className="text-7xl">Thank you</h1>
        <p className="mt-4">Your message has been sent successfully.</p>
        <a href="#" className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={(e) => {
          e.preventDefault()
          try {
            window.location.reload()
          } catch(e) {
          }
        }}>Send another</a>
      </div>
    )
  }

  console.log(errors)
  return (
    <div>
      <Head>
        <title>Cosmic Dev Studio - Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img className="h-56 w-full object-cover lg:absolute lg:h-full" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&amp;ixqx=SyR0RG026Y&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1567&amp;q=80" alt="" />
            </div>
          </div>
          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Let's work together
                </h2>
                <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                  We’d love to hear from you! Send us a message using the form opposite, or email us. We’d love to hear from you! Send us a message using the form opposite, or email us.
                </p>
                <form name="contact" data-netlify="true" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                    <div className="mt-1">
                      <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="block w-full shadow-sm sm:text-sm focus:ring-[#125EF6] focus:border-[#125EF6] border-gray-300 rounded-md" {...register("first_name", { required: true })} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                    <div className="mt-1">
                      <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="block w-full shadow-sm sm:text-sm focus:ring-[#125EF6] focus:border-[#125EF6] border-gray-300 rounded-md" {...register("last_name", { required: true })} />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                      <input id="email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm sm:text-sm focus:ring-[#125EF6] focus:border-[#125EF6] border-gray-300 rounded-md" {...register("email", { required: true })} />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                      <span id="company_description" className="text-sm text-gray-500">Optional</span>
                    </div>
                    <div className="mt-1">
                      <input type="text" name="company" id="company" autoComplete="organization" className="block w-full shadow-sm sm:text-sm focus:ring-[#125EF6] focus:border-[#125EF6] border-gray-300 rounded-md" {...register("organization")} />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                      <span id="phone_description" className="text-sm text-gray-500">Optional</span>
                    </div>
                    <div className="mt-1">
                      <input type="text" name="phone" id="phone" autoComplete="tel" aria-describedby="phone_description" className="block w-full shadow-sm sm:text-sm focus:ring-[#125EF6] focus:border-[#125EF6] border-gray-300 rounded-md" {...register("phone_description")} />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="how_can_we_help" className="block text-sm font-medium text-gray-700">How can we help you?</label>
                      <span id="how_can_we_help_description" className="text-sm text-gray-500">Max. 500 characters</span>
                    </div>
                    <div className="mt-1">
                      <textarea id="how_can_we_help" name="how_can_we_help" aria-describedby="how_can_we_help_description" rows="4" className="block w-full shadow-sm sm:text-sm focus:ring-[#125EF6] focus:border-[#125EF6] border-gray-300 rounded-md" {...register("how_can_we_help_description", { max: 500 })}></textarea>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="how_did_you_hear_about_us" className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
                    <div className="mt-1">
                      <input type="text" name="how_did_you_hear_about_us" id="how_did_you_hear_about_us" className="shadow-sm focus:ring-[#125EF6] focus:border-[#125EF6] block w-full sm:text-sm border-gray-300 rounded-md"  {...register("how_did_you_hear_about_us")} />
                    </div>
                  </div>
                  <div className="text-right sm:col-span-2">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#125EF6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#125EF6]">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
