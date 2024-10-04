import { createContext, useContext, useRef, useEffect, useState } from "react";
import { ChevronDown } from "react-feather";

const AccordianContext = createContext();

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props} className="bg-zinc-950 rounded-2xl text-white mx-auto max-w-[1000px]">
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;

  const ref = useRef(null);

  return (
    <>
    <div className="bg-zinc-950 rounded-2xl">
    <li className={`border-b border-zinc-700  p-2 rounded-2xl text-white`} {...props}>
    
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 font-medium px-8"
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`transition-transform text-white ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 px-6 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
    </div>

    </>
  );
}
