import { SelectedPage } from "@/types";
import { Dispatch, FC, SetStateAction } from "react";
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from "framer-motion";
import HText from "../hText/HText";


type Props = {
  setSelectedPage: Dispatch<SetStateAction<SelectedPage>>;
}

const OurClasses: FC<Props> = ({ setSelectedPage }) => {
  return (
    <section
      id="ourclasses"
      className="w-full bg-primary-100 py-40"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText children="OUR CLASSES" />

            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default OurClasses
