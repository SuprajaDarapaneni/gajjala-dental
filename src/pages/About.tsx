{/* Founders Section */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-20">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-px bg-accent"></div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-primary italic mb-4">
        Meet Our Founders
      </h2>
      <p className="text-primary/60 max-w-2xl mx-auto font-light">
        Visionaries behind Gajjala Dental, committed to delivering excellence in dental care with compassion and innovation.
      </p>
    </div>

    {/* Founders Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

      {/* Founder 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center group"
      >
        <div className="relative mb-8">
          <img
            src={parameswara}
            alt="Dr. Parameshwara Reddy"
            className="w-72 h-72 object-cover mx-auto border-4 border-accent shadow-xl group-hover:scale-105 transition duration-500"
          />
        </div>

        <h3 className="text-2xl font-bold italic text-primary mb-2">
          Dr. Parameshwara Reddy
        </h3>
        <p className="text-accent uppercase tracking-widest text-xs mb-4 font-bold">
          Founder & Chairman
        </p>

        <p className="text-primary/60 leading-relaxed font-light max-w-md mx-auto">
          With a vision to bring world-class dental care to Narasaraopet, Dr. Parameshwara Reddy founded Gajjala Dental in 2014. His expertise, leadership, and dedication have shaped the clinic into a trusted name in advanced dental treatments.
        </p>
      </motion.div>

      {/* Founder 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center group"
      >
        <div className="relative mb-8">
          <img
            src={swetha}
            alt="Dr. Swetha"
            className="w-72 h-72 object-cover mx-auto border-4 border-accent shadow-xl group-hover:scale-105 transition duration-500"
          />
        </div>

        <h3 className="text-2xl font-bold italic text-primary mb-2">
          Dr. Swetha
        </h3>
        <p className="text-accent uppercase tracking-widest text-xs mb-4 font-bold">
          Co-Founder & Clinical Director
        </p>

        <p className="text-primary/60 leading-relaxed font-light max-w-md mx-auto">
          Dr. Swetha plays a key role in delivering patient-centric care with precision and empathy. Her focus on modern techniques and patient comfort ensures every treatment experience is seamless and effective.
        </p>
      </motion.div>

    </div>

    {/* Quote Highlight */}
    <div className="mt-24 max-w-4xl mx-auto bg-primary p-12 md:p-16 text-center relative">
      <p className="text-2xl md:text-3xl text-white italic leading-relaxed">
        "A confident smile transforms lives. Our mission is to make that transformation accessible to everyone."
      </p>
    </div>

  </div>
</section>