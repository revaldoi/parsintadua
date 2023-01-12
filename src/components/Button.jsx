// import clsx from 'clsx'

function Button(props) {
   const { className = 'bg-black', children, text } = props;
   return (
      <button
         {...props}
         className={`${className} flex items-center gap-x-2 text-white px-4 py-2 rounded`}
      >
         {text || children}
      </button>
   );
}

export default Button;
