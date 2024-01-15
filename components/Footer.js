export default function Footer() {
  return (
    <footer className="absolute bottom-0 flex w-full">
      <div className="w-full px-4 py-12 mx-auto max-w-10xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2"></div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-base text-center text-white">
            &copy; {new Date().getFullYear()} Cosmic LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
