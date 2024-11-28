// import fetchData from "@/helper/FetchData";
// import Image from "next/image";
// import React from "react";

// const About = ({ data }) => {
//   return (
//     <div className="2xl:container lg:mt-20 mt-14 2xl:mx-auto lg:py-16 lg:px-28 md:py-12 md:px-6 py-9 px-4">
//       <div className="flex flex-col lg:flex-row justify-between gap-8">
//         <div className="w-full lg:w-5/12 flex flex-col justify-center">
//           <h1 className="text-3xl lg:text-4xl font-segoe leading-9 text-blue-800 pb-4">
//             About Us
//           </h1>
//           <p
//             className="font-segoe text-base leading-6 text-gray-600 "
//             dangerouslySetInnerHTML={{ __html: data?.data[0]?.value?.AboutUs }}
//           />
//         </div>
//         <div className="w-full lg:w-8/12 ">
//           <Image
//             width={100}
//             height={100}
//             className="w-full h-full"
//             src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
//             alt="A group of People"
//           />
//         </div>
//       </div>

//       <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
//         <div className="w-full lg:w-5/12 flex flex-col justify-center">
//           <h1 className="text-3xl lg:text-4xl font-segoe leading-9 text-blue-800 pb-4">
//             Our Story
//           </h1>
//           <p
//             className="font-segoe text-base leading-6 text-gray-600 "
//             dangerouslySetInnerHTML={{ __html: data?.data[0]?.value?.OurStory }}
//           />
//         </div>
//         <div className="w-full lg:w-8/12 lg:pt-8">
//           <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-4 shadow-lg rounded-md">
//             <div className="p-4 pb-6 flex justify-center flex-col items-center">
//               <Image
//                 width={100}
//                 height={100}
//                 className="block"
//                 src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
//                 alt="Alexa featured Image"
//               />

//               <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
//                 Alexa
//               </p>
//             </div>
//             <div className="p-4 pb-6 flex justify-center flex-col items-center">
//               <Image
//                 width={100}
//                 height={100}
//                 className="block"
//                 src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
//                 alt="Olivia featured Image"
//               />

//               <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
//                 Olivia
//               </p>
//             </div>
//             <div className="p-4 pb-6 flex justify-center flex-col items-center">
//               <Image
//                 width={100}
//                 height={100}
//                 className="block"
//                 src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
//                 alt="Liam featued Image"
//               />

//               <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
//                 Liam
//               </p>
//             </div>
//             <div className="p-4 pb-6 flex justify-center flex-col items-center">
//               <Image
//                 width={100}
//                 height={100}
//                 className="block "
//                 src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
//                 alt="Elijah featured Image"
//               />

//               <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
//                 Elijah
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
// export async function getServerSideProps() {
//   const data = await fetchData("settings?collection=about");

//   return {
//     props: {
//       data: data,
//     },
//   };
// }

"use client";

import WhyTravelWithUs from "@/components/templates/WhyTravel";
import {
  ChevronRight,
  Users,
  Award,
  Network,
  Phone,
  MapPin,
  Mail,
  Building,
  Shield,
  Star,
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to COMETRA TRAVEL
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Your exceptional gateway to the wonders of Egypt, where ancient
              mysteries meet modern marvels.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">About Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to COMETRA TRAVEL, your exceptional gateway to the wonders
              of Egypt! Nestled in the heart of Cairo, we take pride in curating
              unforgettable journeys for travelers seeking an immersive
              experience in this land of ancient mysteries and modern marvels.
              From the first day we started, we have been passionately blending
              history with the rich tapestry of Egyptian culture, creating a
              unique travel experience that goes beyond the ordinary.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cometra Travel, located in Downtown Cairo, Egypt, is a licensed
              and authorized travel company recognized by both local authorities
              and international travel associations by our active A-class
              license number is 2116 We are proud to be an active member of ETAA
              and IATA, and we are currently in the process of obtaining
              membership with ASTA and ABTA.
            </p>
          </section>

          <section className="mb-12">
            <h6 className="text-2xl font-semibold text-blue-800 mb-4">
              As a licensed travel company, we are empowered and authorized to
              offer a comprehensive range of travel-related services tailored to
              the needs of individuals, groups, associations, and corporate
              businesses. These services include, but are not limited to:
            </h6>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Flight bookings for domestic and international travel.</li>
              <li>
                Accommodation reservations from hotels to vacation rentals.
              </li>
              <li>
                Transportation arrangements, including car rentals and
                transfers.
              </li>
              <li>
                Vacation packages tailored to diverse preferences and budgets.
              </li>
              <li>Cruise bookings for unforgettable maritime experiences.</li>
              <li>Organized tours led by knowledgeable guides.</li>
              <li>
                Customized itineraries crafted for unique travel aspirations.
              </li>
              <li>Destination information and recommendations.</li>
              <li>24/7 customer support and travel consultation services.</li>
              <li>
                Travel consultation services offering expert advice and
                assistance with travel planning.
              </li>
              <li>
                Specialized travel services such as luxury travel, adventure
                trips, and honeymoon packages.
              </li>
              <li>
                Event planning services for destination weddings, conferences,
                and team-building retreats.
              </li>
              <li>
                Travel documentation assistance, including passport renewal and
                travel permits.
              </li>
              <li>
                Provision of travel advice, tips, and insights to ensure a
                memorable and fulfilling travel experience.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Story of our company owners
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Mohamed and Wael, the directors and owners of the company, have
              cultivated a robust friendship and business relationship since
              2005, immediately following their graduation from university.
              While Wael pursued studies in Law and Mohamed in English and
              culture, both shared a fervent passion for the travel industry.
              Their journey commenced as Tour Leaders for one of the largest UK
              adventure companies, allowing them to traverse Egypt extensively,
              gaining firsthand experience of various locations, and historical
              sites, and fostering strong connections with people and suppliers
              nationwide. Their extensive tenure as trip leaders enabled them to
              encounter diverse travelers, navigate myriad situations, and
              adeptly handle a spectrum of challenges. This wealth of experience
              is now effectively applied within our company, influencing our
              approach to crafting itineraries in a distinctive manner that sets
              us apart as a unique entity. Transitioning from Tour Leaders to
              managerial roles within travel agencies and subsequently ascending
              to higher positions, both Mohamed and Wael progressed side by
              side. They diligently accumulated experience and fostered enduring
              partnerships with industry collaborators. This journey continued
              until they reached a pivotal decision—to establish their own
              company, infusing their products and services with a unique and
              distinctive touch. Drawing upon their accumulated 20 years of
              on-the-ground experience, COMETRA Travel entered the market with
              an exceptional and innovative philosophy, redefining the way
              people travel throughout Egypt Mohamed and Wael embody a hands-on
              directorial style, actively participating in tours to ensure the
              quality of services. Unlike those who confine themselves to office
              roles, merely offering advice or instructions, they remain
              actively engaged, consistently present in the field, and
              accessible to clients whenever their assistance is required.
            </p>
          </section>

          {/* Team Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Our Team
            </h3>
            <div className="text-gray-700 leading-relaxed">
              <p>
                At Cometra Travel we take pride in assembling a team of
                passionate and experienced individuals dedicated to making your
                travel dreams a reality. Our team members are carefully selected
                for their expertise, professionalism, and commitment to
                excellence. Together, our team embodies the spirit of adventure,
                professionalism, and dedication to service that defines COMETRA.
                We are passionate about creating unforgettable travel
                experiences and look forward to welcoming you on your next
                journey of discovery.
              </p>

              <div className="mt-4">
                <h4 className="text-xl font-semibold text-blue-700 mb-2">
                  Team Capabilities
                </h4>
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Travel Experts:</strong> Our travel experts possess
                    in-depth knowledge of destinations, cultures, and travel
                    trends. They are adept at crafting personalized itineraries
                    tailored to your preferences, ensuring every journey is
                    unforgettable.
                  </li>
                  <li>
                    <strong>Customer Service Specialists:</strong> With a focus
                    on providing unparalleled customer service, our specialists
                    are here to assist you every step of the way. From booking
                    inquiries to post-travel support, they go above and beyond
                    to ensure your satisfaction.
                  </li>
                  <li>
                    <strong>Destination Specialists:</strong> Our destination
                    specialists are experts in specific regions or types of
                    travel experiences. Whether you are planning a beach
                    getaway, a cultural immersion, or an adventure expedition,
                    they have the insider knowledge to make it happen
                    seamlessly.
                  </li>
                  <li>
                    <strong>Tour Guides:</strong> Our passionate tour guides are
                    your companions on immersive journeys, bringing destinations
                    to life with their storytelling and expertise. They are
                    fluent in multiple languages and are committed to providing
                    enriching and authentic experiences.
                  </li>
                  <li>
                    <strong>Management Team:</strong> Last but not least, our
                    management team provides leadership, vision, and strategic
                    direction to ensure that COMETRA remains at the forefront of
                    the travel industry. They are committed to fostering a
                    culture of innovation, collaboration, and excellence.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Unique Travel Experience Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              How we make our itineraries special
            </h3>
            <div className="text-gray-700 leading-relaxed">
              <p>
                Experience the true essence of Egypt with Cometra Travel, where
                every moment is an immersive journey into the heart and soul of
                this mesmerizing land. Unlike conventional tours, Cometra offers
                more than just a glimpse of Egypt – it invites you to live it,
                breathe it, and feel it pulsating through your veins. Step
                inside local homes and kitchens, where you'll not only taste the
                flavors of Egyptian cuisine but also participate in its
                creation, forging connections with the warmth and hospitality of
                the people who call this land home. As you wander through the
                labyrinthine backstreets and alleys, away from the tourist
                throngs, you'll uncover the hidden gems of Egyptian life – where
                locals shop, haggle, and live their everyday lives. Engage in
                cultural discussions with knowledgeable guides, delving into the
                nuances of customs and traditions that vary from region to
                region, enriching your understanding of Egypt's diverse
                tapestry. Venture beyond the beaten path and into the rural
                heartland, where the fertile banks of the Nile nurture crops
                that sustain communities for generations. Stroll through fields
                and village lanes, absorbing the rhythms of agricultural life
                and gaining insight into the timeless bond between the Egyptian
                people and their land. In essence, with Cometra Travel, you
                don't just visit Egypt – you live it. And while your trip may
                last only a short while, the memories and experiences you gather
                will resonate within you for a lifetime, ensuring that Egypt
                becomes not just a destination but a cherished part of your
                heart and soul forevermore.
              </p>

              <div className="mt-4">
                <h4 className="text-xl font-semibold text-blue-700 mb-2">
                  Quality follow-up and assurance
                </h4>
                <p>
                  At Cometra Travel, ensuring impeccable quality and
                  unparalleled service is not just a commitment; it's a
                  cornerstone of our ethos. We uphold rigorous standards of
                  quality assurance at every stage of the travel experience,
                  from the initial planning to the final farewell. Our team of
                  seasoned professionals meticulously curates every aspect of
                  your journey, hand-selecting accommodations, activities, and
                  guides to guarantee excellence and authenticity. We
                  continuously monitor feedback from travelers, refining and
                  enhancing our offerings to exceed expectations and ensure that
                  each experience surpasses the last. Additionally, our
                  adherence to stringent safety protocols and industry best
                  practices ensures that your well-being is always our top
                  priority. With Cometra Travel, you can embark on your
                  adventures with confidence, knowing that every detail has been
                  carefully considered and meticulously executed to deliver
                  nothing less than perfection
                </p>
              </div>

              <p className="mt-4">
                At Cometra Travel, we recognize that the world is ever-evolving,
                and so too are the needs and desires of our discerning
                travelers. That's why we're committed to continuously updating
                and refining our trip itineraries and services to not only keep
                pace with life's changes but to stay ahead of the curve and
                exceed travelers' expectations. Through extensive market
                research, feedback analysis, and close collaboration with
                industry experts, we remain at the forefront of innovation,
                identifying emerging trends and tailoring our offerings to meet
                evolving demands. Whether it's incorporating sustainable
                practices, embracing new technologies, or introducing unique
                experiences, we are dedicated to enhancing our services to
                ensure each journey with Cometra Travel is nothing short of
                extraordinary. Our unwavering commitment to excellence means
                that every trip is not just a vacation but an opportunity to
                indulge in the very best that the world has to offer, crafted
                with precision, passion, and a relentless pursuit of perfection.
              </p>
            </div>
          </section>

          {/* Quality Assurance Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Communication with clients
            </h3>
            <div className="text-gray-700 leading-relaxed">
              <p>
                At Cometra Travel, our dedication to providing exceptional
                service extends far beyond the moment you book your journey –
                it's a commitment that lasts from the first point of contact to
                long after you've returned home. Before you embark on your
                adventure, our attentive team stays in regular communication,
                ensuring that all your questions are answered, preferences
                noted, and concerns addressed. Throughout your time in Egypt, we
                maintain a constant line of communication, offering support,
                guidance, and assistance whenever needed. Whether it's providing
                recommendations for local experiences, addressing any unexpected
                issues, or simply checking in to ensure your satisfaction, we're
                here every step of the way. And even after you've bid farewell
                to Egypt's shores, our relationship doesn't end – we value your
                feedback and insights, actively seeking your input to
                continually improve our services and offerings. At Cometra
                Travel, listening to our clients isn't just a priority – it's
                the cornerstone of our success, ensuring that each journey is
                tailored to your desires and exceeds your expectations at every
                turn.
              </p>

              <div className="mt-4">
                <h4 className="text-xl font-semibold text-blue-700 mb-2">
                  Understanding our client's needs
                </h4>
                <p>
                  At Cometra Travel, understanding our clients and their
                  ever-evolving needs is at the heart of everything we do. We
                  recognize that each traveler is unique, with their
                  preferences, interests, and aspirations, and we strive to
                  tailor our services accordingly. Through attentive listening,
                  personalized consultations, and a deep understanding of the
                  travel landscape, we ensure that every journey is perfectly
                  aligned with our client's desires, whether they seek
                  adventure, relaxation, cultural immersion, or a blend of all
                  three. Moreover, our keen insight into market trends, coupled
                  with ongoing research and analysis, enables us to stay ahead
                  of the curve and anticipate the changing needs and preferences
                  of travelers. By staying attuned to both our clients and the
                  broader market dynamics, we continuously refine and enhance
                  our offerings, ensuring that every experience with Cometra
                  Travel is not just memorable but truly transformative
                </p>
              </div>
            </div>
          </section>

          {/* Service Update and Innovation Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Local business network and contacts
            </h3>
            <div className="text-gray-700 leading-relaxed">
              <p>
                -At Cometra Travel, our extensive local network and close
                relationships with properties and service providers are the keys
                to unlocking unforgettable experiences for our travelers. With
                years of experience and deep-rooted connections across Egypt, we
                have cultivated partnerships with the most reputable hotels,
                resorts, and accommodations, ensuring that our clients have
                access to the finest options available. From luxurious boutique
                hotels nestled in historic neighborhoods to sprawling resorts
                overlooking the azure waters of the Red Sea, we handpick each
                property based on rigorous standards of quality, comfort, and
                service. Additionally, our network extends beyond accommodations
                to encompass a diverse array of service providers, including
                expert guides, transportation services, and unique experience
                providers. These invaluable partnerships allow us to offer
                unparalleled access to exclusive experiences, insider insights,
                and hidden gems that showcase the best of Egypt's culture,
                history, and natural beauty. With Cometra Travel, you can trust
                that every aspect of your journey is meticulously curated to
                perfection, thanks to our unparalleled local network and
                unwavering commitment to excellence.
              </p>
            </div>
          </section>

          {/* Client Communication Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Solving problems, handling situations, and attention to tiny
              details
            </h3>
            <div className="text-gray-700 leading-relaxed">
              <p>
                At Cometra Travel, our expertise extends far beyond crafting
                seamless itineraries – we excel at navigating unforeseen
                challenges with precision and grace. Our skilled team is adept
                at problem-solving on the spot, swiftly addressing any issues
                that may arise to ensure a smooth and stress-free experience for
                our clients. Whether it's a sudden change in plans, unexpected
                logistical hurdles, or any other unforeseen circumstance, we
                handle situations with efficiency and professionalism, saving
                valuable time and minimizing disruption. With our unwavering
                commitment to excellence and our proactive approach to
                problem-solving, travelers can rest assured that they are in
                capable hands every step of the way we pride ourselves not only
                on our ability to handle challenges but also on our meticulous
                attention to detail. We understand that it's often the small,
                seemingly insignificant details that can make the biggest impact
                on the overall travel experience. From ensuring that your
                preferred beverage is waiting for you upon arrival to arranging
                special surprises to celebrate milestones, we go above and
                beyond to anticipate and fulfill our clients every need and
                desire. By meticulously managing these small yet significant
                details, we elevate every aspect of the journey, creating
                moments of delight and leaving lasting impressions that exceed
                expectations. With Cometra Travel, no detail is too small to
                escape our attention, ensuring that every moment of your journey
                is imbued with magic and wonder.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
