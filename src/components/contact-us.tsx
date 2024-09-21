import React from 'react'

const ContactUs = () => {
    return (
        <div className='bg-white pt-8 md:pt-16 pb-4 mx-auto'>
            <div className='w-full flex justify-center'>
                <div className='py-4 px-4 mx-4 w-fit shadow-2xl border-t-[1px] rounded-2xl'>
                    <h2 className='text-4xl font-bold text-center text-[#1A1F65]'> Need IT support? Connect with us.</h2>
                    <form className="mx-auto max-w-lg mt-8 flex flex-col gap-8">
                        <div className="">
                            <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Full Name" />
                        </div>
                        <div className="">
                            <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                        </div>
                        <div className="">
                            <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Mobile No." />
                        </div>
                        <div className="">
                        <select defaultValue={""} id="countries" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value={""} className='text-gray-700'>Select Category</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="E-Commerce Development">E-Commerce Development</option>
                            <option value="API">API</option>
                            <option value="CMS">CMS</option>
                            <option value="Custom Development">Custom Development</option>
                            <option value="Web Designing">Web Designing</option>
                            <option value="Graphic Designing">Graphic Designing</option>
                            <option value="UI/UX Designing">UI/UX Designing</option>
                            <option value="AI">AI</option>
                            <option value="Blockchain">Blockchain</option>
                            <option value="Cloud">Cloud</option>
                            <option value="Staff Augumentation">Staff Augumentation</option>
                            <option value="Recruitment Service">Recruitment Service</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Search Engine Optimization">Search Engine Optimization</option>
                            <option value="Social Media Marketing">Social Media Marketing</option>
                            <option value="Pay Per Click">Pay Per Click</option>
                            <option value="Content Marketing">Content Marketing</option>
                            <option value="Email Marketing">Email Marketing</option>
                            <option value="Salesforce">Salesforce</option>
                            <option value="Service Now">Service Now</option>
                            <option value="Digital Transformation">Digital Transformation</option>
                            <option value="Work Day">Work Day</option>
                        </select>
                        </div>
                        <div className="">
                            <textarea rows={4} className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Tell us a little about the project..."></textarea>
                        </div>
                        <div className='px-8 py-3 cursor-pointer text-center w-full font-medium bg-sky-800 hover:bg-sky-700 transition-all text-white rounded-lg shadow-lg'>
                            Send Message
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
