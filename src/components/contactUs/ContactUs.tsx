import { SelectedPage } from "@/types";
import { motion } from "framer-motion";
import { Dispatch, FC, SetStateAction } from "react";
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';
import HText from "../hText/HText";

const inputStyles = 'mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white';

type Props = {
  setSelectedPage: Dispatch<SetStateAction<SelectedPage>>;
}

const ContactUs: FC<Props> = ({ setSelectedPage }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
  
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section
      id="contactus"
      className="mx-auto w-5/6 pt-12 md:pt-24 pb-16 md:pb-32"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
        >
          <HText>
            <span className="text-primary-500">
              JOIN NOW
            </span>
            {` TO GET IN SHAPE`}
          </HText>

          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/b676b71f3ae0d05f3527f493466aa4f9"
            >
              <input
                type="text"
                placeholder="NAME"
                className={inputStyles}
                {...register("name", {
                  required:  true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && 'This field is required.'}
                  {errors.name.type === "maxLength" && 'Max length is 100 char.'}
                </p>
              )}

              <input
                type="email"
                placeholder="EMAIL"
                
                className={inputStyles}
                {...register("email", {
                  required:  true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && 'This field is required.'}
                  {errors.name.type === "pattern" && 'Invalid email address.'}
                </p>
              )}

              <textarea
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                className={inputStyles}
                {...register("message", {
                  required:  true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" && 'This field is required.'}
                  {errors.message.type === "maxLength" && 'Max length is 2000 char.'}
                </p>
              )}
              
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-100 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div
              className="md:before:content-evolvetext before:absolute w-full before:-bottom-20 before:-right-10 before:z-[-1]"
            >
              <img
                src={ContactUsPageGraphic}
                alt="Contac-Us-Page-Graphic"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs
