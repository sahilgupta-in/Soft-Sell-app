import React from 'react'

const Form = () => {
  return (
    <div class="text-center pt-12 pb-12">
    <h1 class="text-3xl md:text-4xl font-semibold text-gray-800">Get Your Free License Valuation</h1>
    <p class="text-sm md:text-base text-gray-500 mt-4">Fill out the form to get an instant valuation for your unused software licenses. Our team will reach out to discuss next steps.</p>
    
    <form class="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-6 pt-8">
  

 <div className='grid gap-6 mb-6 md:grid-cols-2'>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
    <input type="text" placeholder="John Doe" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>

  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
    <input type="email" placeholder="you@example.com" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>
  </div>

<div className='grid gap-6 mb-6 md:grid-cols-2'>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Company</label>
    <input type="text" placeholder="Company Name" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>

  <div className=''>
    <label class="block text-sm font-medium text-gray-700 mb-1">License Type</label>
    <select class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option value="">Select a license</option>
      <option value="personal">Microsoft</option>
      <option value="business">Adobe</option>
      <option value="enterprise">Oracle</option>
      <option value="enterprise">Salesforce</option>
      <option value="enterprise">Autodesk</option>
      <option value="enterprise">Others</option>
    </select>
  </div>
  </div>


  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
    <textarea rows="4" placeholder="Provide any specific requirements..." class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
  </div>

  <button type="submit" class="w-full bg-blue-600 text-white py-5 rounded-lg hover:bg-blue-700 transition-colors">
    Get Free Valuation
  </button>
  <p>By submitting this form, you agree to our Privacy Policy and Terms of Service.</p>
</form>
</div>

  )
}

export default Form

