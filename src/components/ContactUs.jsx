import { CONTACT_INFO } from "../constants"
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react"

const ContactUs = () => {
  return (
    <section className="max-w-7xl mx-auto" id="contact">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
          Contact Us
        </h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
          {CONTACT_INFO.text}
        </p>
        <div className="flex flex-col lg:flex-row justify-around mx-4">
          {/* Email Section */}
          <div className="flex flex-col items-center mb-8 lg:mb-0">
            <RiMailLine className="text-3xl mb-2" />
            <p className="text-lg font-semibold">{CONTACT_INFO.email.label}</p>
            <p className="text-neutral-600">{CONTACT_INFO.email.value}</p>
          </div>

          {/* Address Section */}
          <div className="flex flex-col items-center mb-8 lg:mb-0">
            <RiMapPinLine className="text-3xl mb-2" />
            <p className="text-lg font-semibold">
              {CONTACT_INFO.address.label}
            </p>
            <p className="text-neutral-600">{CONTACT_INFO.address.value}</p>
          </div>

          {/* Phone Section */}
          <div className="flex flex-col items-center">
            <RiPhoneLine className="text-3xl mb-2" />
            <p className="text-lg font-semibold">{CONTACT_INFO.phone.label}</p>
            <p className="text-neutral-600">{CONTACT_INFO.phone.value}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
