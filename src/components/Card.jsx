function Card({ children }) {
   return <div className={'bg-slate-50 shadow'}>{children}</div>;
}

function Title({ children }) {
   return (
      <div className={'p-4 border-b'}>
         <h1 className={'text-xl'}>{children}</h1>
      </div>
   );
}

function Body({ children }) {
   return <div className={'leading-relaxed p-4'}>{children}</div>;
}

function Footer({ children }) {
   return <div className={'bg-slate-9000 p-4'}>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
