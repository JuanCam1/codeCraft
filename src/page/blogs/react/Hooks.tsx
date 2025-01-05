import { Link } from "react-router-dom";
import reactHook from "@/assets/images/hooks.webp";

import TypographyH2 from "@/components/ui/h2";
import TypographyP from "@/components/ui/p";
import TypographyH3 from "@/components/ui/h3";
import SpanBlue from "@/components/ui/span.blue";

import UseStateSection from "./UseStateSection";
import UseEffectSection from "./UseEffectSection";
import UseMemoSection from "./UseMemoSection";
import UseCallbackSection from "./UseCallbackSection";
import UseContextSection from "./UseContextSection";
import UseIdSection from "./UseIdSection";
import UseLayoutEffectSection from "./UseLayoutEffectSection";
import UseReducerSection from "./UseReducerSection";
import UseActionState from "./UseActionState";
import UseDebugValueSection from "./useDebugValueSection";
import UseRefSection from "./UseRefSection";
import UseSyncExternalStoreSection from "./UseSyncExternalStoreSection";
import UseTransicitionSection from "./UseTransicitionSection";
import UseDeferredValueSection from "./UseDeferredValueSection";
import UseOptimisticSection from "./useOptimisticSection";
import UseFormStatusSection from "./useFormStatusSection";

const Hooks = () => {
  return (
    <>
      <TypographyH2 text="React Hooks" className="text-3xl text-center" />
      <div className="flex justify-center items-center">
        <div className="w-[50%] h-[300px] overflow-hidden">
          <img
            src={reactHook}
            className="rounded-md w-full object-cover"
            alt="React Hooks"
          />
        </div>
      </div>
      <div>
        <TypographyH2 text="¿Qué son los hooks?" />
        <TypographyP className="mt-4">
          Los hooks en React son funciones especiales que permiten "enganchar"
          (hook into) las características de React, como el estado y el ciclo de
          vida, dentro de componentes funcionales. Antes de los hooks, estas
          características solo estaban disponibles en los componentes de clase.
        </TypographyP>
      </div>
      <UseStateSection />
      <UseEffectSection />
      <UseFormStatusSection />
      <UseActionState />
      <UseOptimisticSection />
      <UseMemoSection />
      <UseCallbackSection />
      <UseRefSection />
      <UseContextSection />
      <UseIdSection />
      <UseReducerSection />
      <UseDeferredValueSection />
      <UseDebugValueSection />
      <UseTransicitionSection />
      <UseLayoutEffectSection />
      <UseSyncExternalStoreSection />
      <div className="flex flex-col">
        <TypographyH3 text="Referencias" className="text-xl" />
        <Link to="https://bluuweb.dev/05-react/04-useEffect.html">
          <SpanBlue text="bluuweb" />
        </Link>
        <Link to="https://es.react.dev/">
          <SpanBlue text="react" />
        </Link>
      </div>
      <span className="text-gray-400 text-xs">03 Enero 2024</span>
    </>
  );
};
export default Hooks;
