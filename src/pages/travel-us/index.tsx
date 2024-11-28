"use client";

import {
  Shield,
  Users,
  Clock,
  Phone,
  Globe,
  Heart,
  Sun,
  Lightbulb,
  History,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "We understand our product and client",
    description:
      "At Cometra Travel, we tailor our tours to meet every traveler's specific interests and needs. With deep expertise in Egypt’s treasures, we design experiences that go beyond the ordinary, ensuring each journey feels personal and enriching.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Safety measures for our trips and advice",
    description:
      "Your safety is our top priority. We follow strict protocols, partner with trusted service providers, and offer expert advice to ensure that every trip runs smoothly and securely, giving you peace of mind throughout your journey.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Experienced and trained team",
    description:
      "Our team consists of knowledgeable, passionate professionals who are extensively trained to handle every aspect of your trip. From expert guides to dedicated customer support, you’re in the hands of experts who care about creating unforgettable experiences.",
  },
  {
    icon: <History className="w-6 h-6" />,
    title: "25 years of experience in the travel industry",
    description:
      "With over two decades of experience, Cometra Travel has earned a solid reputation for excellence. Our long-standing presence in the industry enables us to offer unmatched insight and expertise when planning the perfect trip to Egypt.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title:
      "Communication with our client’s pre-travel, during the trip, and post-travel",
    description:
      "We believe that seamless communication is key to a stress-free travel experience. Our dedicated team stays connected with you at every stage—from initial inquiries to your journey back home—ensuring you feel supported.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Value of trip cost and time",
    description:
      "We are committed to offering competitive pricing without compromising on quality. Every itinerary is thoughtfully crafted to deliver maximum value for both your budget and time, ensuring you get the most out of your Egyptian adventure.",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "24/7 client care and responsibility",
    description:
      "At Cometra Travel, our responsibility doesn’t end when your trip starts. We provide 24/7 support to assist with any issues or changes during your travels, allowing you to focus on enjoying your trip while we take care of the rest.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Responsible and sustainable travel",
    description:
      "We are passionate about responsible travel. We take steps to minimize our environmental impact and support local communities. Our tours are designed to promote sustainability and preserve Egypt’s cultural and natural heritage for future generations.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Respect for local culture, religion, and customs",
    description:
      "We believe in respecting the unique customs, traditions, and religious practices of the communities we visit. Our tours are designed to be culturally sensitive, fostering mutual understanding and ensuring travelers engage respectfully with local life.",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Exceptional cultural experience",
    description:
      "At Cometra Travel, we go beyond traditional sightseeing, offering an authentic journey into the heart of Egyptian life. You'll experience the way locals live, from enjoying traditional meals in family homes to witnessing daily activities in bustling markets. Whether it’s learning about ancient customs or tasting Egypt’s diverse cuisine, we ensure you connect deeply with the people and culture, making your trip both memorable and meaningful",
  },
];

export default function WhyTravelWithUs() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Why Travel with Cometra Travel?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience Egypt like never before with our expert guidance and
            personalized service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center md:flex-row md:items-start space-y-2 md:space-y-0 md:space-x-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-blue-900 text-center md:text-left">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-center md:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
