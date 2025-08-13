import Header from '@/components/Header/Header';
import Publications from '@/components/Publications/Publications';
import Experience from '@/components/Experience/Experience';
import Awards from '@/components/Awards/Awards';
import Footer from '@/components/Footer/Footer';
import FontSelector from '@/components/FontSelector';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <FontSelector /> */}
      {/* Main container with generous white space on all sides */}
      <div className="container mx-auto max-w-4xl px-2 sm:px-5 md:px-8 lg:px-10 xl:px-10">
        <div className="bg-white overflow-hidden">
          {/* Header section */}
          <div className="px-8 py-6 md:px-12 md:pt-20 md:pb-8 lg:px-12 lg:pt-20 lg:pb-4">
            <Header />
          </div>
          
          {/* Subtle divider */}
          {/* <div className="mx-16 border-t border-gray-200"></div> */}
          
          {/* Content sections */}
          <div className="p-8 md:p-12 lg:p-12 lg:pt-2 lg:pb-4 space-y-6">
            <Publications />
            <Experience />
            <Awards />
          </div>
          
          {/* Footer */}
          <div className="mx-8 md:mx-12 lg:mx-12 border-t-2 border-gray-200 pt-2">
            <div className="pb-8 md:pb-8 lg:pb-8">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}