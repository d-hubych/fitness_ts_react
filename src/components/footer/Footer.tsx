import { FC } from "react"
import Logo from '@/assets/Logo.png';
import { SelectedPage } from "@/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer: FC = () =>(
  <footer className="bg-primary-100 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
      <div className="basis-1/2 mt-0">
        <AnchorLink href={`#${SelectedPage.Home}`}>
          <img src={Logo} alt="logo" />
        </AnchorLink>

        <p className="my-5">
          Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum purus et arcu massa dictum condimentum. Augue scelerisque iaculis orci ut habitant laoreet. Iaculis tristique.
        </p>

        <p>
          © Evogym All Rights Reserved.
        </p>
      </div>

      <div className="mt-12 basis-1/4 md:mt-0">
        <h4 className="font-bold">Links</h4>

        <AnchorLink
          href={`#${SelectedPage.ContactUs}`}
          className="block my-5 transition duration-500 hover:text-primary-300"
        >
          Massa orci senectus
        </AnchorLink>

        <AnchorLink
          href={`#${SelectedPage.ContactUs}`}
          className="block my-5 transition duration-500 hover:text-primary-300"
        >
          Et gravida id et etiam
        </AnchorLink>

        <AnchorLink
          href={`#${SelectedPage.ContactUs}`}
          className="block my-5 transition duration-500 hover:text-primary-300"
        >
          Ullamcorper vivamus
        </AnchorLink>
      </div>

      <div className="mt-12 basis-1/4 md:mt-0">
        <span className="font-bold">Contact Us</span>

        <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
        <a
          href="tel:(333)425-6825"
          className="transition duration-500 hover:text-primary-300"
        >
          (333)425-6825
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
