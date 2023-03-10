// import clsx from 'clsx'

function Button(props) {
   const { className = 'bg-black', children, text } = props;
   return (
      <button
         {...props}
         className={`${className} flex items-center whitespace-nowrap inline-flex justify-center gap-x-2 text-white px-4 py-2 h-10 rounded`}
      >
         {text || children}
      </button>
   );
}

export default Button;
