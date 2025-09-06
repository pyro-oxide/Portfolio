import { motion } from "motion/react"

export default function ProjectDetails({ title, description, subDescription, image, tags, href, closeModal}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
        <motion.div 
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        >
          <button 
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500">
            <img className="w-6 h-6" src="assets/close.svg" />
          </button>
          <img className="w-full rounded-t-2xl" src={image} alt={title} />
          <div className="p-5">
            <h5 className="mc-2 text-2xl font-bold text-white">{title}</h5>
            <p className="mb-3 font-normal, text-neutral-400">{description}</p>
            {subDescription.map((subDesc, index) => (
              <p className="mb-3 font-normal, text-neutral-400">{subDesc}</p>
            ))}
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-3">
                {tags.map((tag) => (
                  <img 
                  className="rounded-lg size-10 hover-animation"
                  key={tag.id} src={tag.path} alt={tag.name}
                  />
                ))}
              </div>
              <a className="inline-flex itms-center gap-1 font-medium hover-animation cursor-pointer">
                View Project <img className="size-4" src="assets/arrow-up.svg" href={href} />
              </a>
            </div>
          </div>
        </motion.div>
    </div>
  )
}