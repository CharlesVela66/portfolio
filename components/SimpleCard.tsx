interface CardProps {
    title: string;
    description: string;
    label?: string;
}

const SimpleCard = ({title, description, label} : CardProps) => {
  return (
    <div className='bg-bg-main rounded-lg w-full h-full flex flex-col py-4 px-6'>
        <h1 className='font-semibold text-lg'>{title}</h1>
        <p className='text-md'>{description}</p>
        {label && (
            <p className='font-light text-md mt-2'>{label}</p>
        )}
    </div>
  )
}

export default SimpleCard