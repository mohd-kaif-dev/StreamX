import { TESTIMONIALS_CONTENT } from "../constants";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  return (
    <section id="testimonials">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 border-t border-neutral-800"
        >
          <h1 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent">
            {TESTIMONIALS_CONTENT.sectionTitle}
          </h1>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            {TESTIMONIALS_CONTENT.sectionDescription}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS_CONTENT.reviews.map((review, index) => (
            <motion.div
              custom={index}
              variants={testimonialVariants}
              key={index}
              className="flex flex-col p-6 justify-center items-center overflow-hidden bg-neutral-900/50 border-neutral-900 rounded-2xl mt-10"
            >
              <p className="text-xs text-neutral-200 mb-4">{review.review}</p>
              <div className="flex justify-center items-center mt-4">
                <img
                  src={review.image}
                  alt={review.alt}
                  className="rounded-lg w-12 h-12 object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-bold text-white">{review.name}</p>
                  <p className="text-sm  text-gray-500">{review.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
