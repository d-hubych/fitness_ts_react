import { ClassType } from "@/types";

const overlayStyles = `
  absolute box-border p-5 z-30
  h-[380px] w-[450px]
  flex flex-col items-center justify-center text-center
  whitespace-normal bg-primary-500 text-while
  opacity-0 transition duration-50 hover:opacity-90`;

const EachClass = ({ name, description, image }: ClassType) => {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">
          {name}
        </p>

        <p className="mt-5">
          {description}
        </p>
      </div>

      <img src={image} alt={`${image}`} />
    </li>
  )
}

export default EachClass
