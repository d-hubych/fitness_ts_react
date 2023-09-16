import { ClassType } from "@/types";

// type Props = {
//   name
// description
// image
// }
const overlayStyles = `
  absolute p-5 z-30
  h-[380px] w-[450px]
  flex flex-col items-center justify-center text-center
  whitespace-normal bg-primary-500 text-while
  opacity-0 transition duration-50 hover:opacity-90`;

const EachClass = ({ name, description, image }: ClassType) => {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p>
          {name}
        </p>

        <p>
          {description}
        </p>

        <img src={image} alt={`${image}`} />
      </div>
    </li>
  )
}

export default EachClass
