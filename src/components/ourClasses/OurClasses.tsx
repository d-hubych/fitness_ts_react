import { ClassType, SelectedPage } from "@/types";
import { Dispatch, FC, SetStateAction } from "react";
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from "framer-motion";
import HText from "../hText/HText";

const classes: Array<ClassType> = [
  {
    name: 'Weight Training Classes',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias error suscipit aut magni illo, autem eveniet eum repellendus sint aperiam, dolor totam fuga aspernatur voluptate molestiae odio nulla vero! Mollitia.',
    image: image1,
  },
  {
    name: 'Yoga Classes',
    image: image2,
  },
  {
    name: 'Ab Core Classes',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias error suscipit aut magni illo, autem eveniet eum repellendus sint aperiam, dolor totam fuga aspernatur voluptate molestiae odio nulla vero! Mollitia.',
    image: image3,
  },
  {
    name: 'Adventure Classes',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias error suscipit aut magni illo, autem eveniet eum repellendus sint aperiam, dolor totam fuga aspernatur voluptate molestiae odio nulla vero! Mollitia.',
    image: image4,
  },
  {
    name: 'Fitness Classes',
    image: image5,
  },
  {
    name: 'Training Classes',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias error suscipit aut magni illo, autem eveniet eum repellendus sint aperiam, dolor totam fuga aspernatur voluptate molestiae odio nulla vero! Mollitia.',
    image: image6,
  },
];

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

        <div className="mt-10 h-[353px] w-full overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, i) => (
              <li key={`${item.name}-${i}`}>
                <img src={item.image} alt="classes-image" />
              </li>
            ))}
          </ul>

        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses
