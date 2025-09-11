import { useState } from 'react'
import emailjs from "@emailjs/browser"
import Alert from '../components/Alert'
import { Particles } from '../components/Particles'

const Contact = () => {
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
      mobileNumber: "",
    })
  const [isLoading, setIsLoading] = useState(false)

  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState("Success")
  const [alertMessage, setAlertMessage] = useState("empty")
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  const showAlertMessage = (type, message) => {
    setAlertType(type)
    setAlertMessage(message)
    setShowAlert(true)
    setTimeout(() => {
        setShowAlert(false)
    }, 5000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
     try {
        console.log("Form Submitted")
        await emailjs.send("service_vcfld57", "template_lajc3fm", {
            from_name: formData.name,
            to_name: "Samarth",
            from_mobileNumber: formData.mobileNumber,
            from_email: formData.email,
            to_email: "samarth.pundeer@gmail.com",
            message: formData.message,
        }, "kwDaNw0AoTd3_rYlD")
        setIsLoading(false)
        showAlertMessage("Success!", " Your message has been sent.")
        setFormData({
            name: "",
            email: "",
            message: "",
            mobileNumber: "",
        })
     } catch (error) {
        setIsLoading(false)
        console.log(error)
        showAlertMessage("Failed!", " Something went wrong.")
     }
    
  }

  return (
    <secion id="contact" className="relative flex items-center c-space section-spacing">
        <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
        />
        { showAlert && <Alert type={alertType} text={alertMessage} />}
        <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 
        rounded-2xl bg-primary">
            <div className="flex flex-col items-start w-full gap-5 mb-10">
                <h2 className="text-heading">Let's Talk</h2>
                <p className="font-normal text-neutral-400">Whether you are looking to build a new website, improve your existing platform, 
                or bring a unique project to life, im here to help.</p>
            </div>
            <form 
            onSubmit={handleSubmit}
            className="w-full">
                <div className="mb-5">
                    <label htmlFor="name" className="field-label">Full Name</label>
                    <input 
                    className="field-input field-input-focus"
                    id="name" 
                    name="name" 
                    type="text"
                    placeholder="John Doe" 
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="mobileNumber" className="field-label">Mobile Number</label>
                    <input 
                    className="field-input field-input-focus"
                    id="mobileNumber" 
                    name="mobileNumber" 
                    type="tel"
                    placeholder="+91 98975 41825" 
                    autoComplete="tel"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="field-label">Email</label>
                    <input 
                    className="field-input field-input-focus"
                    id="email" 
                    name="email" 
                    type="email"
                    placeholder="JohnDoe@gmail.com" 
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="field-label">Message</label>
                    <textarea 
                    className="field-input field-input-focus"
                    id="message" 
                    name="message" 
                    type="text"
                    rows="4"
                    placeholder="Share your thoughts" 
                    autoComplete="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    />
                </div>
                <button 
                className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender 
                to-royal hover-animation"
                type="submit"
                >
                    {!isLoading ? "Send" : "Sending..."}
                </button>
            </form>
        </div>
    </secion>
  )
}

export default Contact