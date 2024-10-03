import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa'; // Import icons from react-icons

const pricingData = [
  {
    title: 'Silver',
    amount: '9.99',
    features: [
      'HTML5 and CSS3',
      'Bootstrap 4',
      'Well-commented code',
      'IonIcons integrated',
      'Free Google Font integrated',
      'Responsive design',
    ],
    unavailableFeatures: [
      'IonIcons integrated',
      'Responsive design'
    ],
    buttonText: 'Buy Now',
    buttonClass: 'bg-gray-300 text-gray-800 hover:bg-gray-400'
  },
  {
    title: 'Gold',
    amount: '19.99',
    features: [
      'HTML5 and CSS3',
      'Bootstrap 4',
      'Well-commented code',
      'IonIcons integrated',
      'Free Google Font integrated',
      'Responsive design',
    ],
    unavailableFeatures: [
      'Responsive design'
    ],
    buttonText: 'Buy Now',
    buttonClass: 'bg-yellow-500 text-white hover:bg-yellow-600'
  },
  {
    title: 'Platinum',
    amount: '29.99',
    features: [
      'HTML5 and CSS3',
      'Bootstrap 4',
      'Well-commented code',
      'IonIcons integrated',
      'Free Google Font integrated',
      'Responsive design',
    ],
    unavailableFeatures: [],
     buttonText: 'Buy Now',
    buttonClass: 'bg-gray-300 text-gray-800 hover:bg-gray-400'
  },
];

const Pricing = () => {
  return (
    <section className="py-16 bg-gray-100 px-10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 px-28">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Pricing</h3>
          <p className="text-lg text-gray-600">
          Get the best value for your investment with transparent and competitive pricing. We offer custom development services tailored to your budget.
          </p>
        </header>
        <div className="flex flex-wrap -mx-4">
          {pricingData.map((plan, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className={`bg-white shadow-lg rounded-lg p-6 text-center ${plan.buttonClass}`}>
                <div className="mb-6">
                  <p className="text-xl font-semibold mb-2">{plan.title}</p>
                  <h2 className="text-4xl font-bold mb-2">
                    {plan.amount.split('.')[0]}.<span>{plan.amount.split('.')[1]}</span>
                  </h2>
                  <p className="text-gray-500">Per Month</p>
                </div>
                <ul className="mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <FaCheck className="text-green-500 mr-2" />
                      <strong>{feature.split(' ')[0]}</strong> {feature.substring(feature.indexOf(' ') + 1)}
                    </li>
                  ))}
                  {plan.unavailableFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <FaTimes className="text-red-500 mr-2" />
                      <strong>{feature.split(' ')[0]}</strong> {feature.substring(feature.indexOf(' ') + 1)}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#" 
                  className={`inline-block px-6 py-3 font-semibold text-white rounded-lg ${plan.buttonClass} hover:bg-opacity-80 transition-colors`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
